
import "./assets/main.css"
import { createApp } from 'vue'
import App from './App.vue'
//createApp(App).mount('#app')
import { Icon } from '@iconify/vue';
const app = createApp(App)
app.component('Icon', Icon)
app.mount('#app')
