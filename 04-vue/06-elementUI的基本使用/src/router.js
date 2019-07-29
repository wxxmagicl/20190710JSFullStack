import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home.vue"
import MyForm from "./views/MyForm.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      component:Home
    },
    {
      path:"/myform",
      component:MyForm
    }
  ]
})
