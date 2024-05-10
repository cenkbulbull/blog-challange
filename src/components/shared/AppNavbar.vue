<template>
  <nav class="navbar">
    <div class="navbar__content">
      <img class="navbar__logo" src="../../assets/images/logo.png" />
      <div class="navbar__nav">
        <ul class="navbar__list">
          <li class="navbar__item">
            <router-link class="navbar__link" to="/">Home</router-link>
          </li>
          <li class="navbar__item">
            <router-link class="navbar__link" to="/bloglisting"
              >Blog</router-link
            >
          </li>
          <li class="navbar__item">
            <router-link class="navbar__link" to="/singlepost?id=1"
              >Single Post</router-link
            >
          </li>
          <li class="navbar__item">
            <router-link class="navbar__link" to="/about">Pages</router-link>
          </li>
          <li class="navbar__item">
            <router-link class="navbar__link" to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
        <div class="navbar__options">
          <div class="navbar__search">
            <input
              class="navbar__search-input"
              type="text"
              placeholder="Search"
            />
            <button class="navbar__search-button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div class="navbar__switch">
            <button class="navbar__switch-button">
              <i class="fa-solid fa-sun"></i>
            </button>
          </div>
        </div>
      </div>

      <button class="navbar__mobile-button" @click="mobilemenu = !mobilemenu">
        <i class="fa-solid fa-bars navbar__menu-icon"></i>
      </button>
      <div class="navbar__nav-mobile" v-if="mobilemenu">
        <router-link class="navbar__link" to="/">Home</router-link>
        <router-link class="navbar__link" to="/bloglisting">Blog</router-link>
        <router-link class="navbar__link" to="/singlepost?id=1"
          >Single Post</router-link
        >
        <router-link class="navbar__link" to="/about">Pages</router-link>
        <router-link class="navbar__link" to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'

const mobilemenu = ref(false)
</script>
