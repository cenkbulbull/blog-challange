<template>
  <div class="bloglisting">
    <div class="bloglisting__header">
      <h2 class="bloglisting__header-title">Page Title</h2>
      <Breadcrumb />
    </div>

    <div class="bloglisting__card-overlay">
      <img
        class="bloglisting__card-overlay-image"
        src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PLP8EXKklWboWrlMNHrHuWVLSfDX8P9YpJtsZOmUbjrTtKu4FlTITN8VaoUL7ftwPZTY8Wim2Hu4Aaj8AaN77i34OYeEpL1jY~lATWC8dAzn9pZFIYUY0QoVvxZ3q-4AP8eLIyTRuloAETJLEZcLSxKolWrmpUmGEmOzn-xhnAJiee51Qcg7nhpmAgPOnwyCTJ-vcnMQWBFJFF6OhJkz74Kt-nmzMMcXMiTNix~dGWBv6g3L-Xo5DmBDqezxz4WknSj1y6RksrsyvL8ENMnA9EUDjU8L8AI0esMXVvjGlMDcJ1E7WAIX316h2zqvmcXW~E1GztJGWT5-YzMCRMJvCQ__"
      />
      <div class="bloglisting__card-overlay-info">
        <BlogInfo color="'blog-info--bg-outline'" />
      </div>
    </div>

    <div class="bloglisting__post-layout">
      <Blogs />
      <Button text="Load More" outline="true"/>
      <div class="bloglisting__post-layout-ads">
        <AdsCard />
      </div>
    </div>
  </div>
  <BackToTop />
</template>

<script setup>
import AdsCard from '@/components/AdsCard.vue'
import Blogs from '@/components/Blogs.vue'
import BlogInfo from '@/components/BlogInfo.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import BackToTop from '../components/BackToTop'
</script>

<style lang="scss">
@import '@/assets/css/_color.scss';

.bloglisting {
  display: flex;
  flex-direction: column;
  gap: 48px;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 16px 0px 16px 0px;

    &-title {
      text-align: center;
      font-weight: 600;
      line-height: 36px;
      color: $titlecolor;
    }
  }

  &__card-overlay {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    height: 450px;
    border-radius: 12px;

    &-image {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }

    &-info {
      position: absolute;
      bottom: 0px;
      z-index: 100;
      width: 70%;
      margin: 40px 40px;
      color: #ffffff;
    }
  }

  &__post-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    &-ads {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
}
</style>
