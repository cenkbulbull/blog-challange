<template>
  <div class="post">
    <div class="post__article">
      <div class="post__info">
        <BlogInfo :blog="blog" />
      </div>
      <img class="post__image" :src="blog.image" />
      <div class="post__content">
        <p class="post__text">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. One of the most rewarding aspects of
          traveling is immersing yourself in the local culture and customs. This
          includes trying local cuisine, attending cultural events and
          festivals, and interacting with locals. Learning a few phrases in the
          local language can also go a long way in making connections and
          showing respect.
        </p>
      </div>
      <div class="post__content">
        <h3 class="post__title">Research Your Destination</h3>
        <p class="post__text">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non
          tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper
          sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing
          vitae. Viverra adipiscing at in tellus.
        </p>
      </div>
      <div class="post__content">
        <h3 class="post__title">Plan Your Itinerary</h3>
        <p class="post__text">
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey. Vitae sapien pellentesque habitant morbi
          tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper
          sit amet risus nullam eget felis. Tincidunt arcu non sodales neque
          sodales ut etiam sit amet.
        </p>
      </div>

      <div class="post__quote">
        <p>
          “ Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy. ”
        </p>
      </div>
      <img
        class="post__image"
        src="https://s3-alpha-sig.figma.com/img/8b79/ec93/4ffe2414f1f3b6c944cef034a92ef7f5?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jXEPuW8b50-yxXMQ4ORhLPMXtZL0IExfIZ0LfNfikHoZGnZen5GSwhV8Al5PRT5Wyf8lqEgcL7WmIf3DiZotqvkjdkHcqXrqx~141jQmVYHNUdGlK54gVBaFMkoV9pH0NhvRKaEtFK1KUIXKPTasZhGBMskvZGaVfWJkF1kNTTOp5iRckwIGygslFyVIpYGa8G5qRaukDNuW8PiVGZFDpqBqj8R6r1YF9WuH25gM0NxPdHQWJpUcNxeKHTMwMKky5pAQdz5NPFiv3-9lRJUoTNfoq2IaUkQBrzUGLxrhxSm9b7erx282eCaAs3nBb0GQRYb1~npPDMBc3WUMNQaXgw__"
      />
      <div class="post__ads">
        <AdsCard />
      </div>
      <div class="post__content">
        <h3 class="post__title">Pack Lightly and Smartly</h3>
        <p class="post__text">
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </p>
      </div>
      <div class="post__content">
        <h3 class="post__title">Stay Safe and Healthy</h3>
        <p class="post__text">
          Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy.
          This includes researching any required vaccinations or medications,
          staying hydrated, washing your hands frequently, and using sunscreen
          and insect repellent. It's also essential to keep your valuables safe
          and secure and to be aware of your surroundings at all times.
        </p>
      </div>
      <div class="post__content">
        <h3 class="post__title">Immerse Yourself in the Local Culture</h3>
        <p class="post__text">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
      </div>
      <div class="post__content">
        <h3 class="post__title">Capture Memories</h3>
        <p class="post__text">
          Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </p>
      </div>
    </div>
    <div class="post__conclusion">
      <div class="post__content">
        <h3 class="post__title">Conclusion:</h3>
        <p class="post__text">
          Traveling is an art form that requires a blend of planning,
          preparation, and spontaneity. By following these tips and tricks, you
          can make the most of your journey and create memories that last a
          lifetime. So pack your bags, embrace the adventure, and enjoy the
          ride.
        </p>
      </div>
    </div>
  </div>
  <BackToTop/>
</template>
<script setup>
import AdsCard from '@/components/AdsCard.vue'
import BlogInfo from '@/components/BlogInfo.vue'
import BackToTop from '../components/BackToTop'
import data from '@/data/fakeData.json'
import { useRoute } from 'vue-router'

const route = useRoute()
const blog = data.blogs.find((item) => item.id == route.query.id)

</script>
<style lang="scss">
@import '@/assets/css/_color.scss';
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap');

.post {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 800px;
  margin: 20px auto;

  &__article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  &__image {
    width: 100%;
    height: 462px;
    border-radius: 12px;
  }

  &__quote {
    display: flex;
    gap: 32px;
    padding: 32px;
    border-radius: 12px;
    background-color: #f6f6f7;
    color: $titlecolor;
    border-left: 4px #e8e8ea;
    font-family: 'Source Serif 4', serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    font-style: italic;
  }

  &__ads{
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__text {
    font-family: 'Source Serif 4', serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    color: $listcolor;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    color: $titlecolor;
  }

  &__conclusion {
    display: flex;
    flex-direction: column;
    margin: 48px 0;
  }
  
  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
