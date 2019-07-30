<template>
  <div id="app">
    <p>我是根组件</p>
    <p>{{list}}</p>
    <hr>
    <p>不及格的学生人数是：{{this.$store.getters.faileNumber}}</p>
    <p>不及格的学生人数是：{{faileNumber}}</p>
  </div>
</template>

<script>
import {mapState,mapGetters} from "vuex"
export default {
  computed:{
    ...mapGetters(["faileNumber"]),
    ...mapState(["list"]),
    // faileNumber(){
    //   return this.$store.getters.faileNumber
    // }
  }
};
</script>

<style>
</style>
