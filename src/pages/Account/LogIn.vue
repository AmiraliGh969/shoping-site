<template>
  <div class="container">
			<div class="row">
        <div class="login-form">
          <h2> <strong> Login to account : </strong> </h2>
          <form action="#">
            <input type="email" placeholder="Email Address" class="form-control w-25 mt-3" />
            <input type="password" placeholder="Password" class="form-control w-25 mt-3" />
            <div class="form-check mt-3">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                i'm not robot
              </label>
            </div>
            <button type="submit" class="btn btn-warning my-3 w-25"><strong>LogIn</strong></button>
          </form>
        </div>
			</div>
	</div>
</template>

<script>
export default {};
</script>