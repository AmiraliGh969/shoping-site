<template>
  <div class="container my-5">
      <div class="row">
        <div class="signup-form">
          <div class="w-50">
            <h2><strong>Sign up new account:</strong></h2>
            <form action="#" class="d-flex flex-column">
              <div class="d-flex flex-row">
                <input type="text" v-model="name" class="form-control mt-3 me-1" placeholder="First name">
                <input type="text" v-model="family" class="form-control mt-3 ms-1" placeholder="Last name">
              </div>
              <input type="text" v-model="username" class="form-control mt-3" placeholder="Username" >
              <input type="text" v-model="email" class="form-control mt-3" placeholder="Email address" >
              <input type="password" v-model="password" class="form-control mt-3" placeholder="Password" >
              <input type="password" class="form-control mt-3" placeholder="Repeat the password" >
              <textarea id="Address" v-model="address" class="form-control mt-3" rows="5" placeholder="Address"></textarea>
              <br>
              <button @click.prevent="registerUser" type="submit" class="btn btn-success my-2">Sing up</button>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      family: "",
      email: "",
      password: "",
      address: "",
      username: "",
    };
  },
  methods: {
    registerUser() {
      const register = {
        name: {
          firstname: this.name,
          lastname: this.family,
        },
        username: this.username,
        email: this.email,
        password: this.password,
        // address: this.address,
      };
      this.$store.dispatch("registerUser", register);
    },
  },
};
</script>