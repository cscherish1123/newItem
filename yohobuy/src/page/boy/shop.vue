<template>
  <div>
        <div class="boy_header">
       <span class="btn fa fa-bars fa-lg"></span>
       <p class="cart">逛</p>
       <span class="search fa fa-search"></span>
     </div>
    <!--  -->
    <ul>
      <li v-for="item in arr">
      <img :src="item.src" alt="">
        <p class="tuijian">{{item.intro}}</p>
      </li>
    </ul>
      <Fixed></Fixed>
  </div>
</template>


<script>
import Fixed from '../../components/fixed.vue';
import Axios from 'axios';
export default {
  components: { Fixed },
  data(){
    return{
      arr:[]
    }
  },
  mounted(){
    Axios.get('../../../static/more.json').then(res=>{
      console.log(res.data.list)
      this.arr = res.data.list
    })
}

}

</script>

<style>
@import url("../../css/comm.css");
.boy_header {
  background-image: linear-gradient(#323232, #414141);
}
.cart{
  font-size: 25px;
  text-align: center;
  margin: 0 auto;
  color: white;
  line-height: 0.9rem;
}

.tuijian{
  font-size: 15px;
}

</style>
