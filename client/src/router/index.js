import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomizerView from '../views/CustomizerView.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'
import PaymentView from '../views/PaymentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
   },
     {
       path: '/disclaimer',
       name: 'disclaimer',
       // route level code-splitting
       // this generates a separate chunk (About.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: () => import('../views/DisclaimerView.vue')
     },
     {
      path: '/pizza_customizer',
      name: 'customizer',
      component: CustomizerView
   },
   {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCartView
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentView
  },
  ],

  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  
})

 
export default router
