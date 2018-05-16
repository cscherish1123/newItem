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
        <mt-swipe-item><img  src="//img10.static.yhbimg.com/yhb-img01/2018/04/18/10/01b2616a11018d50333772de19cfb78139.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img  src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/10/017aa121efe043885b9a447313b75b9ab8.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img  src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/10/01a16b575d8f7eee1d996fa8059f92af8e.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/10/01379501b5a86f54e709acce50926df02e.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
       </mt-swipe>
     </div>
     <!-- banner -->

   <List></List>

 

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

     <!-- 人气推荐 -->
       <div class="hot_brand top_list">
      <img src="//img10.static.yhbimg.com/yhb-img01/2017/08/16/17/01d9e2c0e69c1b13eaf979f3940dca42ee.jpg?imageView2/3/w/640/h/200/q/60" alt="">
     </div>
       <div class="hot_brand top_list">
      <img src="//img10.static.yhbimg.com/yhb-img01/2017/08/16/17/01280cb5522f4eb015ab9a72dc6a899882.jpg?imageView2/3/w/640/h/200/q/60" alt="">
       </div>
       <div class="hot_brand top_list">
     <img src="//img11.static.yhbimg.com/yhb-img01/2017/08/16/17/018e9f4b45c625e6348512065f327f144f.jpg?imageView2/3/w/640/h/200/q/60" alt="">
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
        'https://img11.static.yhbimg.com/yhb-img01/2018/02/28/14/01818b609d3e5a0f167f3cc91fb65c88fa.jpg?imageView2/2/w/140/h/140/q/60',
        'https://img11.static.yhbimg.com/yhb-img01/2018/02/28/14/01d1c3b57201d5336d805b3e08a9e6ccd1.jpg?imageView2/2/w/140/h/140/q/60',
        'https://img11.static.yhbimg.com/yhb-img01/2018/02/28/14/01d152519772e204b8bb0536e2b7c8e8fe.jpg?imageView2/2/w/140/h/140/q/60',
        'https://img11.static.yhbimg.com/yhb-img01/2018/02/28/14/0189c9e3b6dc0a0b397bdd97b9d7fde1a5.jpg?imageView2/2/w/140/h/140/q/60',
        'https://img11.static.yhbimg.com/yhb-img01/2018/02/28/14/01d152519772e204b8bb0536e2b7c8e8fe.jpg?imageView2/2/w/140/h/140/q/60',
        'https://img11.static.yhbimg.com/yhb-img01/2018/02/28/14/01818b609d3e5a0f167f3cc91fb65c88fa.jpg?imageView2/2/w/140/h/140/q/60',
        'https://img11.static.yhbimg.com/yhb-img01/2018/02/28/14/01d1c3b57201d5336d805b3e08a9e6ccd1.jpg?imageView2/2/w/140/h/140/q/60',
        'https://img11.static.yhbimg.com/yhb-img01/2018/02/28/14/01818b609d3e5a0f167f3cc91fb65c88fa.jpg?imageView2/2/w/140/h/140/q/60',
        'https://img11.static.yhbimg.com/yhb-img01/2018/02/28/14/01d152519772e204b8bb0536e2b7c8e8fe.jpg?imageView2/2/w/140/h/140/q/60',
        
        
        
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
  background: #7ad9f9;
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
