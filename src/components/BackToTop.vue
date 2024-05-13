<template>
  <button v-if="isVisible" class="backtotop-btn" @click="backToTop">
    <i class="fa-solid fa-arrow-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 100
}

const backToTop = () => {
  window.scrollTo({
    top: 0,
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss">
.backtotop-btn {
  position: fixed;
  right: 10px;
  bottom: 10px;
  font-family: 'Work Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  width: 50px;
  padding: 12px 10px 12px 10px;
  border-radius: 6px;
  border: 1px solid rgba(105, 106, 117, 0.3);
  cursor: pointer;
}
</style>
