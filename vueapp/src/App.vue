<template>
  <div id="app">
    <!-- 普通事件 -->
      
      <!-- <button @click="click">click</button>
      <button @mouseover="mouseover">mouseover</button>
      <button @mouseout="mouseout">mouseout</button>
      <button @mouseenter="mouseenter">mouseenter</button>
      <button @mouseleave="mouseleave">mouseleave</button>
      <button @mousedown="mousedown">mousedown</button>
      <button @mouseup="mouseup">mouseup</button> -->

    <!-- 事件修饰符 -->
    <!-- <div @click="grandpa()" style="width:250px;height:250px;background:red"> -->
        <!-- <div @click="parent()" style="width:150px;height:150px;background:pink" > -->
          <!-- <div @click.stop="child()" style="width:80px;height:80px;background:yellow"></div> -->
          <!-- <div @click="child()" style="width:80px;height:80px;background:yellow"></div> -->
        <!-- </div> -->
    <!-- </div> -->


    <!-- 默认事件 -->
    <!-- contextmenu 鼠标右击事件 -->
    <button @contextmenu.prevent="prenevt">默认事件</button>
    <button @click.once="prenevt">只允许点击一次show</button>

    <!-- 按键修饰符 -->
    <!-- <button @keydown.enter="keydown">enter按下</button> -->
    <!-- <button @keydown.space="keydown">space</button> -->
    <!-- <button @keydown.left="keydown">left</button> -->

    <button @keydown.13='keydown'>enter</button>


    
  </div>
</template>

<script>
export default {
  name: 'App',
   data(){

      return{

      }
  },
  methods:{
      click(){
        console.log('click');
      },
      mouseover(){
       console.log('mouseover');
  },
  mouseout(){
       console.log('mouseout');

  },
  mouseenter(){
     console.log('mouseenter');
  },
  mouseleave(){
       console.log('mouseleave');
  },
  mousedown(){
       console.log('mousedown');
  },
    mouseup(){
         console.log('mouseup');
    },
    grandpa(){
      alert(1)
    },
    parent(){
      alert(2)
    },
    child(ev){
      // 阻止事件冒泡
      var ev = ev||event;
      // ev.stopPropagation()
      ev.cancelBubble=true;
      alert(3)
    },
     prenevt(){
    alert(1)
  },
  keydown(ev){
    if(ev.keyCode==13){
      alert(1)
    }
 
  }





  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
