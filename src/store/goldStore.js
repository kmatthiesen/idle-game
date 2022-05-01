import {generateResource, roundToTwo} from "@/utils/cost";
import {GOLD_BUILDING_ID, RESOURCE_ID} from "@/utils/id-values";
import {calculatePerSecond} from "@/utils/store-util";
import _ from "lodash";
import {mergeObjects, objectForEach} from "@/utils/object";

export default {
    namespaced: true,
    state: {
        resource: {
            id: RESOURCE_ID.gold,
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
        getResource(state) {
            return state.resource;
        },
    },
    mutations: {
        buyBuilding(state, buyOrder) {
            let building = state.buildings[buyOrder.building.id];

            building.owned = buyOrder.building.owned;
            building.nextResourceCost = buyOrder.building.nextResourceCost;
            building.perSecond = buyOrder.building.perSecond;

            state.resource.amount -= buyOrder.cost;
            state.resource.perSecond = calculatePerSecond(state.buildings);
        },
        nextTick(state, timeTaken) {
            let amountGenerated = 0;
            Object.keys(state.buildings).forEach(key => {
                amountGenerated += generateResource(state.buildings[key].owned, state.buildings[key].value, timeTaken);

            });
            state.resource.amount = roundToTwo(state.resource.amount + amountGenerated);
        },
        load(state, savedState) {

        }
    },
    actions: {
        buyBuilding({commit}, buyOrder) {
            commit("buyBuilding", buyOrder);
        },
        nextTick({commit}, timeTaken) {
            commit("nextTick", timeTaken);
        },
        load({commit}, savedState) {
            commit("load", savedState);
        }
    },
}