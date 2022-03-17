<template>
  <div class="container-fluid header-parent">
    <div class="row justify-content-around align-items-center py-3">
      <div class="col-md-6 col-6 align-items-center">
        <ul class="nav">
          <li class="mx-2 link">
            <router-link to="/signup">
              <font-awesome-icon icon="lock"/>
              ثبت نام
            </router-link>
          </li>
          <li class="mx-2 link">
            <router-link to="/Login">
              <font-awesome-icon icon="user"/>
              ورود
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-3 col-3 text-start">
        <a class="header-logo-parent" href="index.vue">
          <img class="header-logo" src="https://i0.wp.com/www.ecommerce-nation.com/wp-content/uploads/2018/01/dotSTORE.png?fit=842%2C289&ssl=1">
        </a>
      </div>
    </div>
    <div class="row item-header-border">
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
                <a href="#">
                  سبد خرید
                </a>
            </li>
        </ul>
      </div>
      <br><br>
    </div>
  </div>
</template>
<script>
</script>
