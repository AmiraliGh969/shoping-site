<template>
  <div class="card text-center p-2">
    <router-link :to="`/products/single/${product.id}`">
      <img :src="product.image" class="card-img-top">
    </router-link>
    <div class="card-body">
      <h5 class="card-title cash-range">{{ product.price }} $</h5>
      <p class="card-text text-secondary">{{ product.title }}</p>
      <div class="row">
        <ul class="nav nav-pills justify-content-around">
          <li>
            <router-link :to="`/products/single/${product.id}`">
              <a href="/" class="add-to-cart">
                <font-awesome-icon icon="eye"/>
                مشاهده
              </a>
            </router-link>
          </li>
          <li>
            <addToCart :product="product" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import addToCart from './addToCartButton.vue'
export default {
  name: "boxProduct",
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
    // id:{
    //   type: [String, Number]
    // },
    // title: {
    //   type: String
    // },
    // price: {
    //   type: [String, Number]
    // },
    // image: {
    //   type: String
    // }

  },
  components: {
    addToCart
  }
}
</script>