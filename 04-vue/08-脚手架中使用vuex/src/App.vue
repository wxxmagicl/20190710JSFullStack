<template>
  <div id="app">
    <p>我是根组件，当前counter的值是:{{this.$store.state.counter}}</p>
    <br />
    <add-counter></add-counter>
    <br />
    <sub-counter></sub-counter>
    <br>
    <button @click="add100">加100</button>
  </div>
</template>

<script>
import AddCounter from "@/components/AddCounter";
import SubCounter from "@/components/SubCounter";
export default {
  components: {
    AddCounter,
    SubCounter
  },
  methods:{
    add100(){
      this.$store.commit("addN",100)
    }
  }
};
</script>

<style>
</style>
