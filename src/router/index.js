import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Post from '@/views/Post.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component:Home
  },
  {
    path: '/about',
    name: 'about',
    component:About
  },
  {
    path: '/singlepost',
    name: 'post',
    component:Post
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
