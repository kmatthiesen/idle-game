export function nextCost(base, scaling, owned) {
    return Math.trunc((owned ^ scaling) + base);
}

export function canBuy(resource, base, scaling, owned) {
    return resource >= nextCost(base, scaling, owned);
}