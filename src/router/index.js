import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import contactIndex from '../views/contactIndex.vue'
import contactDetails from '../views/contactDetails.vue'

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
    {
      path: '/contact/:id',
      name: 'contactDetails',
      component: contactDetails
    },
  ]
})

export default router
