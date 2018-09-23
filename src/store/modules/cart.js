import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const totalCount = state => state.cart.length;

const reducer = (acc, product) => acc + product.price;

const totalPrice = state => state.cart.reduce(reducer, 0);

const isInCart = state =>
  product => state.cart.findIndex(({ id }) => (id === product.id)) !== -1;

const addToCart = (state, payload) => state.cart = [...state.cart, payload];

const removeFromCart = (state, payload) => {
  const index = state.cart.findIndex(({ id }) => id === payload.id);
  if (index !== -1) { state.cart.splice(index, 1); }
};

const state = {
  cart: [],
};

const getters = {
  totalCount,
  totalPrice,
  isInCart,
};

const mutations = {
  addToCart,
  removeFromCart,
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
