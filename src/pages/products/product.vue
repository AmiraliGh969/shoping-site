<template>
<div class="container">
  <div class="row my-5">
    <div class="col-md-3 mt-3" v-for="product in FillterMoreProduct" :key="product.MoreProductID">
      <!-- <div class="card text-center p-2" >
        <router-link :to="`/products/single/${MoreProduct.id}`">
          <img :src="MoreProduct.image" class="card-img-top">
        </router-link>
        <div class="card-body">
          <h5 class="card-title cash-range">{{ MoreProduct.price }} $</h5>
          <p class="card-text text-secondary">{{ MoreProduct.title }}</p>
          <div class="row">
            <ul class="nav nav-pills justify-content-around">
              <router-link :to="`/products/single/${MoreProduct.id}`">
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
      </div> -->
      <boxProduct :product="product" />
    </div>
    <div class="col-md-3 mt-3" v-for="product in FillterMoreProduct" :key="product.MoreProductID">
      <!-- <div class="card text-center p-2" >
        <router-link :to="`/products/single/${MoreProduct.id}`">
          <img :src="MoreProduct.image" class="card-img-top">
        </router-link>
        <div class="card-body">
          <h5 class="card-title cash-range">{{ MoreProduct.price }} $</h5>
          <p class="card-text text-secondary">{{ MoreProduct.title }}</p>
          <div class="row">
            <ul class="nav nav-pills justify-content-around">
              <router-link :to="`/products/single/${MoreProduct.id}`">
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
      </div> -->
      <boxProduct :product="product" />

    </div>
    <div class="row mt-2">
      <div class="col-md-12 d-flex">
        <router-link class="product-slider-btn" to="/products/women's clothing" active-class="active">1</router-link>
        <router-link class="product-slider-btn" to="/products/men's clothing">2</router-link>
        <router-link class="product-slider-btn" to="/products/electronics">3</router-link>
        <router-link class="product-slider-btn" to="/products/jewelery">4</router-link>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import boxProduct from '../../components/boxProduct.vue'
export default {
  computed: {
    FillterMoreProduct() {
      return this.$store.getters.GetMoreProduct;
    },
  },
  components: {
    boxProduct
  },
  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      this.$store.dispatch(
        "GetMoreProductFromServer",
        this.$route.params.category
      );
    },
  },
  watch: {
    "$route.params.category": "loadProducts",
  },
};
</script>