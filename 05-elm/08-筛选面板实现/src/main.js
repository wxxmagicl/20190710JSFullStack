import Vue from 'vue'  // <script src="./vue.js"></script>
import App from './App.vue' // 引入根组件   let app = new Vue()
import router from "./router"
import store from "./store.js"
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

import { Indicator } from 'mint-ui';

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 加载动画
    Indicator.open();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    Indicator.close();
    return response;
  },
  error => {
    // 错误提醒
    Indicator.close();
    return Promise.reject(error);
  }
);


// 使用elementui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

// 创建一个Vue的实例
new Vue({
  router,
  store,
  render: h => h(App)   // render是渲染  render是函数   钩子函数
}).$mount('#app')
