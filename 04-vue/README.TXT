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


