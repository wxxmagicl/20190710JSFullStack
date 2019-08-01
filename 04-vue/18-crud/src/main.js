import Vue from 'vue'  // <script src="./vue.js"></script>
import App from './App.vue' // 引入根组件   let app = new Vue()
import router from "./router"
import store from "./store"
import axios from "./http"
Vue.config.productionTip = false

// 使用elementui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

// 把封装之后的axios挂到Vue的原型上面
Vue.prototype.$axios = axios

// 创建一个Vue的实例
new Vue({
  router,
  store,
  render: h => h(App)   // render是渲染  render是函数   钩子函数
}).$mount('#app')
