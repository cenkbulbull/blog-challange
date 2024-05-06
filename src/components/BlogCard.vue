<template>
  <div class="card">
    <img
      class="card__image"
      :src="blog.image"
    />
    <div class="card__content">
      <div class="card__content-category">{{blog.category}}</div>
      <h3 class="card__content-title">
        {{blog.text}}
      </h3>
      <div class="card__content-footer">
        <div class="card__content-footer-author">
          <img
            class="card__content-footer-author-avatar"
            :src="blog.authorImage"
          />
          <span class="card__content-footer-author-name">{{blog.author}}</span>
        </div>
        <span class="card__content-footer-date">{{blog.date}}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import {defineProps} from 'vue'
defineProps({
  blog: Object
})
</script>
