<template>
<div class="city">
    <div class="search_wrap">
        <div class="search">
            <i class="fa fa-search"></i>
            <input type="text" v-model="city_val" placeholder="请输入城市名">
        </div>
        <button>取消</button>
    </div>
</div>
</template>

<script>
export default{
    data(){
        return{
            city_val:""
        }
    }
}
</script>

<style scoped>
.city {
width: 100%;
height: 100%;
overflow: auto;
box-sizing: border-box;
padding-top: 45px;
}
.search_wrap {
position: fixed;
top: 0;
height: 45px;
width: 100%;
background: #fff;
box-sizing: border-box;
padding: 3px 16px;
display: flex;
justify-content: space-between;
}
.search {
background-color: #eee;
border-radius: 10px;
line-height: 40px;
width: 85%;
box-sizing: border-box;
padding: 0 16px;
}
.search input {
background: #eee;
outline: none;
border: none;
margin-left: 5px;
}
.search_wrap button {
outline: none;
color: #009eef;
}

.location {
background: #fff;
padding: 8px 16px;
height: 65px;
box-sizing: border-box;
}

.search_list {
background: #fff;
padding: 5px 16px;
}
.search_list li {
padding: 10px;
border-bottom: 1px solid #eee;
}
</style>