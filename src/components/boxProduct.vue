<template>
  <div class="card text-center p-2">
    <router-link :to="`/products/single/${id}`">
      <img :src="image" class="card-img-top">
    </router-link>
    <div class="card-body">
      <h5 class="card-title cash-range">{{ price }} $</h5>
      <p class="card-text text-secondary">{{ title }}</p>
      <div class="row">
        <ul class="nav nav-pills justify-content-around">
          <router-link :to="`/products/single/${id}`">
            <li>
              <a href="/" class="add-to-cart">
                <font-awesome-icon icon="eye"/>
                مشاهده
              </a>
            </li>
          </router-link>
          <li>
            <a href="/" class="add-to-cart">
              <font-awesome-icon icon="shopping-cart"/>
              افزودن به سبد
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "boxProduct",
  props: {
    id:{
      type: [String, Number]
    },
    title: {
      type: String
    },
    price: {
      type: [String, Number]
    },
    image: {
      type: String
    }

  }
}
</script>