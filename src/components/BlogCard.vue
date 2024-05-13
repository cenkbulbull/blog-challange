<template>
  <div class="card" @click="$router.push('/singlepost?id=' + blog.id)">
    <img class="card__image" :src="blog.image" />
    <div class="card__content">
      <div class="card__heading">
        <div class="card__heading-category">{{ blog.category }}</div>
        <h3 class="card__heading-title">
          {{ blog.text }}
        </h3>
      </div>
      <div class="card__info">
        <div class="card__info-author">
          <img class="card__info-author-avatar" :src="blog.authorImage" />
          <span class="card__info-author-name">{{ blog.author }}</span>
        </div>
        <span class="card__info-date">{{ blog.date }}</span>
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
