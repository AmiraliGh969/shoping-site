<template>
  <div class="container">
    <div class="row">
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          indicators
          controls
          fade
          img-width="1024"
          img-height="480"
          ref="myCarousel"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >

          <b-carousel-slide class="carousel-content" v-for="(slider, index) in sliders" :key="slider.id" :class="{active:index == 1}">
            <template #img>
              <div class="row my-4">
                <div class="col-md-6 justify-content-center d-flex">
                  <router-link :to="`/Products/Single/${slider.id}`">
                    <img
                    class="d-block image-form-slider"
                    :src="slider.image"
                    alt="image slot">
                  </router-link>
                </div>
                <div class="col-md-5 text-end py-5">
                  <h4 class="title-from-slider"><strong>{{ slider.title }}</strong></h4>
                  <br>
                  <p class="discription-from-slider">{{ slider.description }}</p>
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
  },
  computed: {
    sliders() {
      return this.$store.getters.GetSlider;
    },
  },
  created() {
    if (this.sliders.length == 0) {
      this.$store.dispatch("getSliderFromServer");
    }
  },
};
</script>
<style>
.carousel-control-next-icon,
.carousel-control-prev-icon {
  filter: invert(1) !important;
}
</style>