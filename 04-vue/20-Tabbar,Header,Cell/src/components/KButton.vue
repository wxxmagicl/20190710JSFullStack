<template>
    <button class="y-button"
        :class="{'is-disabled':disabled}"
        :type="type"
        :disabled="disabled"
        @click="$emit('click')"  
    >
    <slot></slot>
    </button>
</template>

<script>
export default{
    props:{
        type:String,
        disabled:Boolean,
    }
}
</script>


<style scoped>
.y-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: #fff;
  background-color: #20af0e;
  border-color: #20af0e;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
}
.is-disabled,
.is-disabled:focus,
.is-disabled:hover {
  color: #fff;
  background-color: red;
  border-color: #75b56c;
  cursor: not-allowed;
  pointer-events: none;
}
</style>