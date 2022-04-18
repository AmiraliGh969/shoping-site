<template>
  <div class="container h-100 overflow-auto scroll-hidden text-start">
    <div class="col-md-12 main-dark-background w-100 position-sticky top-0 py-2">
      <form class="d-flex justify-content-around search-input-parent w-50 py-1">
        <input
          class="form-control search-input me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <font-awesome-icon icon="search" class="fa-flip-horizontal text-secondary mt-2 me-3" />
      </form>
    </div>
    <div class="row mt-2 px-4">
      <div class="col-md-12 position-sticky top-0">
        <b-button class="btn-background px-4 text-light" v-b-modal.modal-center>Create a new product</b-button>
        <b-modal id="modal-center" centered title="add new shirt or pants" class="text-light">
          <form action="#" class="d-flex flex-column">
            <input-slug
              class="form-control main-input"
              placeholder="title">
            </input-slug>
            <div class="d-flex my-3">
              <input-slug
                class="form-control me-1 main-input"
                placeholder="id" >
              </input-slug>
              <input-slug
                class="form-control ms-1 main-input"
                placeholder="price">
              </input-slug>
            </div>
            <div class="d-flex my-3">
              <input
                type="text"
                class="form-control me-1 main-input"
                placeholder="category"/>
              <input
                type="text"
                class="form-control ms-1 main-input"
                placeholder="count"/>
            </div>
            <label for="choose-image" class="text-secondary mb-1">add your product image</label>
            <input type="file" id="choose-image" class="form-control main-input">
            <div class="input-group mt-4">
              <textarea class="form-control main-input" placeholder="description"></textarea>
            </div>
          </form>
          <footer id="modal-center___BV_modal_footer_" class="modal-footer p-0 mt-3">
            <button type="button" class="btn btn-outline-success w-100">      
              <font-awesome-icon icon="check" />
              add
            </button>
          </footer>
        </b-modal>
      </div>
      <div class="col-md-12 text-start">
        <ul v-for="item in 10" :key="item">
          <li class="d-flex justify-content-around my-3 align-items-center low-opacity-background rounded py-2">
            <font-awesome-icon icon="tshirt" size="4x" class="text-secondary mx-2" />
            <div class="d-flex">
              <div class="text-light text-start  lh-5 me-3">
                <p>ID: ********</p>
                <p>Tilte: ********</p>
              </div>
              <div class="text-light text-start lh-5 ms-3">
                <p>Price: ********</p>
                <p>count in stock: ********</p>
              </div>
            </div>
            <div class="h-100">
              <router-link to="/dashboard/singleProductDetailsDashboard">
                <button class="btn btn-outline-info rounded-circle p-3 h-100 me-1 my-1">
                <font-awesome-icon icon="pen" size="lg" />
                </button>
              </router-link>
              <button class="btn btn-outline-danger rounded-circle p-3 h-100 ms-1 my-1">
                <font-awesome-icon icon="trash" size="lg" />
              </button>
            </div>
          </li>
        </ul>
      </div>
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