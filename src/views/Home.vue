<template>
  <div class="home">
    <BlogSlider />
    <div class="home__content">
      <div class="home__content-ads">
        <AdsCard />
      </div>
      <div class="home__content-blogs">
        <div class="home__content-blogs-heading">
          <h3>Latest Post</h3>
        </div>
        <div class="home__content-blogs-layout">
          <Blogs />
        </div>
        <Button text="View All Post" outline="true"/>
      </div>
    </div>
    <div class="home__ads">
      <AdsCard />
    </div>
  </div>
  <BackToTop />
</template>

<script setup>
import Blogs from '../components/Blogs'
import AdsCard from '../components/AdsCard'
import BlogSlider from '../components/BlogSlider'
import BackToTop from '../components/BackToTop'
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  gap: 80px;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    &-blogs {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;

      &-heading {
        width: 100%;
        font-weight: 700;
        padding-left: 14px;
        color: #181a2a;
      }
    }

    &-ads {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  &__ads {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>
