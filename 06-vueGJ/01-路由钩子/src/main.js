import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css"

router.beforeEach((to,from,next)=>{
  console.log("main中的路由钩子...")
  next()
})

router.beforeResolve((to,from,next)=>{
  console.log("beforeResolve...")
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
