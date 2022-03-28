export function nextCost(base, baseScaling, owned) {
    return Math.round(base + (base * owned) ** calculateScaling(baseScaling, owned));
}

function calculateScaling(baseScaling, owned) {
    return baseScaling + Math.trunc(owned / 25) * 0.1;
}