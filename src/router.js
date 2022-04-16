import Vue from 'vue'
import Router from 'vue-router';
import index from './pages/content/index.vue'
import product from './pages/products/product.vue'
import AboutUs from './pages/aboutUs/AboutUs.vue'
import SingleProduct from './pages/singlePages/singlePages.vue'
import logIn from './pages/Account/LogIn.vue'
import signup from './pages/Account/signup.vue'
import shopCart from './pages/shopCarts/userShopCarts.vue'
import dashboard from './pages/Dashboard/main-page.vue'
import allUsers from './components/allUsers.vue'
import userInformation from './components/singleUserInformation.vue'
import allProduct from './components/allProductDashboard.vue'
import singleProductDetailsDashboard from './components/singleProductDetailsDashboard.vue'
import allShirtsPageDashboard from './components/allShirtsPageDashboard.vue'
import allShoesPageDashboard from './components/allShoesPageDashboard.vue'
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
    // base: '/app',
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
      },
      {
        path: "/shopCart",
        component: shopCart
      },
      {
        path: "/dashboard",
        component: dashboard,
        children: [
          {
            path: "/dashboard/allUsers",
            component: allUsers
          },
          {
            path: "/dashboard/userInformation",
            component: userInformation
          },
          {
            path: "/dashboard/allProduct",
            component: allProduct
          },
          {
            path: "/dashboard/singleProductDetailsDashboard",
            component: singleProductDetailsDashboard
          },
          {
            path: "/dashboard/shirtPageDashboard",
            component: allShirtsPageDashboard
          },
          {
            path: "/dashboard/shoesPageDashboard",
            component: allShoesPageDashboard
          }
        ]
      }
    ]
   }
);


export default routes