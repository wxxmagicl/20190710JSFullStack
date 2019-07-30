vue-cli
    安装：npm install -g @vue/cli
    创建项目：vue create my-project
    进入项目：cd my-project
    启动项目：npm run serve

路由：
    一个url对应一个页面，根据不同的路由，可以渲染出来不同的页面
    使用使用vue-router模块  npm i vue-router

路由案例：
    主页---->Home组件    /
    发现页---->Find组件   /find
    设置页---->Setting组件  /setting

路由的基本使用：
    1，创建我们需要的组件
    2，在router.js中设置匹配规则
    3，在App.vue中使用router-view用来放路由匹配的组件
    4，使用router-link通过点击实现匹配路由

在vue-cli中有两个地方可以放组件，一个是components，一个是views。如果一个组件是页面级的组件放到views，如果一个组件是通用级别的组件，放到components。

把代码copy给大家，大家怎么使用：
    需要根据package.json中记录的依赖，把所需要的依赖安装  npm i 

--------------------- 复习路由：
基本路由  
    写组件  
    配置路由文件   path:"/xx"   component:Abc   
    App中使用<router-view>   通过浏览器就可以匹配到路由
    <router-link>   可以通过点击匹配路由
嵌套路由
    childrenp[
        {},
        {},
    ]
动态路由
    path:"/xx/:id"    
编辑式路由
    this.$router.push("/home")
    this.$router.go(-1)
重定向
    redirect:"/home"

----------------------- 前后端分离开发  meituan 
client:前端项目，前端主要负责去画页面（写组件），请求后端的api接口，，得到真实的数据，把数据渲染到组件上面去
    vue
    react
    ng
    js
    小程序
    小游戏
server:后端项目，就是给前端开接口
    node
    java
    php
    python
    go
    ...

------------------ 请求后端的api接口
ajax: 
    原生的ajax  
    axios  第三方的模块，非常好用  安装  

---------------- JSON 
[]   {}
[
    {
        "name":"zhangsan"
        "age":100
    }
]

----------------- 模拟api接口  easy mock
https://www.easy-mock.com/mock/5d3e9a165cd02f48d4102435/wangcai/getfilms


npmjs.com 
github

-----------------------  UI框架（element-ui）
安装：npm i element-ui -S

-------------- 作业：
1，element-ui  上面的组件都过一次
2，axios 模拟一个api接口   请求数据   把数据渲染到组件上
3，模拟一个电影列表的接口  写一个Films的组件，把数据渲染出来

--------------- 复习 
1，vue-cli
2，单文件组件
3，路由系统
    基本路由  嵌套路由   动态路由   编程式路式  重定向
4，前后端分离开发，前端需要请求后端的数据，使用一个模块，    叫axios
5，UI框架 ---> Element-UI

---------------- Vuex   是一个第三方的模块
状态（数据）管理器。
为什么需要它？
    之前数据传递比较麻烦，利用vuex可以把数据统一管理起来，使用比较方便。

案例： counter 数据，状态
    根组件 ，显示counter的值
    AddNumber，显示counter的值，+1
    SubNumber，显示counter的值，-1

引入vuex：
    <script src="./vue.js"></script>
    <script src="./vuex.js"></script>

得到一个Vuex对象：
    {Store: ƒ, install: ƒ, mapState: ƒ, mapMutations: ƒ, mapGetters: ƒ, …}

Store是一个构造器，需要去new这个构造器。

Vuex中不推荐直接去操作状态，如下：this.$store.state.counter++;你要想修改状态，在组件内部通过this.$commit方法触发事件，执行mutations当中对应的方法。


--------------- 在脚手架中使用vuex 
安装：npm i vuex --save

---------------













