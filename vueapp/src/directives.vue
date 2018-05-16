//自定义指令
<template>
  <div>
    
    <!-- <div v-red style="width:100px;height:100px;border:1px solid black"></div> -->
    <div v-pic='item' v-for="item in arr" style="width:100%;height:200px;">
    </div>

  </div>
</template>

<script>
import Vue from "vue"
    // Vue.directive("red",function(el){
    //   console.log(arguments)
    //   console.log(el)
    //   el.style.background='#f00'
    // })


Vue.directive("pic",{
  //钩子函数   bind()==>只调用一次，当绑定元素时使用
    //        upbind()==>解绑时调 用
    //        inserted()==>数据插入时调用   
    //        update()==>数据更新时调用     
    //        componentUpdated() ==>组件更新时调用

    bind(){
      console.log("bind")
    },
    inserted(el,bg){
      var color =Math.floor(Math.random()*99999+100000) 
      console.log(arguments)
      // 创建图片对象
      var img = new Image();  //new img 产生 img标签
      el.style.background="#"+ color;
      img.src = bg.value;
      img.onload = function(){
      el.style.background = 'url('+ img.src +')'
      

      }
    },
    update(){
      console.log("update")
    },
    componentUpdated(){
      console.log("upcomponentUpdateddate")
    },
    upbind(){
      console.log("upbind")
    }
})

export default {
  name:"directives",
  data(){
      return{
        arr:["http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
            "http://mp0.qiyipic.com/image/20180316/a3/63/ppu_146703870102_pp_601_m1_300_300.jpg",
                        
            ]
      }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

</style>
