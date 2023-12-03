import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import contactIndex from '../views/contactIndex.vue'
import contactDetails from '../views/contactDetails.vue'
import contactEdit from '../views/contactEdit.vue'
import stats from '../views/stats.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: '/contact/edit/:id?',
      name: 'contactEdit',
      component: contactEdit
    },
    {
      path: '/stats',
      name: 'stats',
      component: stats
    },
  ]
})

export default router
