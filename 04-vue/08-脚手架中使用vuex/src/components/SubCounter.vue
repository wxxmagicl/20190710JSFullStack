<template>
  <div class="subcounter">
    <p>我是subcounter子组件</p>
    <p>当前counter的值：{{this.$store.state.counter}}</p>
    <button @click="subone">加1</button>
  </div>
</template>
<script>
    export default{
        methods:{
            subone(){
                this.$store.commit("sub")
            }
        }
    }
</script>
