<template>
  <div class="navbar">
    <img class="navbar__logo" src="../../assets/images/logo.png" />
    <div class="navbar__nav">
      <ul class="navbar__nav__list">
        <li class="navbar__nav__list__item">
          <router-link class="navbar__nav__list__item__link" to="/"
            >Home</router-link
          >
        </li>
        <li class="navbar__nav__list__item">
          <router-link class="navbar__nav__list__item__link" to="/blog"
            >Blog</router-link
          >
        </li>
        <li class="navbar__nav__list__item">
          <router-link class="navbar__nav__list__item__link" to="/singlepost"
            >Single Post</router-link
          >
        </li>
        <li class="navbar__nav__list__item">
          <router-link class="navbar__nav__list__item__link" to="/pages"
            >Pages</router-link
          >
        </li>
        <li class="navbar__nav__list__item">
          <router-link class="navbar__nav__list__item__link" to="/contact"
            >Contact</router-link
          >
        </li>
      </ul>
      <div class="navbar__nav__options">
        <input
          class="navbar__nav__options__search-input"
          type="text"
          placeholder="Search"
        />
        <button class="navbar__nav__options__search-button">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <div class="navbar__nav__options__switch">
          <button class="navbar__nav__options__switch-button">
            <i class="fa-solid fa-sun"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
