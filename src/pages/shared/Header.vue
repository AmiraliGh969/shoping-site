<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center py-3">
      <div class="col-md-3 col-3">
        <!-- <a class="header-logo-parent" href="index.vue">
          <img
            class="header-logo"
            src="https://i0.wp.com/www.ecommerce-nation.com/wp-content/uploads/2018/01/dotSTORE.png?fit=842%2C289&ssl=1"
          />
        </a> -->
      </div>    
      <div class="col-md-6 col-6">
        <ul class="nav">
          <li class="mx-2 link">
            <router-link to="/signup">
              <font-awesome-icon icon="lock" />
              <span>ثبت نام</span>
            </router-link>
          </li>
          <li class="mx-2 link">
            <router-link to="/Login">
              <font-awesome-icon icon="user" />
              <span> ورود</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 item-header-bar">
        <ul class="nav justify-content-around">
          <li class="link">
            <router-link to="/" active-class="active" exact>خانه</router-link>
          </li>
          <li class="link">
            <router-link to="/products/women's clothing" active-class="active">محصولات</router-link>
          </li>
          <li class="link">
            <router-link to="/aboutUs">درباره ما</router-link>
          </li>
          <li class="link">
            <router-link to="/shopCart">سبد خرید</router-link>
          </li>
        </ul>
      </div>
      <br /><br />
    </div>
  </div>
</template>
<script>
</script>
