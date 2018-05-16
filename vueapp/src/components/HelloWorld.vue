<template>
  <!-- 数据双向绑定 -->
  <!-- <div><input type="text"  v-model="tit"/> -->
  <!-- {{tit}} -->
  <!-- </div> -->

  <!-- 循环  v-for -->
  <!-- <div> -->
      <!-- <div v-for="(item,index) in arr" >{{index}}{{item}}</div> -->
      <!-- <div v-for="item in json">{{item.name}}{{item.age}}{{item.sex}}</div> -->
  <!-- </div> -->


  <!-- v-show  false   -->
  <div>
      <!-- <div style="width:100px;height:100px;background:red" v-show="hide"></div> -->
           <!-- <button v-on:click="show">toggle</button> -->

  <!-- v-if true -->
      <!-- <div style="width:100px;height:100px;background:blue;" v-if="hide"></div> -->
      <!-- <div style="width:100px;height:100px;background:#ccc;" v-else></div> -->

  
  <!-- v-text  原样输出-->
  <div v-text="title"></div>

  <!-- v-html 解析html-->
    <div v-html="title"></div>

 
 <!-- class -->

  <!-- <div style="width:100px;height:30px;border:1px solid #ccc" v-bind:class="{red:index===current}"></div> -->
  <div style="width:100px;height:30px;border:1px solid #ccc" v-bind:class="['red','black']"></div>
  <!-- <div style="width:100px;height:30px;border:1px solid #ccc" :class="hide?'red':'block'"></div> -->


<!-- style -->

<!-- <div :style="win">154</div> -->
<!-- <div :style="{dispaly:true}">154</div> -->

<!-- src -->
    <img v-bind:src="imgSrc" style="width:100px;height:100px;" alt="">

 <!-- href -->
 <a v-bind:href="url">点击</a>

 <!-- 出现闪烁的问题  v-cloak -->
 <div v-cloak>{{msg}}</div>


      
  </div>
</template>
<script>
export default {
  data(){
    return{
          tit:"hello 吴思宇",
          msg:'hello vue',
          arr:['tom','jack','rose'],
      // json:{"name":"tom","age":18,"sex":"男"}
         json:[{"name":"tom","age":18,"sex":"男"},
               {"name":"jack","age":18,"sex":"男"},
               {"name":"rose","age":18,"sex":"女"}
              ],
              hide:false,
              index:1,
              current:1,
              title:"<h1>hello vue</h1>",
              win:{
                  width:window.clientWidth+'px',
                  hieght:window.clientHeight+'px',
                  color:'block',
              },
              imgSrc:'../static/logo.png',
              url:"https://www.baidu.com",
            //   imgSrc:'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=e01d078b087b02080cc938e75ae295ee/9d82d158ccbf6c810e1103c6be3eb13533fa40fd.jpg'
    }
  },
  methods:{
      show(){
          this.hide =!this.hide
      }
  }
}
</script>

<style>
.red{background: red;};
.black{background: black};
</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->

