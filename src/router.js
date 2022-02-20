import Vue from 'vue'
import Router from 'vue-router';
import index from './pages/content/index.vue'
import product1 from './pages/products/product1.vue'
import product2 from './pages/products/product2.vue'
import product3 from './pages/products/product3.vue'
import AboutUs from './pages/aboutUs/AboutUs.vue'
Vue.use(Router)
let routes = new Router(
    {  mode: 'history',
    base: '/app',
      routes:[
  {
    path: "/",
    component: index
  },
  {
    path: "/product1",
    component: product1
  },
  {
    path: "/product2",
    component: product2
  },
  {
     path: "/product3",
     component: product3
  },
  {
    path: "/AboutUs",
    component: AboutUs
  }
]});


export default routes