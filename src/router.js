// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Table from './components/Table'
import Layout from './components/Layout'

// Vue.use(VueRouter);

    const routes= [
        {
            path: '/table',
            component: Table
        },
        {
            path: '/layout',
            component: Layout
        }
    ]

const router = createRouter({
    history: createWebHistory(process.env.table),
    routes
  })
  export default router