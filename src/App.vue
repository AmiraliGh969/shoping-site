<template>
  <div id="app">
    <component :is="layout.header" />
    <router-view class="nimate__animated animate__fadeIna"> </router-view>
    <component :is="layout.footer"/>
  </div>
</template>

<script>
import "animate.css";
import appHeader from "./pages/shared/Header";
import appFooter from "./pages/shared/Footer";
import dashboardHeader from "./pages/shared/DashHeader";
import dashboardFooter from "./pages/shared/DashFooter";
export default {
  name: "App",
  components: {
    appHeader,
    appFooter,
    dashboardHeader,
    dashboardFooter,
  },
  computed: {
    layout() {
      let isDashboard = this.$route.path.startsWith("/dashboard");
      return {
        header: isDashboard ? "dashboardHeader" : "appHeader",
        footer: isDashboard ? "dashboardFooter" : "appFooter",
      };
    },
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
