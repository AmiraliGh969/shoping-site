<template>
  <span>{{ value.toFixed(d) }}&nbsp;{{unit}}</span>
</template>

<script>
export default {
  props: {
    value: { type: Number, default: 0 },
    d: { type: Number, default: 0 },
    unit: { type: String, default: 'تومان' },
  }
}
</script>