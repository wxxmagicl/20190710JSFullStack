<template>
  <div class="address">
    <Header :isLeft="true" title="选择收货地址"></Header>
    <div class="city_search">
      <div class="search">
        <span class="city">
          {{city}}
          <i class="fa fa-angle-down"></i>
        </span>
        <i></i>
        <input type="text" v-model="search_val" placeholder="小区/写字楼/学校等" />
      </div>
      <Location @click="selectAddress" :address="address" />
    </div>
    <div class="area">
      <ul class="area_list" v-for="(item,index) in areaList" :key="index">
        <li>
          <h4>{{item.name}}</h4>
          <p>{{item.district}}{{item.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Location from "../components/Location";

export default {
  data() {
    return {
      city: "",
      search_val: "",
      areaList: [] // 根据关键字匹配到的地点
    };
  },
  computed: {
    address() {
      return this.$store.getters.address;
    }
  },
  watch: {
    search_val() {
      // console.log(this.search_val)
      this.searchPlace();
    }
  },
  methods: {
    selectAddress() {
      this.$router.push("/");
    },
    // 根据关键字搜索这个关键字对应的地点
    searchPlace() {
      const self = this;
      AMap.plugin("AMap.Autocomplete", function() {
        var autoOptions = {
          //city 限定城市，默认全国
          city: self.city
        };
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(self.search_val, function(status, result) {
          self.areaList = result.tips;
        });
      });
    }
  },
  components: {
    Header,
    Location
  },
  beforeRouteEnter(to, from, next) {
    // console.log(to.params.city)
    next(vm => {
      vm.city = to.params.city;
    });
  }
};
</script>


<style scoped>
.address {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}

.city_search {
  background-color: #fff;
  padding: 10px 20px;
  color: #333;
}

.search {
  background-color: #eee;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 40px;
}
.search .city {
  padding: 0 10px;
}
.city i {
  margin-right: 10px;
}
.search input {
  margin-left: 5px;
  background-color: #eee;
  outline: none;
  border: none;
}

.area {
  margin-top: 16px;
  background: #fff;
}
.area li {
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
  color: #aaa;
}
.area li h4 {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
</style>