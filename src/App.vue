<template>
  <div id="app" dir="rtl">
    <Header/>
    <router-view v-slot="{ Component }">
      <transition enter-active-class="animate__animated animate__fadeIn">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "./pages/shared/Header";
import Footer from "./pages/shared/Footer";
import "animate.css";
export default {
  name: "App",
  components: {
     Header,
    Footer
  }
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
