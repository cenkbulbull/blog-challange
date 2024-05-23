<template>
  <button
    class="btn"
    :class="{
      'btn--outline': props.outline=='true',
      [`btn--${props.bg}`]: props.bg,
    }"
    :style="{padding: props.padding}"
  >
    <i :class="props.icon"></i>
    {{ props.text }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['text', 'outline', 'bg', 'icon', 'padding'])
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  padding: 12px 20px;
  border-radius: 6px;
  border: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;

  &--primary {
    background-color: #4b6bfb;
    color: #fff;
  }
  &--secondary {
    background-color: #696a75;
    color: #fff;
  }
  &--outline {
    background-color: transparent;
    color: #696a75;
    border: 1px solid rgba(105, 106, 117, 0.3)
  }
}
</style>
