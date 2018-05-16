<template>
   <div class="loginPage"> 
          <div class="userInfo">
              <div> <img src="../../static/img/1.png" alt=""><h1>翡翠学院后台</h1>
                     <p class="logo_tit">the sysmaster of feicuischool</p>
                </div>
                 <ul>
                     <li>
                         <div class="border_R">
                          <span class="fa  fa-lg fa-user"></span>
                         </div>
                         <input type="text" placeholder="用户名" ref="name">
                    </li>
                     <li>
                         <div class="border_R">
                          <span class="fa  fa-lg fa-lock"></span>
                         </div>
                         <input type="password" placeholder="密码" ref="pwd"></li>
                     <li>
                         <div class="border_R">
                          <span class="fa  fa-lg fa-lock"></span>
                         </div>
                         <input type="text" placeholder="验证码" class="Code" ref="code">
                         </li><div class="code"><VueCode></VueCode></div>
                 </ul>
                 <div class="btn">
                    <div class="login" @click="login">登录</div>
                     <div class="login" @click="reg">注册</div>
                     <div class="forget">忘记密码?</div>
                 </div>
          </div>
   </div>
</template>

<script>
import VueCode from "./code";
import Axios from "axios";
export default {
  components: { VueCode },
  methods: {
    reg(){
      Axios({
        url: "api/Handler/AdminLoginHandler?action=checkveri",
        method: "get",
        params: {
          veri: this.$refs.code.value
        }
      }).then(res => {
        if (res.data.success) {
         this.nextReg();
        }
      });

    },

     nextReg(){
      Axios({
        url:"api/Handler/AdminRegHandler?action=add",
        method:'post',
        data:{
          userName:this.$refs.name.value,
          password :this.$refs.pwd.value
        }
      }).then(res=>{
        console.log(res)
        alert("注册成功")
      })
    },

    login() {
      Axios({
        url: "api/Handler/AdminLoginHandler?action=checkveri",
        method: "get",
        params: {
          veri: this.$refs.code.value
        }
      }).then(res => {
        if (res.data.success=="校验成功") {
        
          this.nextLogin()
          // console.log(1)
        }else{
          alert("您的验证码输入有误")
        }
      });
    },
    
    nextLogin(){
      Axios({
        url:"api/Handler/AdminRegHandler?action=login",
        method:'post',
        data:{
          userName:this.$refs.name.value,
          password:this.$refs.pwd.value
        }
      }).then(res=>{
        if(res.data.success){
          this.$router.push("home")
          // window.location.href="home"
        }
      })
    },
    
  }
};
</script>


<style>
.loginPage {
  background: #0c1a4e;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.loginPage .userInfo {
  width: 450px;
  height: 400px;
  background: #0c1a4e;
  margin: 100px auto;
  position: relative;
}
.loginPage h1 {
  text-align: center;
  padding-top: 50px;
  font-weight: 300;
  letter-spacing: 2px;
  color: white;
  font-size: 28px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.loginPage ul li {
  width: 85%;
  height: 30px;
  border: 1px solid white;
  margin: 30px 0;
  margin-left: 30px;
}
.loginPage ul li .border_R {
  float: left;
  height: 100%;
  width: 30px;
  text-align: center;
  line-height: 30px;
  border-right: 1px solid white;
  font-size: 13px;
}
.loginPage input {
  float: left;
  height: 85%;
  width: 70%;
  margin-left: 10px;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  color: white;
}
.loginPage span {
  color: white;
}
.loginPage ul li:nth-child(3) {
  width: 50%;
}
.loginPage .code {
  /* width: 100px; */
  /* height: 40px; */
  /* background: white; */
  float: right;
  position: absolute;
  right: 70px;
  bottom: 120px;
}
.loginPage .btn {
  width: 100%;
  height: 50px;
}
.loginPage .forget,
.loginPage .login {
  width: 100px;
  height: 35px;
  background: #1aafcd;
  float: left;
  font-size: 18px;
  text-align: center;
  font-weight: 200;
  line-height: 35px;
  color: white;
}
.loginPage .forget {
  margin-left: 27px;
}

.loginPage .login {
  background: #20bb5c;
  float: right;
  margin-right: 30px;
}
.loginPage img {
  position: absolute;
  top: 55px;
  left: 76px;
}
.loginPage .logo_tit {
  color: white;
  position: absolute;
  left: 128px;
  top: 80px;
}
</style>