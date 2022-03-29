import {generateResource, nextCost, roundToTwo} from "@/utils/cost";
import {BUILDING_ID} from "@/utils/id-values";

export default {
    namespaced: true,
    state: {
        gold: {
            id: "gold",
            displayName: "Gold",
            amount: 10
        },
        [BUILDING_ID.building1]: {
            id: BUILDING_ID.building1,
            displayName: "Building-1",
            baseCost: 10,
            baseScaling: 1.1,
            owned: 0,
            nextResourceCost: 10,
            value: 1
        },
        [BUILDING_ID.building2]: {
            id: BUILDING_ID.building2,
            displayName: "Building-2",
            baseCost: 10,
            baseScaling: 1.1,
            owned: 0,
            nextResourceCost: 10,
            value: 5
        },
        [BUILDING_ID.building3]: {
            id: BUILDING_ID.building3,
            displayName: "Building-3",
            baseCost: 10,
            baseScaling: 1.1,
            owned: 0,
            nextResourceCost: 10,
            value: 1
        },
        [BUILDING_ID.building4]: {
            id: BUILDING_ID.building4,
            displayName: "Building-4",
            baseCost: 10,
            baseScaling: 1.1,
            owned: 0,
            nextResourceCost: 10,
            value: 1
        },
        [BUILDING_ID.building5]: {
            id: BUILDING_ID.building5,
            displayName: "Building-5",
            baseCost: 10,
            baseScaling: 1.1,
            owned: 0,
            nextResourceCost: 10,
            value: 1
        }
    },
    getters: {
        getBuilding: (state) => (id) => {
            return state[id];
        },
        getGold(state) {
            return state.gold;
        },
        getGoldAmount(state) {
            return state.gold.amount;
        },
    },
    mutations: {
        buyBuilding(state, buildingId) {
            let newGoldAmount = state.gold.amount - state[buildingId].nextResourceCost;
            if (newGoldAmount >= 0) {
                state.gold.amount = newGoldAmount;
                state[buildingId].owned++;
                state[buildingId].nextResourceCost = nextCost(state[buildingId].baseCost, state[buildingId].baseScaling, state[buildingId].owned);
            }
        },
        nextTick(state, timeTaken) {
            let amountGenerated = 0;
            Object.keys(state).forEach(key => {
                if (key.includes("building")) {
                    amountGenerated += generateResource(state[key].owned, state[key].value, timeTaken);
                }
            });
            state.gold.amount = roundToTwo(state.gold.amount + amountGenerated);
        }
    },
    actions: {
        buyBuilding({commit}, buildingId) {
            commit("buyBuilding", buildingId);
        },
        nextTick({commit}, timeTaken) {
            commit("nextTick", timeTaken);
        }
    },
}