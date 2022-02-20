<template>
  <div class="container">
    <div class="row">
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          fade
          indicators
          controls
          img-width="1024"
          img-height="480"
          ref="myCarousel"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >

          <b-carousel-slide class="carousel-content" v-for="(slider, index) in sliders" :key="slider.id" :class="{active:index == 1}">
            <template #img>
              <div class="row">
                <div class="col-md-6 justify-content-center d-flex">
                  <img
                  class="d-block w-50 h-100"
                  :src="slider.image"
                  alt="image slot">
                </div>
                <div class="col-md-5 text-end py-5">
                  <h4><strong>{{ slider.title }}</strong></h4>
                  <br>
                  <p>{{ slider.description }}</p>
                </div>
              </div>
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    goNext() {
      console.log("....>", this.$refs.myCarousel);
      this.$refs.myCarousel.next();
    },
    goPrev() {
      this.$refs.myCarousel.prev();
    },
  },
  computed: {
    sliders() {
      return this.$store.getters.GetSlider;
    },
  },
  created() {
    this.$store.dispatch("getSliderFromServer");
  },
};
</script>
<style>
.carousel-control-next-icon,
.carousel-control-prev-icon {
  filter: invert(1) !important;
}
</style>