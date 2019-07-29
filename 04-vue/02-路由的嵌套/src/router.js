import Vue from 'vue'
import Router from 'vue-router'

import Home from "./views/Home.vue"  // 引入Home组件
import Find from "./views/Find.vue"  // 引入Find组件
import Setting from "./views/Setting.vue"  // 引入Setting组件
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/find',
      name: 'find',
      component: Find
    },{
      path: '/setting',
      name: 'setting',
      component: Setting,
      children:[
        {
          path: '/setting/login',
          component: Login,
        },
        {
          path: '/setting/register',
          component: Register,
        }
      ]
    }
  ]
})
