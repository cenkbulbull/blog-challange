<template>
  <div class="error">
    <div class="error__content">
      <h1>Sayfa Bulunamadı 404</h1>
      <router-link to="/"><button class="error__button">Anasayfaya Dön</button></router-link>
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
    gap: 22px;
    h1 {
      padding-right: 12px;
      color: $titlecolor;
    }
  }
  &__button{
    font-family: 'Work Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    word-break: break-word;
    background-color: transparent;
    color: #696A75;
    height: 48px;
    padding: 12px 20px 12px 20px;
    border-radius: 6px;
    border: 1px solid rgba(105, 106, 117, 0.3);
    cursor: pointer;
  }
}
</style>
