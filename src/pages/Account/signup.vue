<template>
  <div class="container my-5">
      <div class="row">
        <div class="signup-form">
          <div class="w-50">
            <h2><strong>Sign up new account:</strong></h2>
            <form action="#" class="d-flex flex-column">
              <div class="d-flex flex-row">
                <input type="text" v-model="$v.form.name.firstname.$model" class="form-control mt-3 me-1"
                       :class="{'error-input':!$v.form.name.firstname.required && $v.form.name.firstname.$dirty}"
                       placeholder="First name">
                <input type="text" v-model="$v.form.name.lastname.$model"
                       :class="{'error-input':!$v.form.name.lastname.required && $v.form.name.lastname.$dirty}"
                       class="form-control mt-3 ms-1" placeholder="Last name">
              </div>
              <input type="text" v-model="form.email" class="form-control mt-3" placeholder="Email address">
              <input type="text" v-model="form.username" class="form-control mt-3" placeholder="Username">
              <input type="password" v-model="form.password" class="form-control mt-3" placeholder="Password">

              <input type="password" class="form-control mt-3" placeholder="Repeat the password">
              <input id="city" type="text" v-model="form.address.city" class="form-control mt-3" placeholder="city">
              <input id="street" type="text" v-model="form.address.street" class="form-control mt-3"
                     placeholder="street">
              <input id="number" type="text" v-model="form.address.number" class="form-control mt-3"
                     placeholder="number">
              <input id="zipcode" type="text" v-model="form.address.zipcode" class="form-control mt-3"
                     placeholder="zipcode">
              <input id="geolocationlat" type="text" v-model="form.address.geolocation.lat" class="form-control mt-3"
                     placeholder="lat">
              <input id="geolocationlong" type="text" v-model="form.address.geolocation.long" class="form-control mt-3"
                     placeholder="long">
              <br>
              <button @click.prevent="registerUser" type="submit" class="btn btn-success my-2">Sing up</button>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import {registerData} from "../../constant/variables";
import {email, required, minLength} from "vuelidate/lib/validators";

export default {
  data() {
    return {
<<<<<<< HEAD
      form: {
        email: "",
        username: "",
        password: "",
        name: {
          firstname: "",
          lastname: "",
        },
        address: {
          city: "",
          street: "",
          number: "",
          zipcode: "",
          geolocation: {
            lat: "",
            long: "",
          },
        },
        phone: "",
      },
=======
      form: JSON.parse(registerData)
>>>>>>> 3455df04ae3345e339f86f862e2eff7e7613ab9f
    };
  },
  methods: {
    registerUser() {
<<<<<<< HEAD
      const register = this.form;
      this.$store.dispatch("registerUser", register);
=======
      const register = this.form
      this.$store.dispatch("registerUser", register).then(() => {
        alert('success register');
        this.form = JSON.parse(registerData);
      });
>>>>>>> 3455df04ae3345e339f86f862e2eff7e7613ab9f
    },
  },
  validations: {
    form: {
      name: {
        firstname: {required},
        lastname: {required}
      },
      email: {required, email},
      username: {required},
      password: {required, minLength: minLength(6)},
    }
  },
};
</script>
