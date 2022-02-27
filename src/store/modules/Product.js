import { client } from "../../api/client";

const state = {
  MostSellProducts: [],
  LatestProduct:[],
  MoreProduct: [],
  SingleProduct: {},
  SuggestedProduct: [],
};

const getters = {
  GetMostSellProducts(state) {
    return state.MostSellProducts;
  },
  GetLatestProduct(state) {
    return state.LatestProduct;
  },
  GetMoreProduct(state) {
    return state.MoreProduct;
  },
  GetSingleProduct(state) {
    return state.SingleProduct;
  },
  GetSuggestedProduct(state) {
    return state.SuggestedProduct;
  },
};

const mutations = {
  SetMostSellProducts(state, MostSellProducts) {
    state.MostSellProducts = MostSellProducts;
  },
  SetLatestProduct(state, LatestProduct) {
    state.LatestProduct = LatestProduct;
  },
  SetMoreProduct(state, MoreProduct) {
    state.MoreProduct = MoreProduct;
  },
  SetSingleProduct(state, SingleProduct) {
    state.SingleProduct = SingleProduct;
  },
  SetSuggestedProduct(state, SuggestedProduct) {
    state.SuggestedProduct = SuggestedProduct;
  },
};

const actions = {
  GetMostSellProductsFromServer(context) {
    client.get('/products?limit=8')
    .then(data => {
      context.commit("SetMostSellProducts", data)
    })
  },
  GetLatestProductFromServer(context) {
    client.get('/products/category/electronics')
    .then(data => {
      context.commit("SetLatestProduct", data)
    })
  },
  GetMoreProductFromServer(context, category = '') {
    client.get(`/products/category/${category}`)
    .then(data => {
      context.commit("SetMoreProduct", data)
    })
  },
  GetSingleProductFromServer(context, Fillter) {
    client.get('/products/' + Fillter.productID)
    .then(data => {
      context.commit("SetSingleProduct", data)
    })
  },
  GetSuggestedProductFromServer(context) {
    client.get('/products/category/jewelery?limit=4')
    .then(data => {
      context.commit("SetSuggestedProduct", data)
    })
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}