
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/Shop.vue'
import ProductView from '../views/ProductView.vue'
import SignInView from '../views/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView
    }
    
  ],

  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (like when using browser back button), use that
    if (savedPosition) {
      return savedPosition
    } else {
      // Otherwise scroll to top
      return { top: 0 }
    }
  }

  
})

export default router