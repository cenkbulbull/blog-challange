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
        <button
          class="home__content-blogs-view-button home__content-blogs-view-button--outline"
        >
          View All Post
        </button>
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

      &-view-button {
        font-family: 'Work Sans', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        word-break: break-word;
        padding: 12px 20px 12px 20px;
        border-radius: 6px;
        border: 1px solid rgba(105, 106, 117, 0.3);
        cursor: pointer;

        &--secondary {
          color: #696a75;
        }

        &--outline {
          background-color: transparent;
          color: #696a75;
        }

        &:hover {
          background-color: rgba(105, 106, 117, 0.3);
          border: 1px solid #ffffff;
          color: #ffffff;
          transition: all 0.2s;
        }
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
