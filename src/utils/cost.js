export function nextCost(base, baseScaling, owned) {
    return Math.round(base + (base * owned) ** (baseScaling + (owned * 0.01)));
}

export function generateResource(ownedBuilding, buildingValue, timeTaken) {
    let unroundedAmountGenerated = (((timeTaken / 1000 ) * ownedBuilding) * buildingValue);
    let roundedAmountGenerated = roundToTwo(unroundedAmountGenerated);
    if (roundedAmountGenerated < 0.01 && unroundedAmountGenerated !== 0) {
        roundedAmountGenerated = 0.01;
    }
    return roundedAmountGenerated;
}

export function roundToTwo(number) {
    return Math.round((number + Number.EPSILON) * 100) / 100;
}