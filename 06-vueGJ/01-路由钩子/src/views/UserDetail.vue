<template>
<div>
    使用问号的形式传参：{{this.$route.query.id}} 号用户的详情 <br>
    使用路径的形式传参：{{this.$route.params.id}} 号用户的详情
</div>
</template>

<script>
// hash模式下，才能使用watch监控到路径变化
export default {
    beforeRouteUpdate(to,from,next){
        console.log("beforeRouteUpdate...")
        alert(1)
        next()
    }
    // watch:{
    //     $route(){
    //         alert(1)
    //     }
    // }
}
</script>