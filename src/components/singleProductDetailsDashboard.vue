<template>
  <div class="row mt-3">
    <div class="col-md-6 d-flex align-items-center justify-content-center">
      <font-awesome-icon icon="box-open" class="text-secondary h-50 w-50" /> 
    </div>    
    <div class="col-md-6">
      <form action="#" class="d-flex flex-column">
        <input-slug
          class="form-control main-input"
          placeholder="title"
          value="Title">
        </input-slug>
        <div class="d-flex my-3">
          <input-slug
            class="form-control me-1 main-input"
            placeholder="id"
            value="id******">
          </input-slug>
          <input-slug
            class="form-control ms-1 main-input"
            placeholder="price"
            value="price****">
          </input-slug>
        </div>
        <div class="row">
          <div class="col-md-6 my-2">
            <input type="file" class="form-control main-input me-1">
          </div>
          <div class="col-md-6 d-flex my-2">
            <select class="form-select main-input mx-1" aria-label="Default select example">
              <option selected>category</option>
              <option value="1">women's</option>
              <option value="2">man</option>
              <option value="3">electronic</option>
            </select>
            <div class="ms-1">
              <div class="d-flex">
                <button class="btn main-input px-3 fw-bold">-</button>
                <input type="text" value="0" class="form-control mx-1 number-input-single-page main-input">
                <button class="btn main-input px-3 fw-bold">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="input-group mt-2">
          <textarea class="form-control main-input" placeholder="description" rows="7"></textarea>
        </div>
        <div class="d-flex my-3">
          <router-link to="/dashboard/allProduct" class="w-50 me-1">
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
// import InputNumber from "./inputNumber.vue";

export default {
  components: {
    InputSlug,
    // InputNumber
  },
};
</script>