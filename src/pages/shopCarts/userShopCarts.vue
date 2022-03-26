<template>
  <div class="container">
    <section id="cart_items">
      <div class="container">
        <div class="table-responsive cart_info">
          <table class="table table-condensed">
            <thead>
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
                <td class="cart_product">
                  <img src="https://thewilsonbeacon.com/wp-content/uploads/2019/05/silhouette.jpg" width="60" height="60" alt="" />
                </td>
                <td class="cart_description">
                  <h4>
                    Product Name
                  </h4>
                  <p>شناسـه : 010101</p>
                </td>
                <td class="cart_price">
                  <p>20000 تومان</p>
                </td>
                <td class="cart_quantity">
                  <div class="cart_quantity_button">
                    <p>1</p>
                  </div>
                </td>
                <td class="cart_total">
                  <p class="cart_total_price">20000</p>
                </td>
                <td class="cart_delete">
                  <font-awesome-icon icon="faWindowClose"/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <!--/#cart_items-->

    <section id="do_action">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="total_area">
              <ul>
                <li>
                  مجمـوع <span>20000 تومان</span>
                </li>
              </ul>
              <a class="btn btn-default check_out cursor-pointer">پرداخت</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/#do_action-->
  </div>
  <!-- <div class="container min-height-350">
    <div class="alert alert-warning">
      سبد خرید شما خالی میباشد
    </div>
  </div> -->
</template>