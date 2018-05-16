<template>
  <div id="app">
      <ul>
          <li v-for="(item,index) in tab" @click="change(index)" v-bind:class="index==nowbl?'red':''">{{item}}</li>
          
      </ul>
    <div  class="cont">
        <div v-for="(item,index) in tabCont" v-show="index==nowbl">{{item}}</div>
    </div>
   
        
       

  </div>
   
</template>

<script>
export default {
  name:"Tab",
  data(){
      return{
          tab:["标题一","标题二","标题三"],
          tabCont:["内容一","内容二","内容三"],
          nowbl:0,
        
        } 
  },
  methods:{
      change(index){
        //   绑定索引
          this.nowbl=index
          console.log(this.nowbl)
      }
  }
}
</script>

<style>
#app{
    height: 500px;
    width: 800px;
    margin: 0 auto;
    border: 1px solid black;
    overflow: hidden;
}

ul,li{
    list-style: none;
}
ul{
    width:800px;
    margin: 0 auto;
}
ul>li{
    float: left;
    width: 30%;
    height: 35px;
    background: red;
    color: black;
    text-align: center;
    box-sizing: border-box
}

#app .cont{
    float: left;
    padding: 0 40px;
}
.red{
    color: white;
    background: blueviolet;
}


</style>

