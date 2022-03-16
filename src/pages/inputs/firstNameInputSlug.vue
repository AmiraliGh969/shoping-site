<template>
  <div class="flex-column w-50 me-1">
      <input type="text" v-model="form.name.firstname.$model" class="form-control mt-3"
      :class="{'error-input':!form.name.firstname.required && form.name.firstname.$dirty}"
      placeholder="First name">
      <div class="error-text ms-1" v-if="!form.name.firstname.required && form.name.firstname.$dirty">
          Fristname is required
      </div>
      <div class="error-text ms-1" v-if="!form.name.firstname.alpha">
        This section must be letters
      </div>
  </div>
</template>
<script>
export default {
  props:{
    form: {
      required: true,
      type: Object
    }
  }
}
</script>