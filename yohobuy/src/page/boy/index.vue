<template>
  <div>
    <!-- 头部导航栏 -->
     <div class="boy_header">
       <span class="btn fa fa-bars fa-lg"></span>
       <span class="logo"></span>
       <span class="search fa fa-search"></span>
     </div>

     <!-- banner -->
     <div class="banner">
       <mt-swipe :auto="0">
        <mt-swipe-item><img  src="//img10.static.yhbimg.com/yhb-img01/2018/04/17/17/01787bf7081dc1e47a89a41c7241c784b9.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/17/17/016223a813f7affcb89415fc3db52e07c1.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img  src="//img11.static.yhbimg.com/yhb-img01/2018/04/17/17/0150a78285532a743abc785ac9ebfe478e.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img  src="//img11.static.yhbimg.com/yhb-img01/2018/04/17/17/014ab003d46b633fb3c49dd15ff593de8a.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img  src="//img10.static.yhbimg.com/yhb-img01/2018/04/17/17/012f55a37e9ee4e877d6ddd7a0a88eaf79.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/17/17/0115fe8889d71c032201812167f6d4eef7.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img  src="//img10.static.yhbimg.com/yhb-img01/2018/04/17/17/01101eb9054ca630dfb099468db440c073.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/17/17/0147786116560ecb4a29a2b917c7362de3.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
       </mt-swipe>
     </div>
     <!-- banner -->

   <List></List>

     <!-- 周年庆 -->
     <div class="celebration">
          <img src="//img10.static.yhbimg.com/yhb-img01/2018/04/17/17/014321e0eec6085271398d286dc12d03d5.jpg?imageView2/3/w/640/h/200/q/60" alt="">
     </div>

          <div class="selected">
        <img src="//img11.static.yhbimg.com/yhb-img01/2018/04/17/17/01454b6c783faf8a7e86cb60b6bca553ef.jpg?imageView2/3/w/640/h/200/q/60" alt="">
     </div>

     <!-- 周年庆 -->

     <!--热门分类  -->
     <div class="host_list">
        <h2 class="host_tit">热门分类</h2>

        <!-- 内容 -->
        <ul>
          <li v-for="item in arr">
               <img :src="item" alt="">
          </li>
        </ul>

        <div class="host_banner">
           <mt-swipe :auto="0">
        <mt-swipe-item><img  src="//img10.static.yhbimg.com/yhb-img01/2018/04/17/17/01787bf7081dc1e47a89a41c7241c784b9.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/17/17/016223a813f7affcb89415fc3db52e07c1.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img  src="//img11.static.yhbimg.com/yhb-img01/2018/04/17/17/0150a78285532a743abc785ac9ebfe478e.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        </mt-swipe>
        </div>

     
     <!-- 你可能喜欢 -->
    <div class="maybe_like">
        <h4 class="maybe_tit"><span class="fa fa-arrow-circle-up"></span>你可能喜欢的</h4>
        <ul class="cont">
          <li v-for="item in more">
            <router-link :to="{path:'/detail',query:{goodsId:item.goodsId}}">
            <img :src="item.goodsThumb" alt="">
             </router-link>
            <p>{{item.goodsName}}
            </p>
             <span>￥{{item.salePrice}}</span>
          
          </li>
        </ul>
     </div>
     <!-- 你可能喜欢 -->
      
     </div>
     <!--热门分类  -->
      <!-- 固定导航 -->
      <Fixed></Fixed>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
import List from '../../components/item'
// import "../../../node_modules/mint-ui/lib/style.css";
import Mint from "mint-ui";
import Axios from "axios";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import Fixed from '../../components/fixed.vue'
export default {
  components: { Fixed,List},
  data() {
    return {
      arr: [
        "https://img11.static.yhbimg.com/yhb-img01/2018/04/17/13/01443dd42d17d017c1cb1a980c3f7572f3.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img10.static.yhbimg.com/yhb-img01/2018/04/17/13/013e679bc39dab0ba65b53b8e69caef831.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2018/04/17/13/01f8df879b982b0f9bea59d0e5f06507aa.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2018/04/17/13/014efb44d0bbf076615bd1983a1f20acc9.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2018/04/17/13/01a4ba0b8a33602793a7e6bebe98d4b9db.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img10.static.yhbimg.com/yhb-img01/2018/04/17/13/01a4b1b58a310ef4983ed3ff9488ca1a3b.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img10.static.yhbimg.com/yhb-img01/2018/04/17/13/01a4b1b58a310ef4983ed3ff9488ca1a3b.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2018/04/17/13/011af1e20bca18512c4807180a8d6297ae.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img10.static.yhbimg.com/yhb-img01/2018/04/17/13/01a25a61861dc0c773ae09c0bbe4c72575.jpg?imageView2/2/w/140/h/140/q/60"
      ],
      more: []
    };
  },
  mounted() {
    Axios.get("../../../static/goods.json").then(res => {
      this.more = res.data.data.goodsList;
      console.log(res.data.data.goodsList);
    });
  }
};
</script>

<style scoped>
@import url("../../css/comm.css");
.boy_header {
  background-image: linear-gradient(#323232, #414141);
}


/* 周年庆 */
.celebration,
.selected {
  margin-top: 0.25rem;
  width: 100%;
  height: 2rem;
}
.celebration img,
.selected img {
  width: 100%;
  height: 100%;
}
/* 热评分类 */
.host_list {
  width: 100%;
  height: 5rem;
}
.host_list .host_tit {
  height: 0.8rem;
  width: 100%;
  font-size: 15px;
  text-align: center;
  line-height: 0.8rem;
  font-weight: 550;
}
.host_list ul {
  width: 100%;
  overflow: hidden;
}
.host_list > ul > li {
  float: left;
  width: 33%;
  height: 2.2rem;
  border-top: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
}
.host_list .host_banner {
  width: 100%;
  height: 2rem;
  margin-top: 0.2rem;
}

.host_list .host_banner img {
  width: 100%;
  height: 100%;
}

</style>
