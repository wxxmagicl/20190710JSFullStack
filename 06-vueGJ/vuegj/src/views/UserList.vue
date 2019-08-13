<template>
  <div>
    <li>
      <router-link to="/user/detail?id=1">用户1</router-link>
    </li>
    <li>
      <router-link to="/user/detail/2">用户2</router-link>
    </li>
    <li>
      <router-link to="/user/detail/3">用户3</router-link>
    </li>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // console.log(from.name)
    if (from.name === "userAdd") {
    }
    // 这里this是得不到vum的实例的
    next(vm => {
    });
  }
};
</script>

