import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '@/views/Product'
import {Auth} from "@/router/guards/Auth"
import UserInfo from "@/views/UserInfo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      BreadCrumb: [
        {name: 'Home', title: 'Trang chủ'},
      ]
    }
  },
  {
    path: '/product/:Category',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Product,
    meta: {
      BreadCrumb: [
        {name: 'Home', title: 'Trang chủ'},
      ]
    }
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail'),
    meta: {
      BreadCrumb: [
        {name: 'Home', title: 'Trang chủ'},
      ]
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart'),
  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/checkout/:id',
    name: 'Checkout',
    component: () => import('@/views/Checkout'),
    beforeEnter: (to, from, next) => {
      Auth(to, from, next)
    }
  },
  {
    path: '/checkout',
    name: 'CheckoutError',
    component: () => import('@/views/CheckoutError')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 100)
    })
  }
})

export default router
