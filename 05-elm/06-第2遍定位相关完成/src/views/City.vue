<template>
  <div class="city">
    <!-- 搜索框 -->
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" v-model="city_val" placeholder="输入城市名" />
      </div>
      <button>取消</button>
    </div>
    <!-- Location组件 -->
    <div style="height:100%">
      <div class="location">
        <Location :address="city" />
      </div>
      <Alphabet @selectCity="selectCity" ref="allcity" :cityInfo="cityInfo" :keys="keys"></Alphabet>
    </div>
  </div>
</template>

<script>
import Location from "../components/Location";
import Alphabet from "../components/Alphabet";

export default {
  data() {
    return {
      city_val: "",
      cityInfo:null,  // 所有的城市包含A-Z和热门城市
      keys:[]  // 所有的A-Z城市
    };
  },
  created(){
      this.getCityInfo()
  },
  methods:{
      getCityInfo(){
          this.$axios("/api/posts/cities").then(res=>{
            //   console.log(res)
              this.cityInfo = res.data; // cityInfo里面是所有的数据

              this.keys = Object.keys(res.data)
              this.keys.pop();
              this.keys.sort();

              // 当页面中所有的dom元素渲染完后会自动调用这个nextTick
              this.$nextTick(()=>{
                this.$refs.allcity.initScroll()
              })
              
          })
      },
      selectCity(city){
        console.log(city)
        this.$router.push({name:"address",params:{city:city.name}})
      }
  },
  computed: {
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  },
  components: {
    Location,
    Alphabet
  }
};
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
  border-radius: 30%;
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

