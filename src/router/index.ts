import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () =>
  import(/* webpackChunkName: "view-[request]" */ '@/views/Home/Home.vue')
const Dashboard = () =>
  import(/* webpackChunkName: "view-[request]" */ '@/views/Dashboard/Dashboard.vue')
const NotFound = () =>
  import(/* webpackChunkName: "view-[request]" */ '@/views/404.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0, behavior: 'smooth' }
    }
  }
})

export default router
