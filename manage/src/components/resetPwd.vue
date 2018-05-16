<template>
     <div class="reset">
             <div class="boxCont">
                <div class="topT">修改密码 <span @click="Noshow" class="fa  fa-close"></span></div>
                <div class="userInfo">
                    <p> <span>当前密码:</span>   <input ref="oldpass" type="password"></p>
                    <p> <span> 新密码: </span><input ref="newpass" type="password"></p>
                    <p> <span>确定密码:</span> <input ref="newpassT" type="password"></p>
                </div>
                <div class="btn">
                     <div class="ok" @click="sure">确定</div>
                <div class="no" @click="Noshow">取消</div>
                </div>              
             </div>
     </div>
</template>
<script>
import  Axios from "axios";
import crypto from 'crypto'
// import  VM  from "../components/bus"
export default {
      data(){
          return{
              hide:false
          }
      },
       methods:{
           Noshow(){
               this.$emit("hide",this.hide);
           },
            sure(){
                var new1=this.$refs.newpass.value;
                var new2=this.$refs.newpassT.value;
                var oldpwd = this.$refs.oldpass.value;
                var md5 = crypto.createHash("md5").update(oldpwd).digest('base64')
                console.log(md5)
                var dbpwd = sessionStorage.getItem("pass")
                console.log(dbpwd)
                   //判断数据库中的密码跟用户输入的密码是否一样 
                if(md5===dbpwd){
                    // 判断两次输入的密码是否一致
                    if(new1===new2){
                           Axios({
                    url:"api/Handler/AdminRegHandler?action=updatepass",
                    method:"post",
                    data:{
                       password:oldpwd,
                       newpass:new1
                    }
                }).then(res=>{
                    if(res.data.successs){
                        console.log(1)
                        alert('修改成功')
                        this.$router.push('/')
                    }
                })
                    }else{
                        alert("两次密码输入不一致")
                    }
                }else{
                    alert("您输入的密码跟原密码不一致")
                }
             
            }
       },
       monted(){
           VM.$on("getPass",res=>{
               console.log(res)
           })
       }
}
</script>

<style>
@import url("../css/common.css");
@import url("../../static/font-awesome-4.7.0/css/font-awesome.css");
.reset {
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.reset .boxCont {
  width: 500px;
  height: 300px;
  background: white;
  margin: 150px auto;
  border: 6px solid #4664ad;
}
.reset .boxCont .topT {
  height: 50px;
  width: 100%;
  background: #4664ad;
  color: white;
  line-height: 46px;
}
.reset .boxCont .topT span {
  float: right;
  line-height: 45px;
  margin-right: 10px;
}
.reset .userInfo {
  width: 270px;
  margin: 50px auto 0;
}
.reset .boxCont .userInfo p {
  width: 270px;
  height: 30px;
  /* background: #000; */
}
.reset .boxCont .userInfo p input {
  float: right;
  margin-left: 20px;
}
.reset .boxCont .btn {
  width: 300px;
  margin: 20px auto;
  background: yellow;
}
.reset .boxCont .btn div {
  width: 80px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
}
.reset .boxCont .btn .ok {
  background: #46c540;
  float: left;
}
.reset .boxCont .btn .no {
  background: #4664ad;
  float: right;
}
</style>