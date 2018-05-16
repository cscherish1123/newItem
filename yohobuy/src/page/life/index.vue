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
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/10/01d18d24382d49d4a4d803ff1bbf71ec37.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/10/011e9173d968f417c8ff421dce57d92966.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/10/01d18d24382d49d4a4d803ff1bbf71ec37.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
        <mt-swipe-item><img src="//img11.static.yhbimg.com/yhb-img01/2018/04/18/10/014982a74252d88614ce8f3f9b7b6f4f9e.jpg?imageView2/2/w/640/h/240/q/60"></mt-swipe-item>
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
     <img src="//img10.static.yhbimg.com/yhb-img01/2017/08/16/17/01a00e99aefb6466b2ee756852035eb95f.jpg?imageView2/3/w/640/h/200/q/60" alt="">
     </div>
       <div class="hot_brand top_list">
      <img src="//img10.static.yhbimg.com/yhb-img01/2017/08/16/17/01c0f7fc0367f86a1e9b1d2d5d47daffab.jpg?imageView2/3/w/640/h/200/q/60" alt="">
       </div>
       <div class="hot_brand top_list">
    <img src="//img10.static.yhbimg.com/yhb-img01/2017/08/16/17/011d25cc4122b7b3fc60181070c45ade86.jpg?imageView2/3/w/640/h/200/q/60" alt="">
    </div>
           <div class="hot_brand top_list">
    <img src="//img11.static.yhbimg.com/yhb-img01/2017/08/16/17/01aa32eb925ee5211fb457556b402423b7.jpg?imageView2/3/w/640/h/200/q/60" alt="">
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
        "https://img10.static.yhbimg.com/yhb-img01/2017/12/14/09/01203e992f56c4a26f12e2e55f28f2de3a.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img10.static.yhbimg.com/yhb-img01/2017/12/14/09/017c60de11e3623ab7cbf9e0396d49a969.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2017/12/14/09/0197dfa87ab57aebd31869eec3896c76ce.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img10.static.yhbimg.com/yhb-img01/2017/12/14/09/01f601374e5cc2bbc9b073d9e6421615b8.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2017/12/14/09/01258fc411d1699da54acdd75bb832319b.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img10.static.yhbimg.com/yhb-img01/2017/12/14/09/017c60de11e3623ab7cbf9e0396d49a969.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2017/12/14/09/01258fc411d1699da54acdd75bb832319b.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img10.static.yhbimg.com/yhb-img01/2017/12/14/09/017c60de11e3623ab7cbf9e0396d49a969.jpg?imageView2/2/w/140/h/140/q/60",
        "https://img11.static.yhbimg.com/yhb-img01/2017/12/14/09/0197dfa87ab57aebd31869eec3896c76ce.jpg?imageView2/2/w/140/h/140/q/60"
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
  background: #4f4138;
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

.top_list {
  width: 100%;
  height: 2.29rem;
}
.top_list img {
  width: 100%;
  height: 100%;
}
</style>
