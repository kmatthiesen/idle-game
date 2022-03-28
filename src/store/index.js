import { createStore } from 'vuex'
import resource1Store from "@/store/resource1Store";

export default createStore({
  state: {
    resource1: 10
  },
  getters: {
    getResource1(state) {
      return state.resource1;
    }
  },
  mutations: {
    generateResources(state, payload) {
      console.log(payload);
      state.resource1++;
    }
  },
  actions: {
    nextTick({commit}, payload) {
      commit("generateResources", payload);
    }
  },
  modules: {
    resource1Store
  }
})
