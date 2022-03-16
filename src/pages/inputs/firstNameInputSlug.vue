<template>
  <div class="flex-column w-50 me-1">
      <input type="text" v-model="$v.form.name.firstname.$model" class="form-control mt-3"
      :class="{'error-input':!$v.form.name.firstname.required && $v.form.name.firstname.$dirty}"
      placeholder="First name">
      <div class="error-text ms-1" v-if="!$v.form.name.firstname.required && $v.form.name.firstname.$dirty">
          Fristname is required
      </div>
  </div>
</template>
<script>
import {inputScript} from '../../mixins/inputScript'
export default {
  mixins: [inputScript]
}
</script>