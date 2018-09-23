import Vue from 'vue';
import Vuex from 'vuex';
import product from '../../api/product';

Vue.use(Vuex);

const setProducts = (state, payload) => state.products = payload;

const getProducts = ({ commit }) => {
  const response = res => commit('setProducts', res.data);
  const error = e => console.log(e);

  product
    .getProducts()
    .then(response)
    .catch(error);
};

const state = {
  products: [],
};

const mutations = {
  setProducts,
};

const actions = {
  getProducts,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
