import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from './views/Index.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      children: [
        {
          path: "",
          redirect:"/wchart"
        },
        {
          path: "/wchart",
          name: "wchart",
          component: () => import("./views/Wchart.vue")
        },
        {
          path: "/abook",
          name: "abook",
          component: () => import("./views/AddressBook.vue")
        },
        {
          path: "/find",
          name: "find",
          component: () => import("./views/Find.vue")
        },
        {
          path: "/mine",
          name: "mine",
          component: () => import("./views/Mine.vue")
        }
      ]
    }, {
      path: "/register",
      name: "register",
      component: () => import("./views/Register.vue")
    }, {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    }
  ]
})
