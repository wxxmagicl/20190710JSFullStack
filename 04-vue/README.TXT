vue是一套构建用户界面的渐进式框架。
    构建用户界面：画页面
    渐进式：最核心功能单一，只关注视图，生态好（vue技术栈（全家桶））
    全家桶：vue.js  es6  vue-router   vuex   webpack ....

双向数据绑定：
    MVVM：
        M model  数据模型  data
        V View   视图  
        VM  ViewModel  视图模型

指令：
    在vue中 以v-打头 指令写在开始标签里面 <h1 v-text="xx"></h1>  <h1 title="xx"></h1>
    数据绑定相关指令：
        v-text  ==> 插值表达式  <h1 v-text="msg"></h1>   {{}}是v-text的语法糖  v-text直接把数据渲染出来，有Html标签也不会解析
        v-html  ==> 数据绑定  解析html标签
        v-model  ==> 实现双向数据绑定
    和属性相关的指令：
        v-bind  ==>  用于绑定html标签中的属性  v-bind:href="数据"   简写： :href = "数据"
    条件指令：
        v-if  控制一个元素是否显示
        v-show   display:none  0,-1,""会自动转化成false  1会转成true  可以放表达式
        v-if和v-show有区别？--->
        v-if  v-else  指令之间不能有其它元素
        v-else-if
    循环指令：
        v-for  遍历数组  <p v-for="(value,index) in links">{{value}}</p>

--------------- 复习上午的指令：
    数据绑定相关：
        v-text 
        v-html 
        v-model 
    绑定html属性的：
        v-bind
    两个特殊的属性：class  style 
        class  
            :class="数据"  
            :class="三元运算符"   
            :class="{类名:boolean}"
            :class="{类名1:boolean,类名2:boolean}"
            类名中有-，需要使用引号包起来
            :class="['类名']"
        style 
    循环指令：
        v-for  
            数组 
            对象
            整数
--------------------- 数据
    data:{

    }

--------------------- 方法 
    方法本质是函数
    methods:{

    }

--------------------- 计算属性
    计算属性本质是函数，依赖其它值--->得到我们需要的结果
    但是用的时候，你当成一个数据来用
    计算属性和方法的区别：
        1，它们两个本质都是函数
        2，用的时候，方法需要调用，计算属性是当成数据来使用
        3，方法没有缓存，计算属性有缓存
    computed:{

    }

    结论：能使用计算属性的，就不要使用方法


--------------------- 过滤器
    过滤器本质是函数
    filters:{

    }
    还有一些第三方的过程器

------ 网页的渲染原理 diff 虚拟dom(对象)

vue:
    特征1：指令系统
    特征2：组件化  
    特征3：模块化
    特征4：工程化
    特征5：全栈化

React，Angular:
    React: 中
    Angular: 高

------------ vue实例的配置项：
    el:必选的   vue实例管理的边界
    data: 数据模型 
    methods:方法 
    computed:计算属性
    filters:过滤器 
    components:组件 
    勾子函数：vue的生命周期函数（不需要我们自己调用，要合适的时机，vue会自动调用）
    ...

---------------- 指令： 
v-text  {{}}
v-html 
v-model 
v-bind  :   class   style
v-if  v-else   v-else-if   v-show  
v-for 

---------------- 函数：
方法： f1()
计算属性： d 
过滤器： d | f1 

------------------------- 事件模型
事件三要素：事件源，事件类型，监听器  btn.onclick = function(){}
v-on: 处理事件

事件类型：
    鼠标事件：click,dblclick,mouseover,mouseout,mouseenter,mouseleave,mousedown,mousemove,mouseup
    键盘事件：keydown,keyup,keypress
    UI事件：scroll,resize,load,unload
    焦点事件：focus, blur
    表单事件：change,submit

事件处理函数：  
    把事件处理函数写在标签中  <span v-on:click="isShow = !isShow">{{isShow ? "收起":"展开"}}</span>
    把事件处理函数写在methods中  常规写法
    传字面量：v-on:click="f1('world')"
    传变量  <button v-for="(value,key,index) in 3" v-on:click="f2(value)">按钮{{value}}</button>

