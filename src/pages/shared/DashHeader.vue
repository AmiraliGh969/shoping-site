<template>
  <div>
    <nav class="navbar navbar-expand-lg mt-1">
      <div class="container-fluid">
        <b-button v-b-toggle.sidebar-left class="btn-background">
          <font-awesome-icon icon="list" />
        </b-button>
        <b-sidebar id="sidebar-left" title="Tibolite Dashboard" left shadow body-class="flex-grow-1  py-2 mt-4 d-flex flex-column justify-content-between">
          <ul class="mx-3">
            <label class="text-secondary fs-5 " for="user">User</label>
            <li id="user" class="d-flex justify-content-start align-items-center mt-1 li-for-dashboard-items">
              <div class="icon-area">
                <font-awesome-icon icon="user" />
              </div>
              <router-link to="/dashboard/allUsers">
                <p class="li-text p-0 m-0 ms-3 text-secondary">All Users</p> 
              </router-link>
            </li>
            <label class="text-secondary fs-5 mt-4" for="all-product">products</label>
            <li id="all-product" class="d-flex justify-content-start align-items-center mt-1 li-for-dashboard-items">
              <div class="icon-area">
                <font-awesome-icon icon="box-open" />
              </div>
              <router-link to="/dashboard/allProduct">
                <p class="li-text p-0 m-0 ms-3 text-secondary">All Product</p> 
              </router-link>
            </li>
            <li id="all-product" class="d-flex justify-content-start align-items-center mt-2 li-for-dashboard-items">
              <div class="icon-area">
                <font-awesome-icon icon="tshirt" />
              </div>
              <router-link to="/dashboard/shirtPageDashboard">
                <p class="li-text p-0 m-0 ms-3 text-secondary">Shirts & Pants</p> 
              </router-link>
            </li>
            <li id="all-product" class="d-flex justify-content-start align-items-center mt-2 li-for-dashboard-items">
              <div class="icon-area">
                <font-awesome-icon icon="shoe-prints" />
              </div>
              <router-link to="/dashboard/shoesPageDashboard">
                <p class="li-text p-0 m-0 ms-3 text-secondary">Shoes</p> 
              </router-link>
            </li>
            <li id="all-product" class="d-flex justify-content-start align-items-center mt-2 li-for-dashboard-items">
              <div class="icon-area">
                <font-awesome-icon icon="gem" />
              </div>
              <router-link to="/dashboard/accessoriesPageDashboard">
                <p class="li-text p-0 m-0 ms-3 text-secondary">Accessories</p> 
              </router-link>
            </li>
            <label class="text-secondary fs-5 mt-4 " for="user">Sell</label>
            <li id="user" class="d-flex justify-content-start align-items-center mt-1 li-for-dashboard-items">
              <div class="icon-area">
                <font-awesome-icon icon="dollar-sign" />
              </div>
              <p class="li-text p-0 m-0 ms-3 text-secondary">All Sells</p> 
            </li>
          </ul>
          <ul class="mx-3">
            <li id="all-product" class="d-flex justify-content-start align-items-center mt-2 li-for-dashboard-items">
              <div class="icon-area">
                <font-awesome-icon icon="door-open" />
              </div>
              <router-link to="/logIn">
               <p class="li-text p-0 m-0 ms-3 text-secondary">Log out</p> 
              </router-link>
            </li>
          </ul>
        </b-sidebar>
        <strong class="navbar-brand text-light">Tibolite Dashboard</strong>
      </div>
    </nav>
  </div>
</template>
<script>
</script>
