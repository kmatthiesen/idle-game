import {nextCost} from "@/utils/cost";

export default {
    namespaced: true,
    state: {
        building1: {
            name: "Building-1",
            baseCost: 10,
            scaling: 1.1,
            owned: 0,
            nextResourceCost: 10,
            value: 1
        }
    },
    getters: {
        getBuilding1(state) {
            return state.building1;
        }
    },
    mutations: {
        buyBuilding1(state) {
            state.building1.owned++;
            state.building1.nextResourceCost = nextCost(state.building1.baseCost, state.building1.scaling, state.building1.owned);
        },
    },
    actions: {
        buyBuilding1(context) {
            let newResource1 = context.rootState.resource1 - context.state.building1.nextResourceCost;
            context.dispatch("updateResource1", {newResource1}, {root: true});
            context.commit("buyBuilding1");
        }
    },
}