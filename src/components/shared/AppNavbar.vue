<template>
  <nav class="navbar">
    <div class="navbar__content">
      <div class="navbar__content-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 22.152 1.40577 25.9756 3.76732 29.021L7.73554 14.0299C9.38672 7.52344 13.6758 4.15725 20.5616 4.15725H22.936C27.7785 4.15725 31.335 8.70307 30.1698 13.4033C29.9609 14.2463 29.5702 15.0334 29.0253 15.7097L27.0045 18.2174C26.486 18.8609 26.2968 19.7092 26.493 20.5121L27.109 23.0338C27.4278 24.339 27.3695 25.708 26.941 26.9814C25.4832 31.3132 21.4227 34.231 16.8521 34.231H10.2086C12.5662 35.3648 15.2089 36 18 36Z"
            fill="#141624"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.7 21.7592H14.1932C13.0747 21.7592 12.0968 22.5135 11.8129 23.5953L10.4373 28.8354H15.871C17.8811 28.8354 19.6384 27.4799 20.1487 25.5357L20.2666 25.0865C20.7082 23.4043 19.4392 21.7592 17.7 21.7592ZM16.6646 23.3514H14.759C14.1206 23.3514 13.5623 23.7814 13.3993 24.3988L12.6486 27.2432H15.6532C16.7647 27.2432 17.7364 26.4977 18.0186 25.4284L18.0838 25.1814C18.328 24.2562 17.6263 23.3514 16.6646 23.3514Z"
            fill="#141624"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.9971 11.7427C15.2811 10.6609 16.2589 9.90663 17.3774 9.90663H20.8843C22.6235 9.90663 23.8925 11.5517 23.4509 13.2339L23.333 13.6831C22.8227 15.6273 21.0654 16.9828 19.0553 16.9828H13.6216L14.9971 11.7427ZM16.5836 12.5462C16.7465 11.9289 17.3049 11.4988 17.9433 11.4988H19.8489C20.8106 11.4988 21.5123 12.4036 21.2681 13.3288L21.2029 13.5758C20.9207 14.6451 19.949 15.3907 18.8375 15.3907H15.8329L16.5836 12.5462Z"
            fill="#141624"
          />
        </svg>
        <p class="navbar__content-logo-text">
          Meta<span
            class="navbar__content-logo-text navbar__content-logo-text--bold"
            >Blog</span
          >
        </p>
      </div>

      <div class="navbar__content-nav">
        <ul class="navbar__content-nav-menu">
          <li class="navbar__content-nav-menu-item">
            <router-link class="navbar__content-nav-menu-link" to="/"
              >Home</router-link
            >
          </li>
          <li class="navbar__content-nav-menu-item">
            <router-link class="navbar__content-nav-menu-link" to="/bloglisting"
              >Blog</router-link
            >
          </li>
          <li class="navbar__content-nav-menu-item">
            <router-link
              class="navbar__content-nav-menu-link"
              to="/singlepost?id=1"
              >Single Post</router-link
            >
          </li>
          <li class="navbar__content-nav-menu-item">
            <router-link class="navbar__content-nav-menu-link" to="/about"
              >Pages</router-link
            >
          </li>
          <li class="navbar__content-nav-menu-item">
            <router-link class="navbar__content-nav-menu-link" to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
        <div class="navbar__content-nav-right-side">
          <div class="navbar__content-nav-right-side-search">
            <input
              class="navbar__content-nav-right-side-search-input"
              type="text"
              placeholder="Search"
            />
            <button class="navbar__content-nav-right-side-search-button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div
            @click="darkmode = !darkmode"
            class="navbar__content-nav-right-side-switch"
          >
            <button
              v-if="!darkmode"
              class="navbar__content-nav-right-side-switch-button navbar__content-nav-right-side-switch-button--light"
            >
              <i class="fa-solid fa-sun"></i>
            </button>
            <button
              v-else
              class="navbar__content-nav-right-side-switch-button navbar__content-nav-right-side-switch-button--dark"
            >
              <i class="fa-solid fa-moon"></i>
            </button>
          </div>
        </div>
      </div>

      <button
        class="navbar__content-mobile-button"
        @click="mobilemenu = !mobilemenu"
      >
        <i class="fa-solid fa-bars navbar__content-mobile-button-menu-icon"></i>
      </button>
      <div class="navbar__content-mobile-menu" v-if="mobilemenu">
        <router-link class="navbar__content-mobile-menu-link" to="/"
          >Home</router-link
        >
        <router-link class="navbar__content-mobile-menu-link" to="/bloglisting"
          >Blog</router-link
        >
        <router-link
          class="navbar__content-mobile-menu-link"
          to="/singlepost?id=1"
          >Single Post</router-link
        >
        <router-link class="navbar__content-mobile-menu-link" to="/about"
          >Pages</router-link
        >
        <router-link class="navbar__content-mobile-menu-link" to="/contact"
          >Contact</router-link
        >
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'

const mobilemenu = ref(false)
const darkmode = ref(false)
</script>
