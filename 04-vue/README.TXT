vue是一套构建用户界面的渐进式框架。
    构建用户界面：画页面
    渐进式：最核心功能单一，只关注视图，生态好（vue技术栈（全家桶））
    全家桶：vue.js  es6  vue-router   vuex   webpack ....

指令：
    在vue中 以v-打头 指令写在开始标签里面 <h1 v-text="xx"></h1>  <h1 title="xx"></h1>
    数据绑定相关指令：
        v-text  ==> 插值表达式  <h1 v-text="msg"></h1>   {{}}是v-text的语法糖  v-text直接把数据渲染出来，有Html标签也不会解析
        v-html  ==> 数据绑定  解析html标签
        v-model  ==> 实现双向数据绑定
    和属性相关的指令：
        v-bind  ==>  用于绑定html标签中的属性  v-bind:href="数据"   简写： :href = "数据"


双向数据绑定：
    MVVM：
        M model  数据模型  data
        V View   视图  
        VM  ViewModel  视图模型
