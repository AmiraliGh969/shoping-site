import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'


import slider from './modules/Slider.js'
import product from './modules/Product.js'
import user from './modules/User'
import cart from './modules/Cart'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['cart']
})

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {},
  modules: {
    slider,
    product,
    user,
    cart
  },
  plugins: [vuexLocal.plugin]
});
