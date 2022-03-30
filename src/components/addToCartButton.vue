<template>
  <!-- <div>
    <li>
      <a class="add-to-cart" @click="AddOrIncCart(product)">
        <font-awesome-icon icon="shopping-cart" />
        افزودن به سبد
      </a>
    </li>
  </div> -->
  <div>
    <li>
      <div class="d-flex">
        <button class="btn btn-outline-success" @click="DecrBtn"><</button>
        <input
          type="text"
          v-model="count"
          class="form-control fw-bold mx-2 number-input-single-page"
        />
        <button class="btn btn-outline-success" @click="incrBtn">></button>
      </div>
    </li>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      count: 1,
    };
  },
  // props: {
  //   product: {
  //     type: Object,
  //     default: () => ({}),
  //   },
  // },
  methods: {
    ...mapActions(["GetSingleProductFromServer"]),
    AddToCart(product) {
      this.$store.dispatch("AddToCart", { product, count: this.count });
    },
    incrBtn() {
      this.count++;
    },
    DecrBtn() {
      this.count--;
    },
    AddOrIncCart(product) {
      this.$store.dispatch("AddOrIncCart", product);
    },
  },
  computed: {
    ...mapGetters({ product: "GetSingleProduct" }),
  },
};
</script>