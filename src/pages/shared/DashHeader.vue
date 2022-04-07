<template>
  <div>
    <nav class="navbar navbar-expand-lg mt-1">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#"><strong>Tibolite</strong></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex search-input-parent ms-5">
            <input
              class="form-control search-input me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <font-awesome-icon icon="search" class="fa-flip-horizontal text-secondary mt-2 me-3" />
          </form>
        </div>
        <b-button v-b-toggle.sidebar-right class="btn-background">
          <font-awesome-icon icon="list" />
        </b-button>
        <b-sidebar id="sidebar-right" title="Tibolite Dashboard" right shadow body-class="flex-grow-1 px-3 py-2 mt-4 d-flex flex-column justify-content-between">
          <ul>
            <router-link to="/">              
              <li class="d-flex justify-content-end align-items-center li-for-dashboard-items">
                <p class="li-text p-0 m-0 me-3 text-secondary">Home</p>
                <div class="icon-area">
                  <font-awesome-icon icon="home" />
                </div>
              </li>
            </router-link>
            <router-link to="/dashboard"> 
              <li class="d-flex justify-content-end align-items-center mt-3 li-for-dashboard-items">
                <p class="li-text p-0 m-0 me-3 text-secondary">Dashboard</p>
                <div class="icon-area">
                  <font-awesome-icon icon="cog" />
                </div>
              </li>
            </router-link>
            <router-link to="/products/women's clothing">            
              <li class="d-flex justify-content-end align-items-center li-for-dashboard-items mt-3">
                <p class="li-text p-0 m-0 me-3 text-secondary">market</p>
                <div class="icon-area">
                  <font-awesome-icon icon="shopping-cart" />
                </div>
              </li>
            </router-link>
            <li class="d-flex justify-content-end align-items-center li-for-dashboard-items mt-3">
              <p class="li-text p-0 m-0 me-3 text-secondary">Collection</p>
              <div class="icon-area">
                <font-awesome-icon icon="folder-open" />
              </div>
            </li>
          </ul>
          <ul>       
            <router-link to="/logIn">            
              <li class="d-flex justify-content-end align-items-center li-for-dashboard-items">
                <p class="li-text p-0 m-0 me-3 text-secondary">Log out</p>
                <div class="icon-area">
                  <font-awesome-icon icon="door-open" />
                </div>
              </li>
            </router-link>       
          </ul>
        </b-sidebar>
      </div>
    </nav>
  </div>
</template>
<script>
</script>
