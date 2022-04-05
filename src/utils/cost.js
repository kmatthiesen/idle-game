import { cloneDeep }  from "lodash";

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

export function buyBuildings(building, resource, amountToBuy) {
    let currentBuilding = cloneDeep(building);

    let bought = 0;
    while (resource - building.nextResourceCost >= 0 || bought < amountToBuy) {
        resource = resource - building.nextResourceCost;
        buyBuilding(currentBuilding, resource);
        bought++
    }

    return {
        currentBuilding,
        resource
    }
}

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