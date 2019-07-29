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

--------------------- 嵌套路由 















