vue-cli 
    配置文件 vue.config.js 必须位于src同级的目录下面
    基于webpack  配置webpack 

路由的生命周期
使用路由做权限校验
    meta
    后端返回路由数据

模块化：
    任何一个文件都是一个模块，写了一个模块，需要把这个模块导出去，别人需要把这个模块导进来
    commonjs方案： node
        导入：let http = require("http")
        导出：module.exports = {}
    es6: vue react
        导入：import http from "http"
        导出：export default {}

在localhost:8080下面去访问localhost:3000 默认情况下有跨域限制，是浏览器给它限制
端口不一样，IP不一样，协议不一样，都会产生跨域

解决跨域：
    浏览器的插件  Access-Control-Allow-Origin
    代理

路由：
    history模式
    hash模式  #

路由的生命周期：
    入口main.js中还有两个：beforeEach  beforeResolve
    离开一个组件时：  beforeRouteLeave 
    进入到一个新的页面：beforeEach
    router配置文件中也有路由钩子：beforeEnter
    进入新的组件：beforeRouteEnter 
    解析完成：beforeResolve 
    进入完毕： afterEach
    路径发生改变：beforeRouteUpdate 
