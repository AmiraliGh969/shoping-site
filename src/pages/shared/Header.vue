<template>
  <div class="container-fluid">
    <div class="row justify-content-around align-items-center py-3">
      <div class="col-md-2 col-4">
        <img src="@/images/1.png" />
      </div>
      <div class="col-md-6 col-12 order-md-1 order-2">
        <form class="d-flex justify-content-around search-input-parent w-100 py-1">
          <input
            class="form-control search-input me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <font-awesome-icon icon="search" class="fa-flip-horizontal text-secondary mt-2 me-3"/>
        </form>
      </div>
      <div class="col-md-2 col-4 order-md-2 order-1">
        <ul class="nav justify-content-end">
          <li class="mx-2 btn signIn-btn">
            <router-link to="/signup" class="d-flex align-items-center">
              <font-awesome-icon icon="sign-in-alt" class="me-2" />
              <span>Sign in</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" >
        <router-link to="/" class="text-light">Home</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <span>User</span>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<script>
</script>
