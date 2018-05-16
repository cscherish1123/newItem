<template>
  <div>
           <button @click="run">点击</button>
    <transition name="fade" @before-enter="beforeenter"  @enter="enter" @after-enter="afterenter">
        <div v-show="hidebox" class="fade" style="width:100px;height:100px;background:red;"></div>
    </transition>
 
  </div>
</template>
<script>
// 直接在css中定义   二:通过应用其他动画库  三:通过动画钩子去定义
export default {
  name:"translation",
  data(){
      return{
        hidebox:false
      }
  },
  methods:{
      run(){
        this.hidebox = !this.hidebox;
      },
      beforeenter(el){
          console.log(arguments)
          el.style.marginLeft=300+'px'
      },
      enter(el){
        //   console.log(arguments)
        el.offsetLeft //代表的是一个过程，没有实际意义
        el.style.marginLeft=0+'px'
      },
      afterenter(){
          
      }
  }
}
</script>

<style>
.fade{
    transition: all 0.3s;
}


/* .fade-enter,.fade-leave-to{
    transform: translateX(300px);
   transition: all 3s;
}
.fade-leave,.fade-enter-to{
    padding-left: 200px;
} */

</style>

