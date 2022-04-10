<template>
  <div class="col-md-12 py-4 content-box-area text-center scrole-height button-scrole-shadow">
      <form class="d-flex justify-content-around search-input-parent w-50 mb-2 py-1">
        <input
          class="form-control search-input me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <font-awesome-icon icon="search" class="fa-flip-horizontal text-secondary mt-2 me-3" />
      </form>
      <router-view class="animate__animated animate__fadeIn"></router-view>
  </div>
</template>