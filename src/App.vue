<template>
  <div class="container">
    <AppNavbar />
    <router-view />
  </div>
  <AppFooter />
</template>
<script setup>
import AppNavbar from './components/shared/AppNavbar.vue'
import AppFooter from './components/shared/AppFooter.vue'
</script>
<style lang="scss"></style>
