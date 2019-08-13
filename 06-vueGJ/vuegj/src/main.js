import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css"

router.beforeEach((to, from, next) => {
  let flag = to.matched.some(match=>match.meta && match.meta.needLogin)
  let isLogin = localStorage.getItem("login");
  if(flag){// 需要登录
    if(isLogin){
      if(to.name=="login"){
        next("/")
      }else{
        next()
      }
    }else{
      next("/login")
    }
  }else if(to.name=="login"){
    if(isLogin){
      next("/")
    }else{
      next()
    }
  }else{
    next()
  }


    // // console.log(to)
    // let flag = to.matched.some(match=>match.meta && match.meta.needLogin)
    // // console.log(flag)
    // if(flag){  // 需要登录
    //   // 得到标识
    //   let isLogin = localStorage.getItem("login");
    //   if(isLogin){
    //     next()
    //   }else{
    //     next("/login")
    //   }
    // }else{
    //   next()
    // }
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
