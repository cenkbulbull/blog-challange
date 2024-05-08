<template>
  <div class="slider">
    <swiper-container navigation="true" :autoplay="{delay: 2500}">
      <swiper-slide v-for="(blog, index) in data.blogs" :key="index">
        <img class="slider__image" :src="blog.image" />
        <BlogInfo :blog="blog" class="slider__info" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>
<script setup>
import BlogInfo from './BlogInfo.vue'
import data from '@/data/fakeData.json'
</script>