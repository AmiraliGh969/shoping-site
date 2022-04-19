<template>
  <div class="container h-100 overflow-auto scroll-hidden">
    <div class="row w-100 position-sticky top-0">
      <portal to="destination">
        <form class="d-flex justify-content-around search-input-parent w-50 py-1">
          <input
            class="form-control search-input me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <font-awesome-icon icon="search" class="fa-flip-horizontal text-secondary mt-2 me-3" />
        </form>
      </portal>
    </div>
    <div class="row px-3">
      <div class="col-md-6">
        <ul v-for="item in 10" :key="item">
          <li class="d-flex justify-content-around my-3 align-items-center low-opacity-background rounded py-2">
            <font-awesome-icon icon="user" size="4x" class="text-secondary" />
            <div class="text-light lh-5">
              <p>userName: ********</p>
              <p>password: ********</p>
            </div>
            <div class="h-100">
              <router-link to="/dashboard/userInformation">
                <button class="btn btn-outline-success rounded-circle p-3 h-100 me-1">
                <font-awesome-icon icon="pen" size="lg" />
                </button>
              </router-link>
              <button class="btn btn-outline-danger rounded-circle p-3 h-100 ms-1">
                <font-awesome-icon icon="user-slash" size="lg" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <ul v-for="item in 10" :key="item">
          <li class="d-flex justify-content-around my-3 align-items-center low-opacity-background rounded py-2">
            <font-awesome-icon icon="user" size="4x" class="text-secondary" />
            <div class="text-light lh-5">
              <p>userName: ********</p>
              <p>password: ********</p>
            </div>
            <div class="h-100">
              <router-link to="/dashboard/userInformation">
                <button class="btn btn-outline-success rounded-circle p-3 h-100 me-1">
                <font-awesome-icon icon="pen" size="lg" />
                </button>
              </router-link>
              <button class="btn btn-outline-danger rounded-circle p-3 h-100 ms-1">
                <font-awesome-icon icon="user-slash" size="lg" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>