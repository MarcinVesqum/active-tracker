import { createApp } from 'vue'
import './index.css'
import './main.css'
import router from './router/router.js';
import store from './store/index.js'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
