import stocks from './../../Data/stocks.js';

const state = {
  stocks: [],
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RANDOMIZE_STOCKS() {},
};

const actions = {
  initStocks({ commit }) {
    commit('SET_STOCKS', stocks);
  },
  buyStocks({ commit }) {
    commit();
  },
  randomizeStocks({ commit }) {
    commit('RANDOMIZE_STOCKS');
  },
};

const getters = {
  getStocks(state) {
    return state.stocks;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
