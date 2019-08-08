<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.getLocation();
  },
  methods: {
    // 获取位置信息的
    getLocation() {
      const self = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete); //返回定位信息
        AMap.event.addListener(geolocation, "error", onError); //返回定位出错信息
        
        function onComplete(data){
          // 得到位置信息了
          console.log(data)
          console.log(this)
          self.$store.dispatch("setLocation",data)
          self.$store.dispatch("setAddress",data.formattedAddress)
        }
        function onError(err){
          console.log(err)
        }
      });
    }
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
  background: #f1f1f1;
}
</style>
