<template>
  <div>
      <div class="box" v-for="item,index in list">
          <div class="tit" @click="down(index)">{{item.tit}}</div>
          <ul class="cont" v-show="item.hide">
              <li  v-for="option in item.cont">{{option}}</li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name:"xiala",
  data(){
      return{
          list:[{
              tit:"---  我的好友",
              cont:["cs","wsy","zyz"],
              hide:false
          },{
              tit:"---  我的好友",
              cont:["cs","wsy","zyz"],
               hide:false
          },{
              tit:"---  我的好友",
              cont:["cs","wsy","zyz"],
               hide:false
          }],
         
      }

  },methods:{
      down(index){
          console.log(1)
          this.list[index].hide = !this.list[index].hide;
      }
  }
}
</script>

<style>
ul,li, ol{
    list-style: none;
}
.box{
    width: 200px;
}

</style>

