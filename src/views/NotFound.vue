<template>
  <div class="error">
    <div class="error__content">
      <h1>Sayfa Bulunamadı 404</h1>
      <router-link to="/"><Button text="Anasayfaya Dön" outline="true"/></router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/css/_color.scss';

.error {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50vh;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;

    h1 {
      padding-right: 12px;
      color: $titlecolor;
    }
  }
}
</style>
