<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    this.getLocation();
  },
  methods: {
    // 获取位置信息
    getLocation() {
      const self = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);
        function onComplete(data) {
          // data是具体的定位信息  精准定位
          // console.log(data);
          self.$store.dispatch("setLocation",data)
          self.$store.dispatch("setAddress",data.formattedAddress)
        }
      });
    }
  }
};
</script>

<style>
</style>
