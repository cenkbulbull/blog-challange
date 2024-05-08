<template>
  <div class="card" @click="$router.push('/singlepost?id=' + blog.id)">
    <img class="card__image" :src="blog.image" />
    <div class="card__content">
      <div class="card__category">{{ blog.category }}</div>
      <h3 class="card__title">
        {{ blog.text }}
      </h3>
      <div class="card__footer">
        <div class="card__author">
          <img class="card__avatar" :src="blog.authorImage" />
          <span class="card__author-name">{{ blog.author }}</span>
        </div>
        <span class="card__date">{{ blog.date }}</span>
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
