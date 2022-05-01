import {createStore} from 'vuex'
import goldStore from "@/store/goldStore";
import _ from "lodash";
import {objectForEach} from "@/utils/object";
import {MODULE_ID} from "@/utils/id-values";

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
        },
        load(state, savedState) {
            state = savedState;
        }
    },
    actions: {
        nextTick({dispatch, state, commit}, timestamp) {
            let timeTaken = timestamp - state.previousTimeStamp;
            commit("updatePreviousTimeStamp", timestamp);
            dispatch("goldStore/nextTick", timeTaken);
            // dispatch("save");
        },
        buyBuilding({dispatch}, buyOrder) {
            dispatch(buyOrder.store + "/buyBuilding", buyOrder);
        },
        save({rootState}) {
            let saveState = _.cloneDeep(rootState);
            saveState.saveTime = Date.parse(new Date());
            localStorage.removeItem("saveState");
            localStorage.setItem("saveState", JSON.stringify(saveState));
        },
        load({dispatch}) {
            let savedState = JSON.parse(localStorage.getItem("saveState"));
            objectForEach(savedState, (module) => {
                if (_.has(MODULE_ID, module) && module !== MODULE_ID.root) {
                    dispatch(module + "/load", savedState[module]);
                }
            });
            // dispatch("save");
        }
    },
    modules: {
        goldStore
    }
})
