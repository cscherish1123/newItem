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
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/09/0175bcac9ee0e110b2d4bd160dfcfd4271.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/09/0181adc14315d379715f21912cee760ddc.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/09/01a951610c868a28cebda33726907dbfa9.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img10.static.yhbimg.com/yhb-img01/2018/04/18/09/01439d7cb946498d41d9ff10bc3a4026d9.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img10.static.yhbimg.com/yhb-img01/2018/04/18/09/019bfb7788486a83b716be838b248a105c.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/09/01575dcf1f7511dbc1ec8953d8153defe6.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/09/014eedfb0471b21e70bd3461044e19f5ba.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/09/0119832344ac6ff5411e226b29c1ce10ba.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
       </mt-swipe>
     </div>
     <!-- banner -->

   <List></List>

     <!-- 周年庆 -->
     <!-- <div class="celebration">
          <img src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/09/010d952e75b12924078df64c21dc037cd3.jpg?imageView2/3/w/640/h/200/q/60" alt="">
     </div> -->

     <!-- 周年庆 -->

     <!--热门分类  -->
     <div class="host_list">
        <h2 class="host_tit">热门分类</h2>

        <!-- 内容 -->
        <ul>
          <li v-for="item in arr">
               <a href=""><img :src="item" alt=""></a>
          </li>
        </ul>
      
   </div>
     <!--热门分类  -->

     <!-- 热门品牌 -->
     <div class="hot_brand">
       <h3>热门品牌</h3>
         <li v-for="item in arr2">
           <img :src="item" alt="">
         </li>
     </div>
     <!-- 热门品牌 -->

     <!-- 人气推荐 -->
       <div class="hot_brand top_list">
       <h3>人气推荐</h3>
      <img src="//img10.static.yhbimg.com/yhb-img01/2017/09/18/18/0190e7e1dee208d3c8381650177671c149.jpg?imageView2/2/w/640/h/200/q/90" alt="">
     </div>
     <!-- 人气推荐 -->
     
     <!-- 你可能喜欢 -->
    <div class="maybe_like">
        <h4 class="maybe_tit"><span class="fa fa-arrow-circle-up"></span>你可能喜欢的</h4>
        <ul class="cont">
          <li v-for="item in more">
            <img :src="item.goodsThumb" alt="">
            <p>{{item.goodsName}}
            </p>
             <span>￥{{item.salePrice}}</span>
           
          </li>
        </ul>
     </div>
     <!-- 你可能喜欢 -->
  

 
      <!-- 固定导航 -->
      <Fixed></Fixed>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
import List from "../../components/item";
// import "../../../node_modules/mint-ui/lib/style.css";
import Mint from "mint-ui";
import Axios from "axios";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import Fixed from "../../components/fixed.vue";
export default {
  components: { Fixed, List },
  data() {
    return {
      arr: [
        "https://img11.static.yhbimg.com/yhb-img01/2018/04/18/10/01ca2662b7e6f73a51a9ecfe3d814d08d7.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img10.static.yhbimg.com/yhb-img01/2018/04/18/10/01fb7cb86073b16004326b76fb6bfb843b.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2018/04/18/10/01047d9382c31807b1ad217280f6510ebf.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img10.static.yhbimg.com/yhb-img01/2018/04/18/10/0157f466b9def7efcba18b264d9e7c85fd.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2018/04/18/10/01466ab537a45fd196028cd697742fba81.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img10.static.yhbimg.com/yhb-img01/2018/04/18/10/014405e5c422cdcac8fb4a79721bf0c83e.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2018/04/20/10/016d2ad52ef1f99e90e8e9fc655c739b0b.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2018/04/18/10/01278b09d2a828caf8238f984ffc2fdd33.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2018/04/18/10/01e54312d920f62108f356cbf4d84f79e2.jpg?imageView2/2/w/140/h/140/q/60"
      ],
      arr2: [
        "https://img11.static.yhbimg.com/yhb-img01/2017/11/11/13/0191bc18aed18ac3c5d2cb2b46558fcf55.jpg?imageView2/2/w/158/h/174/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2017/11/11/13/01d7cb9e6be5425e16fd43c2d124a94489.jpg?imageView2/2/w/158/h/174/q/60",
        "https://img10.static.yhbimg.com/yhb-img01/2017/11/11/13/01e669fac2e090f8b416a5d3728eaa5613.jpg?imageView2/2/w/158/h/174/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2017/11/11/13/0160ba205efba23553618408516c010a17.jpg?imageView2/2/w/158/h/174/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2017/11/11/13/01123947c58e8623945949c27f18f26f43.jpg?imageView2/2/w/158/h/174/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2017/11/11/13/011c514b9a92ffa99849bee8783147e3cf.jpg?imageView2/2/w/158/h/174/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2016/09/06/14/01c405f8a7ba470fdc0cef64aa91af2435.png?imageView2/2/w/320/h/172/q/60"
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
  background: #ff88ae;
}

/* 周年庆 */
.celebration {
  margin-top: 0.25rem;
  width: 100%;
  height: 2rem;
}
.celebration img {
  width: 100%;
  height: 100%;
}
/* 热评分类 */
.host_list {
  overflow: hidden;
  width: 100%;
  height: 7.8rem;
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

/* 热门品牌 */
.hot_brand {
  width: 100%;
  height: 3.8rem;
  margin-bottom: 0.2rem;
  overflow: hidden;
}
.hot_brand h3 {
  font-size: 15px;
  text-align: center;
  margin-bottom: 0.2rem;
}
.hot_brand li {
  float: left;
  width: 25%;
  height: 1.6rem;
}
.hot_brand li img {
  width: 100%;
  display: block;
  height: 100%;
}

.hot_brand li:last-of-type {
  width: 50%;
}

.top_list{
  width: 100%;
  height: 2.29rem;
}
.top_list img{
  width: 100%;
  height: 100%;
}


</style>
