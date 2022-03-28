<template>
  <input type="text" @keypress="isEnlish" @input="handle" v-bind="$attrs">
</template>

<script>
export default {
  name: "InputSlug",
  inheritAttrs:false,
  methods:{
    isEnlish(e){
      var ew = e.which;
      if(ew == 32 || (48 <= ew && ew <= 57) || (65 <= ew && ew <= 90) || (97 <= ew && ew <= 122))
        return true;
      e.preventDefault()
    },
    handle(e){
       let value=e.target.value
      if(value.length>0){
       value=value.charAt(0).toUpperCase()+value.slice(1)
      }
      this.$emit('input',value)
    }
  }
}
</script>
