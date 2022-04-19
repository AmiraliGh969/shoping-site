<template>
  <div class="content-box-area text-center scrole-height d-flex flex-column justify-content-center button-scrole-shadow">
    <div class="main-page-content-scroll-area">
      <portal-target name="destination" class="my-2"></portal-target>
      <router-view class="animate__animated animate__fadeIn p-0 m-0 flex-grow-1"></router-view>
    </div>
  </div>
</template>