<template>
 

      <div class="wrap">
        <!-- topbar -->
          <div class="topbar">
            <div class="city_picker">
              北京
              <span class="fa fa-angle-down"></span>
            </div>

            <div class="top_main">
              <span class="search fa fa-search"></span>
              <input type="text" placeholder="搜索明星,演出,场馆">
            </div>

          <div class="my">
            <span class="user fa fa-user-circle-o "></span>
          </div>
          </div>    
         <!-- topbar -->
         <!-- home entry -->
              <div class="home_entry">
                <ul>
                     <li v-for="item in arrList">
                     <img :src="item.img" alt="">
                     <p class="text">{{item.name}}</p>
                    </li>
                </ul>                   
              </div>
           <!-- home entry -->

           <!-- home banner -->
           <div class="banner">
             <mt-swipe :auto="4000">
               <mt-swipe-item> <img src="https://img.piaoniu.com/banner/c78700bd4fcde5954c667dc27b337d2cb8c25722.jpg?imageView2/2/w/750/h/350/format/jpg/q/80" alt=""></mt-swipe-item>
               <mt-swipe-item><img src="https://img.piaoniu.com/banner/d2544ab71122387c60ba58e2a2c7952cffce6b27.jpg?imageView2/2/w/750/h/350/format/jpg/q/80" alt=""></mt-swipe-item>
               <mt-swipe-item><img src="https://img.piaoniu.com/banner/2c23c874124748790d520b7f53d1acc3b98ed278.jpg?imageView2/2/w/750/h/350/format/jpg/q/80" alt=""></mt-swipe-item>
               <mt-swipe-item><img src="https://img.piaoniu.com/banner/e8cac1bed5762f8e738eeea0d2c588be888d0604.jpg?imageView2/2/w/750/h/350/format/jpg/q/80" alt=""></mt-swipe-item>
               <mt-swipe-item><img src="https://img.piaoniu.com/banner/cb9a4e15b243896b5924549703533ee78678f725.jpg?imageView2/2/w/750/h/350/format/jpg/q/80" alt=""></mt-swipe-item>
            </mt-swipe>
           </div>
           <!-- home banner -->

           <!-- home op -->
            <div class="home_op">
                <div class="left">
                     <div class="top">
                         <p class="p1">秒杀9元</p>
                         <p class="p2">飞跃疯人院</p>
                         <p class="p3">即将开始</p>
                     </div>
                     <div class="bottom">
                          <img src="https://img.piaoniu.com/banner/0b8a3e4c024e87033ee1b44c86a3a98cfcfc3802.jpg?imageView2/2/w/400/h/180/format/jpg/q/80" alt="">
                     </div>
                </div>
                <div class="right" >
                      <div class="top" style="margin-right: 0">
                         <p class="p1">免费·观演</p>
                         <p class="p2">林俊杰演唱会</p>
                         <p class="p3">行走的CD</p>
                         <img src="https://img.piaoniu.com/banner/43d3bc4c2eff58aa3e23379b48120cf6ccb678e4.jpg?imageView2/2/w/200/h/200/format/jpg/q/80" alt="">
                      </div>
                      <div class="bottom">
                         <p class="p1">名人专区</p>
                         <p class="p2">孟京辉</p>
                         <p class="p3">先锋喜剧</p>
                        <img src="https://img.piaoniu.com/banner/ea03877ddea386d7816ad4470421871c3574f990.jpg?imageView2/2/w/200/h/200/format/jpg/q/80" alt="">
                      </div>
                </div>
            </div>
           <!-- home op -->



      </div>
 
 
</template>

<script>
import Vue from 'vue'
import { CellSwipe } from 'mint-ui';
Vue.component(CellSwipe.name, CellSwipe);
export default {
  data() {
    return {
      arrList: [
        {
          img: "https://img.piaoniu.com/icon/home/ych@3x.png",
          name: "演唱会"
        },
        {
          img: "https://img.piaoniu.com/icon/home/hjgj@3x.png",
          name: "话剧歌剧"
        },
        {
          img: "https://img.piaoniu.com/icon/home/xxzl@3x.png",
          name: "休闲展览"
        },
        {
          img: "https://img.piaoniu.com/icon/home/ych@3x.png",
          name: "体育赛事"
        },
        {
          img: "https://img.piaoniu.com/icon/home/yyh@3x.png",
          name: "音乐会"
        },
        {
          img: "https://img.piaoniu.com/icon/home/ych@3x.png",
          name: "演唱会"
        },
             {
          img: "https://img.piaoniu.com/icon/home/xxzl@3x.png",
          name: "休闲展览"
        },
         {
          img: "https://img.piaoniu.com/icon/home/ych@3x.png",
          name: "体育赛事"
        }
      ]
    };
  }
};
</script>

<style>
@import url("../css/home.css");
</style>
