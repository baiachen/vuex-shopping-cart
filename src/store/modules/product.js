import Vue from 'vue';
import Vuex from 'vuex';
import productApi from '../../api/productApi';

Vue.use(Vuex);

const setProducts = (state, payload) => state.products = payload;

const error = e => console.log(e);

const response = commit =>
  res => commit('setProducts', res.data);

const getProducts = ({ commit }) =>
  productApi
    .fetchProducts()
    .then(response(commit))
    .catch(error);

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
