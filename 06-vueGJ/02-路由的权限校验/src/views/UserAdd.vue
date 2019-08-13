<template>
<div>
    <input type="text" v-model="username">
    <button @click="toList">去列表页面</button>
</div>
</template>
<script>
export default {
    name:"userAdd",
    methods:{
        toList(){
            this.$router.push("/user/list")
        }
    },
    // 在进入另一个组件时，会自动触发这个钩子
    beforeRouteLeave(to,from,next){
        if(this.username){
            let confirm = window.confirm("你确定要去UserList组件吗？")
            if(confirm){
                next()
            }
        }else{
            next();
        }
    },
    data(){
        return{
            username:""
        }
    }
}
</script>