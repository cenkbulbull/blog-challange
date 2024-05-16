<template>
  <div class="card" @click="$router.push('/singlepost?id=' + blog.id)">
    <img class="card__image" :src="blog.image" />
    <div class="card__content">
      <div class="card__content-heading">
        <div class="card__content-heading-category">{{ blog.category }}</div>
        <h3 class="card__content-heading-title">
          {{ blog.text }}
        </h3>
      </div>
      <div class="card__content-info">
        <div class="card__content-info-author">
          <img class="card__content-info-author-avatar" :src="blog.authorImage" />
          <span class="card__content-info-author-name">{{ blog.author }}</span>
        </div>
        <span class="card__content-info-date">{{ blog.date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  blog: Object,
})

</script>
