/* Vue */
import Vue from 'vue'
import router from './router';
// import VueResource from 'vue-resource'
import App from './App'
import {store} from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUser, faLock, faShoppingCart, faEye, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BootstrapVue from "bootstrap-vue";


library.add(
  faUserSecret,
  faUser,
  faLock,
  faShoppingCart,
  faEye,
  faAngleRight,
  faAngleLeft)


Vue.config.productionTip = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/main-css.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // Attach the Vue instance to the window,
  // so it's available globally.
  created: function () {
    window.Vue = this
  },
  router,
  store,
  render: h => h(App)
})