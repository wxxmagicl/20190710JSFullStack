<template>
  <div id="app">
    <p>我是根组件，当前counter的值是:{{this.$store.state.counter}}</p>
    <h1>{{counter}}-----------{{stus}}</h1>
    <hr>
    <h2>{{msg+1}}</h2>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data(){
    return{
      msg:this.$store.state.counter
    }
  },
  computed:{
    // counter(){return this.$store.state.counter},
    // stus(){return this.$store.state.stus}
    // mapState是一个函数，调用了这个函数，实参是一个数组，返回一个对象
    // ...把一个对象进行拆分，叫拓展运算符
    // computed是一个属性名，属性值是一个对象，mapState返回对象
    // ...mapState 表示把这个对象中的数据拆分
    // 这样一来，counter，stus就可以当成计算属性来用了
    ...mapState(["counter","stus"]),
    f1(){
      
    }
  },
  components: {
  }
};
</script>

<style>
</style>
