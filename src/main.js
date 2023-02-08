import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './components/base.scss'

createApp(App).use(router).mount('#app')
createApp(router).use(router)