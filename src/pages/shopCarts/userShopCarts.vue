<template>
  <div class="container">
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
              <tr>
                <td>
                  <img
                    src="https://thewilsonbeacon.com/wp-content/uploads/2019/05/silhouette.jpg"
                    width="60"
                    height="60"
                    alt=""
                  />
                </td>
                <td class="cart_description" v-for="item in AllItem" :key="item.product.id">
                  <h4></h4>
                  <p>{{ cart.product.title }}</p>
                </td>
                <td class="cart_price">
                  <p>20000 تومان</p>
                </td>
                <td class="cart_quantity">
                  <div>
                    <p class="border w-25 text-center">1</p>
                  </div>
                </td>
                <td class="cart_total">
                  <p class="text-warning">20000 ریال</p>
                </td>
                <td class="cart_delete">
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
                <span>20000 تومان</span>
              </div>
              <a class="btn btn-default btn-warning w-50 mt-2">پرداخت</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <div class="container min-height-350">
    <div class="alert alert-warning">
      سبد خرید شما خالی میباشد
    </div>
  </div>  -->
</template>
<script>
export default {
}
</script>