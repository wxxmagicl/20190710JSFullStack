<template>
<div class="about">
    <h1>网站首页</h1>
    <button @click="f">获取电影数据</button>
    <p>{{msg}}</p>
</div>
</template>

<script>
// 引入服务员  
import axios from "axios"
import { constants } from 'crypto';
export default{
    data(){
        return{
            msg:""
        }
    },
    methods:{
        f(){
            axios.get("https://www.easy-mock.com/mock/5d3e9a165cd02f48d4102435/wangcai/getfilms")
            .then(res=>{
                console.log(res.data.subjects[0].title)
                this.msg = res.data.subjects[0].title
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>