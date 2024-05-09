<template>
  <swiper-container navigation="true" :autoplay="{ delay: 2500 }">
    <swiper-slide v-for="(blog, index) in data.blogs" :key="index">
      <div class="slider">
        <img class="slider__image" :src="blog.image" />
        <div class="slider__content">
          <BlogInfo :blog="blog" />
        </div>
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import BlogInfo from './BlogInfo.vue'
import data from '@/data/fakeData.json'
</script>
