<template>
<div>
    <!-- 搜索 -->
    <div class="search_box">
        <span class="fa fa-search"></span>
        <input type="text" placeholder="搜索商品">
    </div>
    <!-- 搜索 -->

    <!-- 选项卡 -->
        <div class="tab_list">
            <div class="tab_tit">
              <li v-for="item,index in list" @click="ChangeCont(index)" v-bind:class='index==nowbl'><span>{{item}}</span></li>
            </div>
            <div class="tab_cont">
                <ul>
                    <li v-for="(item,index) in cont">{{item}}</li>
                </ul>
            </div>
        </div>
    <!-- 选项卡 -->



 <Fixed></Fixed>
</div>

<!-- 固定 -->
</template>

<script>
import Fixed from "../../components/fixed.vue";
import Vue from "vue";
export default {
  components: { Fixed },
  data() {
    return {
      selected: "1",
      hide: false,
      nowBl:0,
      list: ["Boys", "Grils", "Kids", "Lifestyle"],
      cont: ['上衣','裤装','鞋靴','包类','服配','数码3c','玩具礼品','美妆/个护','内衣/家居服','运动装备','成人用品','居家生活','厨具餐具']
    };
  },
  methods: {
      ChangeCont(index){
          console.log(1)
          this.nowBl=index
          console.log(this.nowBl)
      }
  }
};
</script>

<style>
.search_box {
  width: 100%;
  height: 1rem;
  /* background: #fff; */
  padding: 0 0.2rem;
  box-sizing: border-box;
  position: relative;
}
.search_box > span {
  color: #999;
  font-size: 12px;
  position: absolute;
  top: 0.29rem;
  z-index: 99;
  left: 0.55rem;
}
.search_box input {
  position: absolute;
  top: 0.1rem;
  left: 0.3rem;
  height: 0.6rem;
  background: #fff;
  width: 90%;
  border-radius: 0.5rem;
  border: 0;
  line-height: 0.6rem;
  text-indent: 3em;
  outline: none;
}

.tab_list {
  width: 100%;
}
.tab_list .tab_tit {
  width: 100%;
  background: #fff;
  padding: 0 0.5rem;
  box-sizing: border-box;
  height: 0.7rem;
}
.tab_list .tab_tit li {
  float: left;
  width: 25%;
  /* background: red; */
  height: 0.7rem;
  box-sizing: border-box;
  position: relative;
}
.tab_list .tab_tit li > span {
  position: absolute;
  top: 0.2rem;
  display: inline-block;
  font-size: 12px;
  padding-right: 0.3rem;
  border-right: 1px solid lightgray;
}
.tab_cont li{
  font-size: 15px;
  line-height: 30px;
}
</style>
