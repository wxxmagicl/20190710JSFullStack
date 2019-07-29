<template>
    <div class="setting">
        这是设置页面
        <router-link to="/setting/login">登录</router-link>
        <router-link to="/setting/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style scoped>
.setting{
    font-size: 38px;
}
</style>
