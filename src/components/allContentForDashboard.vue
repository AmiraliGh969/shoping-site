<template>
  <div class="content-box-area text-center scrole-height d-flex flex-column button-scrole-shadow">
      <form class="d-flex justify-content-around search-input-parent w-50 my-2 py-1">
        <input
          class="form-control search-input me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <font-awesome-icon icon="search" class="fa-flip-horizontal text-secondary mt-2 me-3" />
      </form>
      <div class="flex-grow-1 main-page-content-scroll-area p-3">
        <router-view class="animate__animated animate__fadeIn"></router-view>
      </div>
  </div>
</template>