<template>
  <div id="app">
    <p>我是根组件</p>
    <p>{{num}}</p>
    <button @click="addNum">点击</button>
    <button @click="addAsyncNum">异步点击</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
export default {
  computed:{
    ...mapState(["num"])
  },
  methods:{
    ...mapMutations(["addNum"]),
    ...mapActions(["addAsyncNum"])
  }
};
</script>

<style>
</style>
