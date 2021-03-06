import Vue from 'vue'
import router from './router';
import App from './App.vue'
import {store} from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faBell,faCheck,faTrash,faUserSlash,faPen,faDollarSign,faGem,faShoePrints,faTshirt,faBoxOpen,faUserSecret, faUser, faLock, faShoppingCart, faEye, faAngleRight, faAngleLeft, faWindowClose,faSearch, faList,faHome,faCog,faFolderOpen,faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BootstrapVue from "bootstrap-vue";
// import Vuelidate from 'vuelidate'
import VueCookie from 'vue-cookie'
import Price from './components/Price.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/main-css.css'

library.add(
  faUserSecret,
  faUser,
  faLock,
  faShoppingCart,
  faEye,
  faAngleRight,
  faAngleLeft,
  faWindowClose,
  faSearch,
  faList,
  faHome,
  faCog,
  faFolderOpen,
  faDoorOpen,
  faBoxOpen,
  faTshirt,
  faShoePrints,
  faGem,
  faDollarSign,
  faPen,
  faUserSlash,
  faTrash,
  faCheck,
  faBell)

Vue.config.productionTip = false
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('price', Price)
Vue.use(BootstrapVue);
// Vue.use(Vuelidate);
Vue.use(VueCookie);

new Vue({
  el: '#app',
  created: function () {
    window.Vue = this
  },
  router,
  store,
  render: h => h(App)
})
