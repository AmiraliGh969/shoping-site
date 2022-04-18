<template>
  <div class="row mt-2 px-4">
    <div class="alert alert-danger justify-content-center d-flex align-items-center mb-4" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
      You can create problems for the user by making changes in this section, please be careful
    </div>
    </div>
    <div class="col-md-6 d-flex justify-content-center align-items-center">
      <font-awesome-icon icon="user"  class="text-secondary w-50 h-50" /> 
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
              Back
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