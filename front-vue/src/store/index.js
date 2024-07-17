import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    address: {}
  },
  mutations: {
    setAddress(state, address) {
      state.address = address;
    }
  },
  actions: {
    async fetchAddress({ commit }, cep) {
      const response = await axios.get(`http://localhost:8000/api/cep/${cep}`);
      commit('setAddress', response.data);
    }
  },
  getters: {
    getAddress: state => state.address
  }
});
