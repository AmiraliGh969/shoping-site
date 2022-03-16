<template>
  <div class="container my-5">
    <div class="row">
      <div class="signup-form">
        <div class="w-50">
          <h2><strong>Sign up new account:</strong></h2>
          <form action="#" class="d-flex flex-column">
            <div class="d-flex flex-row">
            <FristNameInputSlug :form="$v.form" />
            <div class="flex-column w-50 ms-1">
              <input type="text" v-model="$v.form.name.lastname.$model"
                :class="{'error-input':!$v.form.name.lastname.required && $v.form.name.lastname.$dirty}"
                class="form-control mt-3" placeholder="Last name">
              <div class="error-text ms-1" v-if="!$v.form.name.lastname.required && $v.form.name.lastname.$dirty">
                Lastname is required
              </div>
              <div class="error-text ms-1" v-if="!$v.form.name.lastname.alpha">
                This section must be letters
              </div>
            </div>
            </div>
            <input type="email" v-model="$v.form.email.$model" 
              class="form-control mt-3" 
              :class="{'error-input':!$v.form.email.required && $v.form.email.$dirty}" 
              placeholder="Email address">
            <div class="error-text ms-1" v-if="!$v.form.email.required && $v.form.email.$dirty">
              Email is required
            </div>
            <div class="error-text ms-1 mt-1" v-if="!$v.form.email.email">
              This email in not valid
            </div>
            <input type="text" v-model="$v.form.username.$model" 
              class="form-control mt-3" placeholder="Username"
              :class="{'error-input':!$v.form.username.required && $v.form.username.$dirty}" 
              >
            <div class="error-text ms-1" v-if="!$v.form.username.required && $v.form.username.$dirty">
              Username is required
            </div>
            <div class="error-text ms-1" v-if="!$v.form.username.alpha">
              This section must be letters
            </div>
            <input type="password" v-model="$v.form.password.$model" 
              class="form-control mt-3" placeholder="Password"
              :class="{'error-input':!$v.form.password.required && $v.form.password.$dirty}" 
              >
            <div class="error-text" v-if="!$v.form.password.required && $v.form.password.$dirty">Field is required</div>
            <div class="error-text" v-if="!$v.form.password.minLength">Pasword must have at least {{$v.form.password.$params.minLength.min}} letters.</div>


            <input id="city" type="text" v-model="$v.form.address.city.$model" 
              :class="{'error-input':!$v.form.address.city.required && $v.form.address.city.$dirty}" 
              class="form-control mt-3" placeholder="city">
            <div class="error-text ms-1" v-if="!$v.form.address.city.required && $v.form.address.city.$dirty">
              City is required
            </div>
            <input id="street" type="text" v-model="$v.form.address.street.$model" 
              class="form-control mt-3"
              :class="{'error-input':!$v.form.address.street.required && $v.form.address.street.$dirty}" 
              placeholder="street">
            <div class="error-text ms-1" v-if="!$v.form.address.street.required && $v.form.address.street.$dirty">
              street is required
            </div>      
            <input id="number" type="text" v-model="$v.form.address.number.$model" 
              class="form-control mt-3"
              :class="{'error-input':!$v.form.address.number.required && $v.form.address.number.$dirty}" 
              placeholder="number">
            <div class="error-text ms-1" v-if="!$v.form.address.number.numeric">
              This section must be numbers
            </div>
            <div class="error-text ms-1" v-if="!$v.form.address.number.required && $v.form.address.number.$dirty">
              Street is required
            </div>
            <input id="zipcode" type="text" v-model="$v.form.address.zipcode.$model" 
              class="form-control mt-3"
              :class="{'error-input':!$v.form.address.zipcode.required && $v.form.address.zipcode.$dirty}" 
              placeholder="zipcode">
            <div class="error-text ms-1" v-if="!$v.form.address.zipcode.required && $v.form.address.zipcode.$dirty">
              Zipcode is required
            </div>
            <input id="geolocationlat" type="text" v-model="$v.form.address.geolocation.lat.$model" 
              class="form-control mt-3"
              :class="{'error-input':!$v.form.address.geolocation.lat.required && $v.form.address.geolocation.lat.$dirty}" 
              placeholder="lat">
            <div class="error-text ms-1" v-if="!$v.form.address.geolocation.lat.required && $v.form.address.geolocation.lat.$dirty">
              Lat is required
            </div>
            <input id="geolocationlong" type="text" v-model="$v.form.address.geolocation.long.$model" 
              class="form-control mt-3"
              :class="{'error-input':!$v.form.address.geolocation.long.required && $v.form.address.geolocation.long.$dirty}" 
              placeholder="long">
            <div class="error-text ms-1" v-if="!$v.form.address.geolocation.long.required && $v.form.address.geolocation.long.$dirty">
              Long is required
            </div>
            <br>
            <!-- <button @click.prevent="$v.form.$touch"  type="submit" class="btn btn-success my-2">Sing up</button> -->
            <button @click.prevent="registerUser" :disabled="$v.$invalid" class="btn btn-success my-3" type="submit">Sing up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FristNameInputSlug from '../inputs/firstNameInputSlug.vue'
import {inputScript} from '../../mixins/inputScript'
export default {
  mixins: [inputScript],
  components: {
    FristNameInputSlug
  },
};
</script>
