import Vue from 'vue'  // <script src="./vue.js"></script>
import App from './App.vue' // 引入根组件   let app = new Vue()
import router from './router'  // router 路由
import store from './store/index'  // vuex中的仓库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

// 创建一个Vue的实例
new Vue({
  router,
  store,
  render: h => h(App)   // render是渲染  render是函数   钩子函数
}).$mount('#app')
