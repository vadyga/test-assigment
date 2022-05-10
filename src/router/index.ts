import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'

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
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: {
      layout: 'auth'
    }
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

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  if (to.name === from.name) {
    return next()
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log(store.getters['user/getAccessToken'])
    if (!store.getters['user/getAccessToken']) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
