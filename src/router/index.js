import { createRouter, createWebHistory } from 'vue-router'
import Table from '../views/Table.vue'

const routes = [
  {
    path: '/',
    name: 'table',
    component: Table
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/Layout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
