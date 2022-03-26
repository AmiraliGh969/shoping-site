
import Vue from 'vue'
import router from './router';
import App from './App'
import {store} from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUser, faLock, faShoppingCart, faEye, faAngleRight, faAngleLeft, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BootstrapVue from "bootstrap-vue";
import Vuelidate from 'vuelidate'
import VueCookie from 'vue-cookie'


library.add(
  faUserSecret,
  faUser,
  faLock,
  faShoppingCart,
  faEye,
  faAngleRight,
  faAngleLeft,
  faWindowClose)


Vue.config.productionTip = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(VueCookie);


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/main-css.css'


new Vue({
  el: '#app',
  created: function () {
    window.Vue = this
  },
  router,
  store,
  render: h => h(App)
})