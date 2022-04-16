<template>
  <div class="container">
			<div class="row">
        <div class="login-form">
          <h2> <strong> Login to account : </strong> </h2>
          <form action="#">
            <input type="text" placeholder="Username" class="form-control w-25 mt-3" />
            <input type="password" placeholder="Password" class="form-control w-25 mt-3" />
            <div class="form-check mt-3">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                i'm not robot
              </label>
            </div>
            <router-link to="/dashboard">
              <button type="submit" class="btn btn-warning my-3 w-25" @submit.stop.prevent>
                <strong class="text-dark">LogIn</strong>
              </button>
            </router-link>
          </form>
        </div>
			</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      usename: "",
      password: ""
    }
  },
  methods: {
    loginUser() {
      const login = {
        usename: this.usename,
        password: this.password
      };
      this.$store.dispatch("loginUser", login)
    }
  },
};
</script>