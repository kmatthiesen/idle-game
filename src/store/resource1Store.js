export default {
    namespaced: true,
    state: {
        building1: {
            name: "Building-1",
            baseCost: 10,
            scaling: 1.1,
            owned: 0,
            canBuyNext: true,
            nextResourceCost: 10,
        }
    },
    getters: {
        getBuilding1(state) {
            return state.building1;
        }
    },
    mutations: {
        buyBuilding1(state, payload) {
            payload;
            state.building1.owned++;
        }
    },
    actions: {
        buyBuilding1({commit}, payload) {
            commit("buyBuilding1", payload);
        }
    },
}