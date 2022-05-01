import _  from "lodash";

/**
 * Calculates the cost of the next building
 *
 * @param base {Number} The base cost of the building
 * @param baseScaling {Number} The base scaling of the building
 * @param owned {Number} The amount owned of the building.
 * @returns {number} The cost of the next building.
 */
export function nextCost(base, baseScaling, owned) {
    return Math.round(base + (base * owned) ** (baseScaling + (owned * 0.01)));
}

/**
 * Creates a buy order describing the cost and amount of a particular building.
 *
 * Amount describes the number of the building that can be bought.
 * Cost is the total cost for buying that amount of buildings.
 *
 * @param building {Object} The building to calculate a buy order for.
 * @param resource {Number} The amount of resource available to spend.
 * @param amountToBuy {Number} The max amount to buy of the building. -1 for max amount.
 * @returns {{amount: number, cost: number, building: *}} A buy order object containing the info on how many and how much it will cost to buy a building.
 */
export function createBuyOrder(building, resource, amountToBuy) {

    let buyOrder = {
        amount: 0,
        building: _.cloneDeep(building),
        cost: 0
    };

    while (buyOrder.amount !== amountToBuy && ((buyOrder.amount < amountToBuy && amountToBuy !== -1 ) || resource - buyOrder.building.nextResourceCost >= 0 )) {
        buyOrder.cost += buyOrder.building.nextResourceCost;
        resource = resource - buyOrder.building.nextResourceCost;
        buyBuilding(buyOrder.building);
        buyOrder.amount++
    }

    return buyOrder;
}

/**
 * Performs the buying of a building and modifies the buildings attributes as needed.
 *
 * @param building {Object} The building to purchase.
 */
export function buyBuilding(building) {
    building.owned++;
    building.nextResourceCost = nextCost(building.baseCost, building.baseScaling, building.owned);
    building.perSecond = building.owned * building.value;
}

/**
 * Calculates the amount of a given resource is generated on that tick.
 *
 * Base generation is based around 1 second.
 *
 * @param owned {Number} The number of buildings owned.
 * @param buildingValue {Number} The value of each building.
 * @param timeTaken {Number} The amount of milliseconds of the previous tick.
 * @returns {Number} The amount of resource generated.
 */
export function generateResource(owned, buildingValue, timeTaken) {
    let unroundedAmountGenerated = (((timeTaken / 1000 ) * owned) * buildingValue);
    let roundedAmountGenerated = roundToTwo(unroundedAmountGenerated);
    if (roundedAmountGenerated < 0.01 && unroundedAmountGenerated !== 0) {
        roundedAmountGenerated = 0.01;
    }
    return roundedAmountGenerated;
}

/**
 * Rounds the given number to two decimal places.
 *
 * @param number {Number} The number to round.
 * @returns {number} The number rounded to two decimal places.
 */
export function roundToTwo(number) {
    return Math.round((number + Number.EPSILON) * 100) / 100;
}