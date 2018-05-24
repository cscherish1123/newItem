<template>
<div id="grad">
  <div class="tit">
    <h1>贵阳国家级大数据安全靶场</h1>
    <div class="login">
      <input type="text" placeholder="请输入账户">
      <input type="password" placeholder="请输入密码">
      <button @click="btn"> 登录</button>
    </div>

  </div>

</div>

</template>

<script>
export  default {
  name:"home",
  data(){
   return{
   }
  },
  methods:{
    btn(){
      $axios({
        url:"",
        method:"",

      }).then(res=>{

      })
    }
  }
}
</script>

<style lang="less" scoped>

  body,html{
    height: 100vh;
    width: 100%;
     }

  #grad{
    height: 100vh;
    width: 100%;
    background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#b8c4cb), to(#f6f6f8));/*谷歌*/
  }

  .tit h1{
    color: #fff;
    line-height: 480px;
    text-align: center;
  }
  .login{
  position: absolute;
    left: 35%;
    top: 40%;
   text-align: center;
  input {
    border: 0;
    background: #fff;
    width: 190px;
    height: 30px;
    text-indent: 2em;
    outline: none;
  }
    button {
      border: 0;
      width: 50px;
      background: blue;
      color: #fff;
      height: 30px;
    }
  }


</style>
