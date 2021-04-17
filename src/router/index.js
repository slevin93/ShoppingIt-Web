import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '@/common/auth'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/account/Login')
  },
  {
    path: '/sales',
    name: 'Sales',
    component: () => import('@/views/sales/Sales')
  },
  {
    path: '/sales/new',
    name: 'NewSale',
    component: () => import('@/views/sales/NewSale')
  },
  {
    path: '/sales/:saleId',
    name: 'GetSale',
    component: () => import('@/views/sales/GetSale')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/views/product/Product')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register']

  const authRequired = !publicPages.includes(to.path)

  if (authRequired) {
    if (!auth.isValid()) {
      return next('/login')
    }
  }

  next()
})

export default router
