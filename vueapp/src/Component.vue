<template>
  <div>122
       <!-- <custom></custom> -->
       <!-- <cus></cus> -->
  
       <!-- <brother></brother>
       <brother2></brother2>
       <fource></fource>
       <date></date> -->
        <customSecond></customSecond>   
       <custom-third></custom-third>
  </div>
 
</template>

<script>
import Vue from "vue";
  var bus = new Vue();
export default {
   
 name:"con",
 data(){
     return{

     }
 },
 components:{
     "customSecond":{
         template:`<div>我是哥哥
        <button @click="send">走你</button>
         </div>`
         ,data(){
             return{
                 border:"面包给你"
             }
         },methods:{
             send(){
                 bus.$emit("get",this.border)
             }
         }
     },
     "customThird":{
         template: `<div>我是弟弟{{msg}}</div>`
         ,data(){
             return{
                msg:''
             }
          
         },
        mounted(){
            bus.$on("get",val=>{
                this.msg = val
            })
        }

     }
 }
}
</script>
