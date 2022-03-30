<template>
  <div class="container my-5">
    <div class="row">
      <h3 class="text-warning text-center w-100 mt-5 mb-4"><strong>پیشنهادی</strong></h3>
      <div class="card text-center p-2 mx-2" v-for="product in suggestedProducts" :key="product.productID">
        <router-link :to="`/Products/Single/${product.id}`">
          <img :src="product.image" class="card-img-top">
        </router-link>
        <div class="card-body">
          <h5 class="card-title cash-range">{{ product.price }} $</h5>
          <p class="card-text text-secondary">{{ product.title }}</p>
          <div class="row">
            <ul class="nav nav-pills justify-content-around">
              <router-link :to="`/Products/Single/${product.id}`">
                <li>
                  <a href="/" class="add-to-cart">
                    <font-awesome-icon icon="eye"/>
                    مشاهده
                  </a>
                </li>
              </router-link>
              <li>
                <a class="add-to-cart" @click="AddOrIncCart(product)">
                  <font-awesome-icon icon="shopping-cart"/>
                  افزودن به سبد
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    AddOrIncCart(product) {
      this.$store.dispatch("AddOrIncCart",product)
    }
  },
  computed: {
    suggestedProducts() {
      return this.$store.getters.GetSuggestedProduct;
    },
  },
  created() {
    this.$store.dispatch("GetSuggestedProductFromServer");
  },
};
</script>