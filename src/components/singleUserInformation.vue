<template>
  <div class="row mt-5 px-5">
    <div class="col-md-6">
      <font-awesome-icon icon="user" class="text-secondary h-50" /> 
    </div>    
    <div class="col-md-6">
      <form action="#" class="d-flex flex-column">
        <input-slug
          class="form-control main-input"
          placeholder="Username"
          value="Username">
        </input-slug>
        <div class="d-flex my-3">
          <input-slug
            class="form-control me-1 main-input"
            placeholder="First name"
            value="First name">
          </input-slug>
          <input-slug
            class="form-control ms-1 main-input"
            placeholder="Last name"
            value="Last name">
          </input-slug>
        </div>
        <div class="d-flex my-3">
          <input
            type="email"
            class="form-control me-1 main-input"
            placeholder="Email address"
            value="Email@gmail.com"/>
          <input
            type="password"
            class="form-control ms-1 main-input"
            placeholder="Password"
            value="Password"/>
        </div>
        <div class="d-flex my-3">
          <input
            type="text"
            class="form-control me-1 main-input"
            placeholder="Tell number"
            value="09147336034"/>
          <input
            id="city"
            type="text"
            class="form-control ms-1 main-input"
            placeholder="city"
            value="City"/>
        </div>
        <div class="d-flex my-3">
          <input
            id="street"
            type="text"
            class="form-control me-1 main-input"
            placeholder="Street"
            value="street"/>
          <InputNumber
            id="number"
            class="form-control ms-1 main-input"
            placeholder="Number"
            value="Number"/>
        </div>
        <div class="d-flex my-3">
          <input
            id="zipcode"
            type="text"
            class="form-control me-1 main-input"
            placeholder="zipcode"
            value="Zipcode"/>
          <input
            id="geolocationlat"
            type="text"
            class="form-control mx-1 main-input"
            placeholder="lat"
            value="Lat"/>
          <input
            id="geolocationlong"
            type="text"
            class="form-control ms-1 main-input"
            placeholder="long"
            value="Long"/>
        </div>
        <div class="d-flex">
          <router-link to="/dashboard/allUsers" class="w-50 me-1">
            <div class="btn btn-outline-danger w-100">
              Cancel and Back
            </div>
          </router-link>
          <button class="btn btn-outline-info w-75 ms-1">Add Changes</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import InputSlug from "./InputSlug.vue";
import InputNumber from "./inputNumber.vue";

export default {
  components: {
    InputSlug,
    InputNumber
  },
};
</script>