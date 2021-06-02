import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  {
    path: '/portfolio',
    component: () => import('./../components/Portfolio/Portfolio.vue'),
  },
  {
    path: '/stocks',
    component: () => import('./../components/Stocks/Stocks.vue'),
  },
];

export default new VueRouter({ routes, mode: 'history' });
