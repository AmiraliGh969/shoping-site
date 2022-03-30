// import { client } from "../../api/client";

const state = {
  items: {
    // [product1Id]: {
    //   product: {...},
    //   count: 1,
    //   price: 55
    // },
    // [product2Id]: {
    //   product: {...},
    //   count: 1,
    //   price: 55
    // }
  },
}

const getters = {
  allItems(state) {
    return Object.values(state.items);
  },
  cartTotal(state) {
    return Object.values(state.items).reduce((sum, { price, count }) => sum + (count * price), 0)
  },
};

const mutations = {
  IncCart(state, product) {
    const productId = product.id
    if (state.items[productId]) {
      state.items[productId].count++
      state.items[productId] = { ...state.items[productId] }
    } else {
      state.items[productId] = {
        product,
        count: 1,
        price: product.price
      }
    }
  },
  DecCart(state, product) {
    const productId = product.id
    if (state.items[productId]) {
      state.items[productId].count--
      if (state.items[productId].count <= 0) {
        delete state.items[productId]
      } else {
        state.items[productId] = { ...state.items[productId] }
      }
    }
  },
  setCartCount(state, {product, count = 1}) {
    const productId = product.id
    state.items[productId] = {
      product,
      count,
      price: product.price
    }

  },

};

const actions = {
  AddOrIncCart(context, product) {
    context.commit("IncCart", product)
    console.log("hello");
  },
  ClearOrDecCart(context, product) {
    context.commit("DecCart", product)
  },
  AddToCart(context, {product, count}) {
    context.commit("setCartCount", {product, count})
    console.log("how are you", count);
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}