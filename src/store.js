import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    crumbArr: [],
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setCrumbArr(state, crumbArr) {
      state.crumbArr = crumbArr;
    },
  },
  actions: {

  },
});
