import { createStore } from 'vuex'
import goldStore from "@/store/goldStore";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    nextTick({dispatch}) {
      dispatch("goldStore/nextTick");
    }
  },
  modules: {
    goldStore
  }
})
