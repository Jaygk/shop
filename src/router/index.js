/*
* 路由组件
* */
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/mSite'
    },
    {
      path: '/mSite',
      component: MSite,
      meta: {
        showGuide: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showGuide: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showGuide: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showGuide: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
