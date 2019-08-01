import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from "./views/Index.vue"
import Home from "./views/Home.vue"
import InfoShow from "./views/InfoShow"
import FoundList from "./views/FoundList.vue"

import Register from "./views/Register.vue"
import Login from "./views/Login.vue"
import NotFount from "./views/404.vue"


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      redirect:"/index"
    },
    {
      path:"/index",
      component:Index,
      children:[
        {
          path:"",
          component:Home
        },
        {
          path:"/home",
          component:Home
        },
        {
          path:"/infoshow",
          component:InfoShow
        },
        {
          path:"/foundlist",
          component:FoundList
        }
      ]
    },
    {
      path:"/register",
      component:Register
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"*",
      component:NotFount
    }
  ]
})

// token
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if(to.path == "/login" || to.path == "/register"){
    next()
  }else{
    isLogin ? next() : next("/login")
  }
})


export default router
