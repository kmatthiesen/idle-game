import {generateResource, nextCost, roundToTwo} from "@/utils/cost";
import {GOLD_BUILDING_ID} from "@/utils/id-values";

export default {
    namespaced: true,
    state: {
        gold: {
            id: "gold",
            displayName: "Gold",
            amount: 10,
            perSecond: 0
        },
        buildings: {
            [GOLD_BUILDING_ID.goldBuilding1]: {
                id: GOLD_BUILDING_ID.goldBuilding1,
                displayName: "Building-1",
                baseCost: 10,
                baseScaling: 0.9,
                owned: 0,
                nextResourceCost: 10,
                value: 1,
                perSecond: 0
            },
            [GOLD_BUILDING_ID.goldBuilding2]: {
                id: GOLD_BUILDING_ID.goldBuilding2,
                displayName: "Building-2",
                baseCost: 100,
                baseScaling: 0.92,
                owned: 0,
                nextResourceCost: 100,
                value: 10,
                perSecond: 0
            },
            [GOLD_BUILDING_ID.goldBuilding3]: {
                id: GOLD_BUILDING_ID.goldBuilding3,
                displayName: "Building-3",
                baseCost: 2000,
                baseScaling: 0.93,
                owned: 0,
                nextResourceCost: 2000,
                value: 150,
                perSecond: 0
            },
            [GOLD_BUILDING_ID.goldBuilding4]: {
                id: GOLD_BUILDING_ID.goldBuilding4,
                displayName: "Building-4",
                baseCost: 30000,
                baseScaling: 0.95,
                owned: 0,
                nextResourceCost: 30000,
                value: 1000,
                perSecond: 0
            },
            [GOLD_BUILDING_ID.goldBuilding5]: {
                id: GOLD_BUILDING_ID.goldBuilding5,
                displayName: "Building-5",
                baseCost: 150000,
                baseScaling: 1,
                owned: 0,
                nextResourceCost: 150000,
                value: 4500,
                perSecond: 0
            }
        }
    },
    getters: {
        getBuilding: (state) => (id) => {
            return state.buildings[id];
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
            let building = state.buildings[buildingId];
            let newGoldAmount = state.gold.amount - building.nextResourceCost;
            if (newGoldAmount >= 0) {
                state.gold.amount = newGoldAmount;
                building.owned++;
                building.nextResourceCost = nextCost(building.baseCost, building.baseScaling, building.owned);
                building.perSecond = building.owned * building.value;
                state.gold.perSecond += building.value;
            }
        },
        nextTick(state, timeTaken) {
            let amountGenerated = 0;
            Object.keys(state.buildings).forEach(key => {
                amountGenerated += generateResource(state.buildings[key].owned, state.buildings[key].value, timeTaken);

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