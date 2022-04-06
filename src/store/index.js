import {createStore} from 'vuex'
import goldStore from "@/store/goldStore";

export default createStore({
    state: {
        previousTimeStamp: 0
    },
    getters: {
        getBuilding: (state, getters, rootState, rootGetters) => (store, buildingId) => {
            return rootGetters[store + "/getBuilding"](buildingId);

        },
        getResource: (state, getters, rootState, rootGetters) => (store) => {
            return rootGetters[store + "/getResource"];
        },
    },
    mutations: {
        updatePreviousTimeStamp(state, newTimeStamp) {
            state.previousTimeStamp = newTimeStamp;
        }
    },
    actions: {
        nextTick({dispatch, state, commit}, timestamp) {
            let timeTaken = timestamp - state.previousTimeStamp;
            commit("updatePreviousTimeStamp", timestamp);
            dispatch("goldStore/nextTick", timeTaken);
        },
        buyBuilding({dispatch}, buyOrder) {
            dispatch(buyOrder.store + "/buyBuilding", buyOrder);
        }
    },
    modules: {
        goldStore
    }
})
