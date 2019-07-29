<template>
  <div id="app">
    <router-link to="/">主页</router-link>  <br>
    <router-link to="/find">发现页</router-link>  <br>
    <router-link to="/setting">设置页</router-link>  <br>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<style>
</style>
