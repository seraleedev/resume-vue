import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './assets/scss/reset.scss'
import './assets/scss/global.scss'

createApp(App).use(router).mount('#app')
