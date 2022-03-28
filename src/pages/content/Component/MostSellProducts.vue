<template>
  <div class="mt-5">
    <h3 class="text-center text-warning">پرفروش ترین محصولات</h3>
    <br>
    <div class="row">
      <div class="col-md-3 my-2" v-for="product in MostSellProducts" :key="product.id">
        <!-- <div class="card text-center p-2">
          <router-link :to="`/products/single/${product.id}`">
            <img :src="product.image" class="card-img-top">
          </router-link>
          <div class="card-body">
            <h5 class="card-title cash-range">{{ product.price }} $</h5>
            <p class="card-text text-secondary">{{ product.title }}</p>
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
        </div> -->
      <boxProduct :id="product.id" :image="product.image" :title="product.title" :price="product.price" />
      </div>
    </div>
  </div>
</template>
<script>
import boxProduct from '../../../components/boxProduct.vue'
export default {
  computed: {
    MostSellProducts() {
      return this.$store.getters.GetMostSellProducts;
    },
  },
  components: {
    boxProduct
  },
  created() {
    if (this.MostSellProducts.length == 0) {
      this.$store.dispatch("GetMostSellProductsFromServer");
    }
  },
};
</script>