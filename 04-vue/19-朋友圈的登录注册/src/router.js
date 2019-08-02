import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from './views/Index.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      name:"index",
      component:Index
    },{
      path:"/register",
      name:"register",
      component:()=>import("./views/Register.vue")
    },{
      path:"/login",
      name:"login",
      component:()=>import("./views/Login.vue")
    }
  ]
})
