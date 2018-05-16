<template>
  <div>
    <!-- 固定选项卡 -->
    <div class="fixed">
      <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <a href="">
           首页
         <span class="fa fa-home"></span>
        </a>
    </mt-tab-item>


  <mt-tab-item id="tab2">
    <div @click="cate"> 
    分类
     <span class="fa fa-list-ul"></span>
      </div>
  </mt-tab-item>

  <mt-tab-item id="tab3">
    <div @click="shop">
       逛
    <span class="fa fa-rocket"></span>
    </div>
  
  </mt-tab-item>
  <mt-tab-item id="tab4">
    <div @click="cart">
       购物车
      <span class="fa fa-shopping-cart"></span>
    </div>
  </mt-tab-item>

   <mt-tab-item id="tab5">
     <div @click="my">
    我的
    <span class="fa fa-user"></span>
     </div>

  </mt-tab-item>
</mt-tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";
import Vue from "vue";
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
  data() {
    return { selected: "首页" };
  },
  watch: {
    selected: function(val, oldVal) {}
  },
  methods: {
    cate() {
      this.$router.push("cate");
      // console.log(1);
    },
      shop() {
      this.$router.push("shop");
      // console.log(1);
    },
      cart() {
      this.$router.push("cart");
      // console.log(1);
    },
      my() {
      this.$router.push("my");
      // console.log(1);
    }
    
  }
};
</script>

<style>
.fixed {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
}

.fixed span {
  display: block;
  text-align: center;
  line-height: 0.5rem;
}
</style>
