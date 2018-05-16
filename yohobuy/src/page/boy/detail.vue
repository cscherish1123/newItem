<template>
  <div>
    <div class="boy_header">
       <span class="btn fa fa-bars fa-lg"></span>
       <span class="logo">商品详情</span>
       <span class="search fa fa-search"></span>
     </div>

     <!-- 内容 -->
      <div class="cont">
          <div class="cont_img">
            <img :src="goodsThumb" alt="">
          </div>
         
          <p class="name">{{goodsName}}</p>
          <div class="price">
         <span>￥{{salePrice}}.00</span>
          <span class="right">{{usageStateName}}</span>
          </div>
            <div class="for_img">
            <img :src="goodsThumb" alt="">
            <img :src="goodsThumb" alt="">
            <img :src="goodsThumb" alt="">
          </div>
      </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      arr: [],
      goodsName: "",
      goodsThumb: "",
      salePrice: "",
      usageStateName: ""
    };
  },
  mounted() {
    Axios.get("../../static/goods.json").then(res => {
      this.arr = res.data.data.goodsList;
      console.log(res.data);

      for (var i = 0; i < this.arr.length; i++) {
        if (this.$route.query.goodsId == this.arr[i].goodsId) {
          this.goodsName = this.arr[i].goodsName;
          this.goodsThumb = this.arr[i].goodsThumb;
          this.salePrice = this.arr[i].salePrice;
          this.usageStateName = this.arr[i].usageStateName;
        }
      }
    });
  }
};
</script>

<style>
.boy_header {
  position: relative;
  height: 0.9rem;
  width: 100%;
}

.boy_header .btn {
  position: absolute;
  top: 0rem;
  left: 0rem;
}

.boy_header .btn,
.boy_header .search {
  height: 0.9rem;
  width: 15%;
  font-size: 25px;
  color: #fff;
  line-height: 0.9rem;
  text-align: center;
}
.boy_header .logo {
  position: absolute;
  display: inline-block;
  left: 40%;
  top: 25%;
  font-size: 22px;
  color: #fff;
}

.boy_header .search {
  position: absolute;
  top: 0;
  right: 0;
}
.boy_header {
  background-image: linear-gradient(#323232, #414141);
}
.cont_img {
  width: 100%;
  height: 5.5rem;
}
.cont_img img {
  width: 80%;
  height: 100%;
  margin-top: 0.2rem;
  margin-left: 0.6rem;
  vertical-align: middle;
}
.name {
  width: 100%;
  height: 1.2rem;
  background: #444444;
  margin-top: 0.3rem;
  font-size: 20px;
  line-height: 1rem;
  padding: 0 0.3rem;
  color: #fff;
  box-sizing: border-box
}
.cont .price {
  font-size: 20px;
  color: red;
  background: #fff;
  height: 1rem;
  padding: 0 0.3rem;
  line-height: 1rem;
}
.cont .price .right{
    float: right;
    font-size: 16px;
    color: #444;
}

.for_img{
    width: 100%;
    height: 5rem;
}
.for_img img{
    width: 100%;
    height: 100%;
    margin-top: 0.2rem;
}
</style>
