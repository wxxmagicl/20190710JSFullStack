import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from "./views/Login"

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path:"/",
      component:()=>import("./views/index.vue"),
      children:[
        {path:"",redirect:"/home"},
        {path:"/home",name:"home",component:()=>import("./views/Home.vue")},
        {path:"/order",name:"order",component:()=>import("./views/Order.vue")},
        {path:"/me",name:"me",component:()=>import("./views/Me.vue")},
        {path:"/address",name:"address",component:()=>import("./views/Address.vue")},
        {path:"/city",name:"city",component:()=>import("./views/City.vue")},
      ]
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/search",
      component: ()=>import("./views/Search.vue")
    },
    {
      path: "/shop",
      component: ()=>import("./views/Shop/Shop.vue"),
      children:[
        {
          path:"",
          redirect:"/goods",
        },
        {
          path:"/goods",
          name:"goods",
          component: ()=>import("./views/Shop/Goods.vue"),
        },{
          path:"/comments",
          name:"comments",
          component: ()=>import("./views/Shop/Comments.vue"),
        },{
          path:"/seller",
          name:"seller",
          component: ()=>import("./views/Shop/Seller.vue"),
        }
      ]
    }
  ]
})
// 路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.ele_login ? true : false;
//   if (to.path == '/login') {
//     next();
//   } else {
//     // 是否在登录状态下
//     isLogin ? next() : next('/login');
//   }
// });
export default router
