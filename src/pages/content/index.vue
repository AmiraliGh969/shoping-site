<template>
  <div>
    <AppSlider />
    <div class="container">
      <br>
      <MostSellProducts />
      <LatestProduct />
    </div>
  </div>
</template>
<script>
import AppSlider from "./Component/slider.vue";
import MostSellProducts from "./Component/MostSellProducts.vue";
import LatestProduct from "./Component/LatestProduct.vue";
export default {
  components: {
    AppSlider,
    MostSellProducts,
    LatestProduct,
  },
};
</script>

