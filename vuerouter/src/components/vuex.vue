<template>
  <!-- <div>{{this.$store.state.num}}</div> -->


  <div>
      <!-- 在index js 中通过 mutations 操作 -->
      <!-- <button @click="$store.commit('reduce')">-</button> -->
      <!-- {{num}} -->
       <!-- <button @click="$store.commit('add')">+</button> -->



    <!-- 解构赋值 -->
      <!-- <button @click="reduce(20)">-</button>
      {{num}}
       <button @click="add(20)">+</button> -->

        <!-- getters -->
         <button @click="reduceAction">-</button>
         {{num}}
        <button @click="addAction">+</button>


  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters, mapActions} from "vuex"
export default {
//   computed:mapGetters(["num"]  //计算属性
    //   num(){
    //       return this.$store.state.num
    //   }
//   ),
computed:{
    ...mapGetters(["num"])
}
,
// add(20)
//   methods:mapMutations(["add","reduce"])
// 
methods:mapActions(["addAction","reduceAction"])
    

}
</script>

<style>

</style>
