import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.scss'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import Button from './components/ui/Button.vue'
import Badge from './components/ui/Badge.vue'

const app = createApp(App)

app.component('Button', Button) 
app.component('Badge', Badge) 

app.use(store).use(router).mount('#app')
