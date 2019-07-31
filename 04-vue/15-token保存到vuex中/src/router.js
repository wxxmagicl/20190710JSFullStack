import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from "./views/Index.vue"
import Register from "./views/Register.vue"
import Login from "./views/Login.vue"
import NotFount from "./views/404.vue"

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "index",
      component: Index
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "*",
      component: NotFount
    }
  ]
})

// // 添加路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if (to.path == "/login" || to.path == "/register") {
    next()
  }else{
    isLogin ? next() : next("/login")
  }
})

export default router
