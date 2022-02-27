<template>
  <div id="app">
    <Header/>
      <router-view class="animate__animated animate__fadeIn">
      </router-view>
    <Footer/>
  </div>
</template>

<script>
import "animate.css";
import Header from "./pages/shared/Header";
import Footer from "./pages/shared/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@font-face {
  font-family: Iransans;
  src: url(./fonts/FontsFree-Net-ir_sans.ttf);
}
#app {
  font-family: Iransans;
}
</style>
