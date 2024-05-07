<template>
  <div class="bloglisting">
    <div class="bloglisting__header">
      <h2 class="bloglisting__header__title">Page Title</h2>
      <Breadcrumb />
    </div>
    <div class="bloglisting__card-overlay">
      <img
        class="bloglisting__card-overlay__image"
        src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PLP8EXKklWboWrlMNHrHuWVLSfDX8P9YpJtsZOmUbjrTtKu4FlTITN8VaoUL7ftwPZTY8Wim2Hu4Aaj8AaN77i34OYeEpL1jY~lATWC8dAzn9pZFIYUY0QoVvxZ3q-4AP8eLIyTRuloAETJLEZcLSxKolWrmpUmGEmOzn-xhnAJiee51Qcg7nhpmAgPOnwyCTJ-vcnMQWBFJFF6OhJkz74Kt-nmzMMcXMiTNix~dGWBv6g3L-Xo5DmBDqezxz4WknSj1y6RksrsyvL8ENMnA9EUDjU8L8AI0esMXVvjGlMDcJ1E7WAIX316h2zqvmcXW~E1GztJGWT5-YzMCRMJvCQ__"
      />
      <div class="bloglisting__card-overlay__blog-info">
        <div class="bloglisting__card-overlay__blog-info__heading">
          <div
            class="bloglisting__card-overlay__blog-info__heading__badge--primary"
          >
            Technology
          </div>
          <div class="bloglisting__card-overlay__blog-info__heading__title">
            <h1>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
          </div>
        </div>
        <div class="bloglisting__card-overlay__blog-info__short-info">
          <div class="bloglisting__card-overlay__blog-info__short-info__author">
            <img
              src="https://s3-alpha-sig.figma.com/img/0b91/04ea/6891be7496ccabdc2fd0b1a1d8a535d7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aAtc8HeDK3mT34SX1Nnao4vlDp0YrMt7lxz2Vbd5b3j2LBpyOq8xiW1UAw-C8z2iRyMWC~-i5hmTKuPx5vXu-UPvUYRuC8pXgq2ejUUPZM8zOaq9fmH51WSExEp85-9McDpsCdn0EmKr3K5BSAAyZnJ-IzLHuJf73KuaabrEQvXNYS6ZbSRSvfhwyK5CoLQbbLMpUWIe866H-EfM0MbqCmAZ0xr2tnYNeDTWCBJDhB3CRPWct~P5wf~69TryHaWsfnx7EkGmxAyveH64uDAIC6sKcrIwe4pm2Gn2TUVO5-npCu4Z8cuyrBVAg9Iirl-6VoPm4FLuBPqoSA9j4HoUPg__"
            />
            <p>Tracey Wilson</p>
          </div>
          <div class="bloglisting__card-overlay__blog-info__short-info__date">
            <p>August 20, 2022</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bloglisting__post-layout">
      <Blogs />
      <button class="bloglisting__post-layout__button">Load More</button>
      <AdsCard />
    </div>
  </div>
</template>
<script setup>
import AdsCard from '@/components/AdsCard.vue'
import Blogs from '@/components/Blogs.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
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
    &__title {
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
    padding: 40px;
    &__image {
      width: 100%;
      height: 450px;
    }
    &__blog-info {
      display: flex;
      flex-direction: column;
      position: absolute;
      gap: 24px;
      border-radius: 12px;
      bottom: 0px;
      left: 80px;
      width: 70%;
      &__heading {
        display: flex;
        flex-direction: column;
        gap: 16px;
        opacity: 0px;
        &__badge--primary {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
          width: 107px;
          height: 28px;
          padding: 4px 10px 4px 10px;
          border-radius: 6px;
          opacity: 0px;
          background: rgba(75, 107, 251, 1);
          color: #ffffff;
        }
        &__title {
          color: #ffffff;
          font-weight: 600;
          line-height: 40px;
        }
      }
      &__short-info {
        display: flex;
        align-items: center;
        height: 36px;
        gap: 20px;
        opacity: 0px;
        color: #ffffff;
        &__author {
          display: flex;
          align-items: center;
          gap: 12px;
          :nth-child(1) {
            width: 36px;
            height: 36px;
            border-radius: 28px;
          }
        }
      }
    }
  }
  &__post-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    &__button {
      font-family: 'Work Sans', sans-serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 24px;
      word-break: break-word;
      width: 142px;
      height: 48px;
      padding: 12px 20px 12px 20px;
      border-radius: 6px;
      border: 1px solid rgba(105, 106, 117, 0.3);
      color: #696a75;
      background-color: #ffffff;
      cursor: pointer;
      &:hover {
        background-color: rgba(105, 106, 117, 0.3);
        border: 1px solid #ffffff;
        color: #ffffff;
        transition: all 0.2s;
      }
    }
  }
}
</style>
