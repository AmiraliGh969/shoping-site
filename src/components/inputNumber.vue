<template>
    <input type="text" @keypress="onlyNumber" @input="handle">
</template>
<script>
export default {
  methods: {
    onlyNumber($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        $event.preventDefault();
      }
    },
    handle(e) {
      this.$emit(Event='input', e.target.value)
    }
  },
}
</script>