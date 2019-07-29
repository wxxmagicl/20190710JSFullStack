<template>
<div class="about">
    <button @click="f">返回</button>
    <h1>关于我们</h1>
</div>
</template>

<script>
export default{
    methods:{
        f(){
            // this.$router.push("/home")
            this.$router.go(-1)
        }
    }
}
</script>