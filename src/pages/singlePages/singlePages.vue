<template>
    <div>
      <div class="container my-5">
        <div class="row">
          <div class="col-md-6 py-3">
            <h5><strong>product Number {{SingleProduct.id}}</strong></h5>
            <p class="text-secondary"><strong>ID: 010001341</strong></p>
            <br>
            <h4 class="text-warning"><strong>price: {{SingleProduct.price}}$</strong></h4>
            <br>
            <div class="d-flex ">
              <p><strong>Number:</strong></p>
              <input type="number" value="0" class="form-control fw-bold ms-2 number-input-single-page">
              <a href="#" class="btn btn-outline-warning ms-5">
                <font-awesome-icon icon="shopping-cart"/>
                Add to your card</a>
            </div>
            <p class="text-secondary mt-4">{{SingleProduct.description}}</p>
          </div>
          <div class="col-md-6 d-flex justify-content-center">
            <img :src="SingleProduct.image" class="image-for-single-page">
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
  computed: {
    ...mapGetters({ SingleProduct: "GetSingleProduct" }),
  },
  methods: {
    ...mapActions(["GetSingleProductFromServer"]),
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