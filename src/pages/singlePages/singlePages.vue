<template>
    <div>
      <div class="container my-5">
        <div class="row">
          <div class="col-md-6 py-3">
            <h5><strong>product Number {{product.id}}</strong></h5>
            <p class="text-secondary"><strong>ID: 010001341</strong></p>
            <br>
            <h4 class="text-warning"><strong>price: {{product.price}}$</strong></h4>
            <br>
            <div class="d-flex ">           
              <button class="btn btn-outline-success" @click="DecrBtn"> < </button>
              <input type="text" v-model="count" class="form-control fw-bold mx-2 number-input-single-page">
              <button class="btn btn-outline-success" @click="incrBtn"> > </button>
              <a class="btn btn-outline-warning ms-5" @click="AddToCart(product)">
                <font-awesome-icon icon="shopping-cart"/>
                Add to your card</a>
            </div>
            <p class="text-secondary mt-4">{{product.description}}</p>
          </div>
          <div class="col-md-6 d-flex justify-content-center">
            <img :src="product.image" class="image-for-single-page">
          </div>
        </div>
      </div>
        <SuggestedProduct />
    </div>

</template>
<script>
import { mapGetters, mapActions } from "vuex";
import SuggestedProduct from "./components/suggestedProduct.vue";
export default {
  data() {
    return {
      count:1
    }
  },
  computed: {
    ...mapGetters({ product: "GetSingleProduct" }),
  },
  methods: {
    ...mapActions(["GetSingleProductFromServer"]),
    AddToCart(product) {
      this.$store.dispatch("AddToCart", { product, count: this.count })
    },
    incrBtn() {
      this.count ++
    },
    DecrBtn() {
      this.count --
    }
  },
  created() {
    this.GetSingleProductFromServer({
      productID: this.$route.params.id,
    });
  },
  components: {
    SuggestedProduct,
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        this.$store.dispatch("GetSingleProductFromServer", {
          productID: this.$route.params.id,
        });
      },
    },
  },
};
</script>