

<template>
<div><Fixed></Fixed>
    <!-- 头部导航栏 -->
     <div class="boy_header">
       <span class="btn fa fa-bars fa-lg"></span>
       <p class="cart">购物车</p>
       <span class="search fa fa-search"></span>
     </div>

        <!-- 内容 -->
     <div class="cont">你的购物车空空如也.......</div>
</div>
</template>

<script>
import Fixed from "../../components/fixed.vue";

export default {
  components: { Fixed }
};
</script>

<style>
@import url("../../css/comm.css");
.boy_header {
  background-image: linear-gradient(#323232, #414141);
}
.cart{
  font-size: 25px;
  text-align: center;
  margin: 0 auto;
  color: white;
  line-height: 0.9rem;
}

.cont{
  width: 100%;
  height: 5rem;
  font-size: 18px;
  margin: 3rem auto;
  text-align: center;
}

</style>



