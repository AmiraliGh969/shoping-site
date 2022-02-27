import Vue from 'vue';
import Vuex from 'vuex';


import slider from './modules/Slider.js'
import product from './modules/Product.js'
import user from './modules/User'

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {},
  modules: {
    slider,
    product,
    user
  }
});
