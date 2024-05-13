<template>
  <div class="about">
    <div class="about__header">
      <AuthorInfoCard />
    </div>
    <div class="about__blogs">
      <div class="about__blogs-heading">
        <h3>Latest Post</h3>
      </div>
      <div class="about__blogs-content">
        <Blogs />
      </div>
    </div>
  </div>
  <BackToTop />
</template>

<script setup>
import AuthorInfoCard from '@/components/AuthorInfoCard.vue'
import Blogs from '@/components/Blogs.vue'
import BackToTop from '../components/BackToTop'
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  gap: 48px;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__blogs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    &-heading {
      width: 100%;
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
      padding-left: 14px;
      color: #181a2a;
    }

    &-content {
      display: flex;
      gap: 20px;
    }
  }
}
</style>
