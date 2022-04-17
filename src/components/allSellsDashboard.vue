<template>
  <div class="container  px-5 pt-4">
    <div class="row justify-content-around">
      <div class="col-md-3 box-sells-statistics purple-gradient d-flex p-0 my-1">
        <div class="w-25 icon-area-sell-page d-flex align-items-center justify-content-center">
          <font-awesome-icon icon="shopping-cart" class="text-light" size="3x" />
        </div>
        <div class="w-75 text-secondary mt-5">
          <h3>Total Orders:</h3>
          <h3 class="text-light"><strong>256,938</strong></h3>
        </div>
      </div>
      <div class="col-md-4 box-sells-statistics dark-blue-gradient d-flex p-0 my-1">
        <div class="w-25 icon-area-sell-page d-flex align-items-center justify-content-center">
          <font-awesome-icon icon="dollar-sign" class="text-light" size="3x" />
        </div>
        <div class="w-75 text-secondary mt-5">
          <h3>All Sells:</h3>
          <h3 class="text-light"><strong>1,528,000 USD</strong></h3>
        </div>
      </div>
      <div class="col-md-3 box-sells-statistics light-blue-gradient d-flex p-0 my-1">
        <div class="w-25 icon-area-sell-page d-flex align-items-center justify-content-center">
          <font-awesome-icon icon="user" class="text-light" size="3x" />
        </div>
        <div class="w-75 text-secondary mt-5">
          <h3>Total Members:</h3>
          <h3 class="text-light"><strong>2,076</strong></h3>
        </div>
      </div>
    </div>
    <div class="row justify-content-around text-start mt-5 ">
      <div class="col-md-7 shadow rounded my-3">
        <h4 class="text-light"><strong>Notification</strong></h4>
        <div class="overflow-auto scroll-hidden height-220">          
          <div class="low-opacity-background d-flex align-items-center mt-1 p-2">
            <font-awesome-icon icon="bell" class="text-info" size="2x" />
            <span>
              <h5 class="ms-3 m-0 p-0 text-light">you have a message</h5>
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-4 shadow rounded my-3">
        <h4 class="text-light"><strong>Sells Charts:</strong></h4>
        <div class="h-50 height-220">
          <img src="../images/Line-Chart-Vector-PNG-File.png" class="w-100 h-100 p-2">
        </div>
      </div>
    </div>
  </div>
</template>