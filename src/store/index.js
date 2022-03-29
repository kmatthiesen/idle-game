import { createStore } from 'vuex'
import goldStore from "@/store/goldStore";

export default createStore({
  state: {
    previousTimeStamp: 0
  },
  getters: {},
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
    }
  },
  modules: {
    goldStore
  }
})
