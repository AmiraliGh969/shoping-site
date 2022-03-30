<template>
  <div v-if="!curretnItemInCart">
    <a class="add-to-cart" @click="AddOrIncCart(product)">
      <font-awesome-icon icon="shopping-cart" />
      افزودن به سبد
    </a>
  </div>
  <div v-else>
    <div class="d-flex">
      <button class="btn btn-outline-success" @click="ClearOrDecCart(product)">-</button>
      <input
        type="text"
        :value="count"
        readonly
        class="form-control fw-bold mx-2 number-input-single-page"
      />
      <button class="btn btn-outline-success" @click="AddOrIncCart(product)">+</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  methods: {
    ...mapActions(["AddOrIncCart", "ClearOrDecCart"]),
    // AddToCart(product) {
    //   this.$store.dispatch("AddToCart", { product, count: this.count });
    // },
    // AddOrIncCart(product) {
    //   this.$store.dispatch("AddOrIncCart", product);
    //   this.count++;
    // },
    // ClearOrDecCart(product) {
    //   this.$store.dispatch("ClearOrDecCart", product);
    //   this.count--;
    // }
  },
  computed: {
    ...mapState(['cart']),
    curretnItemInCart() {
      return this.cart.items[this.product.id] || null
    },
    count() {
      return this.curretnItemInCart ? this.curretnItemInCart.count : 0
    }
  },
};
</script>