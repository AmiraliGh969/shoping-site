<template>
  <div class="row my-5">
    <h4 class="text-center text-warning ">جدید ترین  محصولات</h4>
    <br>
    <div class="col-md-3 mt-3" v-for="product in LatestProduct" :key="product.productID">
      <div class="card text-center p-2" >
        <router-link :to="`/products/single/${product.id}`">
          <img :src="product.image" class="card-img-top">
        </router-link>
        <div class="card-body">
          <h5 class="card-title cash-range">{{ product.price }} $</h5>
          <p class="card-text text-secondary">{{ product.title }}</p>
          <div class="row">
            <ul class="nav nav-pills justify-content-around">
              <router-link :to="`/products/single/${product.id}`">
                <li>
                  <a href="/" class="add-to-cart">
                    <font-awesome-icon icon="eye"/>
                    مشاهده
                  </a>
                </li>
              </router-link>
              <li>
                <a href="/" class="add-to-cart">
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
  computed: {
    LatestProduct() {
      return this.$store.getters.GetLatestProduct;
    },
  },

  created() {
    if (this.LatestProduct.length == 0) {
      this.$store.dispatch("GetLatestProductFromServer");
    }
  },
};
</script>