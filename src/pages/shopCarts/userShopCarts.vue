<template>
  <div class="container" v-if="allItems.length">
    <section id="cart_items">
      <div class="container">
        <div class="table-responsive cart_info">
          <table dir="rtl" class="table mt-5">
            <thead class="bg-warning">
              <tr class="cart_menu">
                <td class="image">کـالا</td>
                <td class="description"></td>
                <td class="price">قیمت</td>
                <td class="quantity">تعـداد</td>
                <td class="total">مجمـوع</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cart in allItems" :key="cart.product.id">
                <td>
                  <img
                    :src="cart.product.image"
                    width="60"
                    height="60"
                    alt=""
                  />
                </td>
                <td class="cart_description">
                  <p>{{ cart.product.title }}</p>
                </td>
                <td class="cart_price">
                  <price :value="cart.price"/>
                </td>
                <td class="cart_quantity">
                  <addToCart :product="cart.product" />
                </td>
                <td class="cart_total">
                  <p class="text-warning"></p>
                  <price :value="cart.price * cart.count"/>
                </td>
                <td class="cart_delete" @click="AddToCart({ count: 0, product:cart.product})">
                  <font-awesome-icon icon="fas fa-window-close" size="2x" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <!--/#cart_items-->

    <section id="do_action">
      <div class="container my-5">
        <div dir="rtl" class="row">
          <div class="col-md-6">
            <div  class="border d-flex flex-column align-items-start p-4">
              <div class="w-100 bg-secondary d-flex justify-content-between align-items-center p-2 rounded">
                <span>مجمـوع</span>
                <price :value="cartTotal"/>
              </div>
              <a class="btn btn-default btn-warning w-50 mt-2">پرداخت</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="container min-height-350 mt-2">
    <div class="alert alert-warning">
      سبد خرید شما خالی میباشد
    </div>
  </div> 
</template>
<script>
import addToCart from '@/components/addToCartButton.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {
    addToCart
  },
  computed: {
    ...mapGetters(["allItems", "cartTotal"])
  },
  methods: {
    ...mapActions(["AddToCart"])
  },
}
</script>