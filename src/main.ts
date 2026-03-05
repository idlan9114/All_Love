import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createPinia } from 'pinia'
import router from './router'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
app.use(vue3GoogleLogin, {
  clientId: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com'
})



