<template>
  <div>
    <Home></Home>
      首页
    <router-link to="/frist/second">二级页面</router-link>
    <router-view></router-view>
    
  </div>
</template>
<script>
// 跳转显示到页面
import Home from "../components/home"
export default {
  components:{Home}
}
</script>

