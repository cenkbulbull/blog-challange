<template>
  <div class="blog-info" :class="color">
    <div class="blog-info__header">
      <div class="blog-info__badge blog-info__badge--primary">
        {{ blog.category }}
      </div>
      <div class="blog-info__title">
        <h1>
          {{ blog.text }}
        </h1>
      </div>
    </div>
    <div class="blog-info__short-info">
      <div class="blog-info__author">
        <img
          src="https://s3-alpha-sig.figma.com/img/0b91/04ea/6891be7496ccabdc2fd0b1a1d8a535d7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aAtc8HeDK3mT34SX1Nnao4vlDp0YrMt7lxz2Vbd5b3j2LBpyOq8xiW1UAw-C8z2iRyMWC~-i5hmTKuPx5vXu-UPvUYRuC8pXgq2ejUUPZM8zOaq9fmH51WSExEp85-9McDpsCdn0EmKr3K5BSAAyZnJ-IzLHuJf73KuaabrEQvXNYS6ZbSRSvfhwyK5CoLQbbLMpUWIe866H-EfM0MbqCmAZ0xr2tnYNeDTWCBJDhB3CRPWct~P5wf~69TryHaWsfnx7EkGmxAyveH64uDAIC6sKcrIwe4pm2Gn2TUVO5-npCu4Z8cuyrBVAg9Iirl-6VoPm4FLuBPqoSA9j4HoUPg__"
        />
        <p>{{ blog.author }}</p>
      </div>
      <div class="blog-info__date">
        <p>{{ blog.date }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  blog: {
    type: Object,
    required: false,
    default: function () {
      return {
        text: 'The Impact of Technology on the Workplace: How Technology is Changing',
        category: 'Technology',
        author: 'Jason Francisco',
        date: 'August 20, 2022',
      }
    },
  },
  color: {
    type: String,
    required: false,
    default: 'blog-info--bg-light',
  },
})
</script>
