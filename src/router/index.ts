import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import Shop from '../views/Shop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    { path: '/', name:'HomeView', component: HomeView },
    { path: '/shop', name:'Shop', component: Shop },
    { path: '/signin', name:'SignIn', component: SignIn },
  ],
})

export default router
