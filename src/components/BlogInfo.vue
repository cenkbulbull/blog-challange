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
          :src="blog.authorImage"
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
        authorImage: 'https://s3-alpha-sig.figma.com/img/f327/4229/ec54609ce8242bd3168cea0902f3a40f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jWuGwb9hQpFRyRrgl5atMYIPvJnzcW9vhN3gj4b2PHOBHiF~l06EL3fBL5RzV674dBtQQa3QF5t67DEv8LEn1H3JryzAs6yJJGGbvrRi8IYZtSewwTWjy0VXryvB1g9qJJ15Uv0BqWuY770SXaL2V5OOe20OEAFfdQiDGVifvpgQ8g9XHsxGoaYvc9cSYiMwB-7lTYB7mHk1mkRF8i4HuLrl~CxE~9nsLrc8aN7RH8E1wb0fzzHYXIizMEwdPlBSeaTURANx4RB~B92MXKbUwNUVDjp2h41-eMF8lBmpwTjK2fdGY07gII4HCXPf~hUeZTXtIBUot~j2PGR0bgi-Fg__'
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
