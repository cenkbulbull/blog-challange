import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Post from '@/views/Post.vue'
import BlogListing from '@/views/BlogListing.vue'
import NotFound from '@/views/NotFound.vue'
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
  {
    path: '/bloglisting',
    name: 'bloglisting',
    component:BlogListing
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
