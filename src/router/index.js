import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import contactIndex from '../views/contactIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contactIndex',
      component: contactIndex
    },
  ]
})

export default router
