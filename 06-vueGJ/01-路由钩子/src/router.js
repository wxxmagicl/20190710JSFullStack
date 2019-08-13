import Vue from 'vue'
import Router from 'vue-router'
import Home from "_v/Home"
import Name from "_v/Name"
import Version from "_v/Version"
Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      redirect:{path:"/home"}
    },
    {
      path:"/home",
      name:"home",
      // component:Home
      components:{
        default:Home,
        name:Name,
        version:Version
      }
    },
    {
      path:"/login",
      name:"login",
      component:()=>import("_v/Login.vue")
    },
    {
      path:"/profile",
      name:"profile",
      component:()=>import("_v/Profile.vue")
    },
    {
      path:"/user",
      name:"user",
      component:()=>import("_v/User.vue"),
      children:[
        {
          path:"",
          component:()=>import("_v/UserAdd.vue"),
        },{
          path:"add",
          name:"userAdd",
          component:()=>import("_v/UserAdd.vue"),
        },{
          path:"list",
          name:"userList",
          component:()=>import("_v/UserList.vue"),
        },{
          path:"detail/:id",
          // path:"detail",
          name:"userDetail",
          component:()=>import("_v/UserDetail.vue"),
          beforeEnter(to,from,next){
            console.log("beforeEnter...")
            next()
          }
        }
      ]
    },
    {
      path:"*",
      component:()=>import("_v/404.vue")
    }
    
  ]
})
