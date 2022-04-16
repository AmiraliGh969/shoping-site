<template>
  <div class="container mt-5">
    <component :is="layout.content" class="animate__animated animate__fadeIn"></component>
  </div>
</template>
<script>
import allUsers from '../../components/allUsers.vue'
import mainContent from '../../components/allContentForDashboard.vue'
import empty from '../../components/emptyPage.vue'
export default {
  components: {
    allUsers,
    mainContent,
    empty
  },
  computed: {
    layout() {
      let isDashboard = this.$route.path === "/dashboard";
      return {
        content: isDashboard ? "empty" : "mainContent",
      };
    },
  },
}
</script>