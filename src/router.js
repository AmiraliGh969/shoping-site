import Vue from 'vue'
import Router from 'vue-router';
import index from './pages/content/index.vue'
import product from './pages/products/product.vue'
import AboutUs from './pages/aboutUs/AboutUs.vue'
import SingleProduct from './pages/singlePages/singlePages.vue'
import logIn from './pages/Account/LogIn.vue'
import signup from './pages/Account/signup.vue'
Vue.use(Router)
let routes = new Router(
  {
    mode: 'history',
    scrollBehavior () {
      return {
        x: 0,
        y: 0
      }
    },
    base: '/app',
    routes: [
      {
        path: "/",
        component: index
      },
      {
        path: "/products/:category",
        component: product
      },
      {
        path: "/aboutUs",
        component: AboutUs
      },
      {
        path: "/products/single/:id",
        component: SingleProduct,
        name: 'SingleProduct'
      },
      {
        path: "/logIn",
        component: logIn
      },
      {
        path: "/signup",
        component: signup
      }
    ]
   }
);


export default routes