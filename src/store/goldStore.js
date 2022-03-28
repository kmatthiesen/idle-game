import {nextCost} from "@/utils/cost";

export default {
    namespaced: true,
    state: {
        gold: {
            id: "gold",
            displayName: "Gold",
            amount: 10
        },
        building1: {
            id: "building1",
            displayName: "Building-1",
            baseCost: 10,
            baseScaling: 1.1,
            owned: 0,
            nextResourceCost: 10,
            value: 1
        }
    },
    getters: {
        getBuilding1(state) {
            return state.building1;
        },
        getGold(state) {
            return state.gold;
        },
        getGoldAmount(state) {
            return state.gold.amount;
        }
    },
    mutations: {
        buyBuilding1(state) {
            state.building1.owned++;
            state.gold.amount -= state.building1.nextResourceCost;
            state.building1.nextResourceCost = nextCost(state.building1.baseCost, state.building1.baseScaling, state.building1.owned);
        },
        nextTick(state) {
            state.gold.amount += state.building1.owned * state.building1.value;
        }
    },
    actions: {
        buyBuilding1({commit}) {
            commit("buyBuilding1");
        },
        nextTick({commit}) {
            commit("nextTick");
        }
    },
}