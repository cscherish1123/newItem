<template>
  <div>
      <!-- <router-link to ="/frist" tag="li">首页</router-link> -->
      <router-link to ="/frist">首页</router-link>
      <router-link to ="/new">新闻</router-link>
      <router-link to ="/chat">资讯</router-link>
  </div>
</template>

<script>
export default {
    data(){
      return{
        id:""
      }
    },
   beforeRouteEnter(to,from,next){
     console.log(arguments)
     next()
   },
   beforeRouterUpdate(to,from,next){

   },beforeRouterLeave(to,from,next){

   }
}
</script>


