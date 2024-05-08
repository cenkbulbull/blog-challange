<template>
  <div class="blogs">
    <div v-for="(blog, index) in data.blogs" :key="index" class="blogs__list">
      <BlogCard :blog="blog" />
    </div>
  </div>
</template>

<script setup>
import BlogCard from './BlogCard.vue'
import data from '@/data/fakeData.json'
</script>
