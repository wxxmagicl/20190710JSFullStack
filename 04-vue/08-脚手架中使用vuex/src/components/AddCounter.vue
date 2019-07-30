<template>
  <div class="addcounter">
    <p>我是addcounter子组件</p>
    <p>当前counter的值：{{this.$store.state.counter}}</p>
    <button @click="addone">加1</button>
  </div>
</template>
<script>
    export default{
        methods:{
            addone(){
                this.$store.commit("add")
            }
        }
    }
</script>