事件对象：
    当事件发生时，事件对象中保存了很多信息，如点击的坐标。
    $event 固定的名字   
    阻止默认事件：
        <a href="http://www.baidu.com">百度</a>  a标签有的所谓的默认事件
    阻止事件冒泡：
        事件默认情况下会传播，可以从里向外传播，也可以从外向里传播。
        如果是从里向外传播--->事件冒泡机制

事件修饰符：
    之前阻止默认事件的写法：
        e.preventDefaut()  
        <a href="javascript:void(0)"></a>
    vue中通过修饰符的写法：
        @click.prevent="f1"
    
常用的修饰符：
    stop 阻止冒泡 
    prevent 阻止默认事件
    capture 冒泡改为捕获 
    self 只处理发生在自己身上的事件，不理会冒泡或捕获
        把self放到谁的身上，谁就不会触发
    once 只执行一次

按键修饰符：
    keyCode

------------------------ 表单处理 
    绑定普通文本框
    绑定单选框
        name="sex"
        v-model=""
    绑定一个复选框
    绑定多个复选框
    绑定下拉菜单
    省市区三级联动

---------------------- todolist


---------------------- 组件 
    表面来说，组件就是标签。
    根组件：vm    let vm = new Vue()    后面我们定义的所有的组件都是vm的子组件
    分类：全局组件和局部组件

全局组件：
    利用Vue的静态方法component()定义一个全局组件，有一个属性叫template
    在所有的vue实例中都可以使用
    全局注册：
        Vue.component("my-head",{temxxxxx})
    局部注册：


vue-devtools: 所有都要装  

使用组件的一个基本流程：
第一步：定义一个组件对象，组件对象就是一个普通的对象，只不过里面有个template属性
第二步: 注册组件
第三步：使用组件

组件中的三个名字：
    定义组件对象的名字  MyHeader   这个名字写法没有要求
    注册组件时的名字  MyHeader  也没有要求   一般和定义组件对象的名字保持一致
    使用组件时的名字
        只能使用小写  使用组件的名字中不能大写字母
        注册时给你写了一个大驼峰命名，使用时需要把在驼峰转化中划线命名

        MyHeader  定义名 
        MyHeader  注册名 
        my-header 使用名 

组件之间是可以通信（数据的传递）。

默认情况下数据不能在父与子之间共享：
    父子组件之间的数据传递：
        父传子  
        子传父 

    父传子： 父中有数据，传递给子
        1，确定父中有数据
        2，在父组件的模板中通过属性绑定把数据绑到子组件上
        3，在子组件中定义props属性，用来接收父传递过来的数据
        4，在子组件的模板就可以使用接收过来的数据了

        父绑定数据   子接收数据  

    子传父：
        在父组件模板中，给子组件添加一个事件监听
        在子组件中，某个时间通过this.$emit发出这个事件，发出事件的同时就可以携带数据
        当父中的方法触发，数据作用这个方法的第一个参数
    
------------------ vue中的脚手架 
脚手架：快速搭建项目的结构 
单文件组件：一个文件就是一个组件

要使用npm，那么你电脑上需要安装node.js。查看电脑上有没有安装过Node，如下：
node -v   
    v10.16.0  表示node安装成功了

如果node安装成功，它会自动安装一个工具，叫npm，它是用来下载第三方模块的
npm -v 
    6.9.0   表示npm也安装成功了

通过npm i xxx,默认是从国外的服务器下载第三方模块的，会导致下载非常慢，切换下载源
npm i nrm -g   表示安装一个nrm的模块   安装完后，可以使用nrm这个命令了
nrm ls  查看当前有哪些下载源
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/

切换下载源：
nrm use taoba  把下载源切换到国内的taobao


安装脚手架工具：
    npm install -g @vue/cli  全局安装脚手架工具

查看脚手架有没有安装成功：
    vue --version
       3.8.4   表示脚手架也安装成功了

创建项目：
    vue create demo  创建项目





