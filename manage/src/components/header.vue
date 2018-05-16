<template>
  <div class="headerPage">
      <div class="header">
          <div class="h_left">
              <span><img src="../../static/img/1.png" alt=""></span>
              <div class="tit_Name">
                    <h3>翡翠学院后台</h3>
                    <p>the sysmaster of feicuischool</p>
              </div>
          </div>

          <div class="h_right">
              <ul>
                  <li><span class="fa fa-globe"></span>卓新创思</li>
                  <li><span class="fa fa-comment"></span>在线客服</li>
                  <li><span class="fa fa-book"></span>常见问题</li>
                  <li @click="safe "><span class="fa fa-unlock-alt"></span>安全中心</li>
                  <li><span class="fa fa-sign-out" @click="exit">退出</span></li>
                  <li><span class="info" @click='getInfo'>{{userName}}</span></li>
                 
              </ul>
          </div>
      </div>
      <div class="nav">
          <ul>
              <li> <router-link to="/adminList" style="color:#fff"><span class="fa fa-user"></span>用户管理</router-link></li>
              <li><router-link to="/student" style="color:red"><span class="fa fa-book"></span>课程管理</router-link></li>
              <li><span class="fa fa-tasks"></span>统计报表</li>
              <li><span class="fa fa-folder"></span>其他管理</li>
              <li><span class="fa fa-bookmark"></span>数据字典</li>
              <li><span class="fa fa-gear"></span>系统维护</li>
          </ul>
      </div>
  </div>
</template>


<script>
import Axios from "axios";
export default {
  data() {
    return {
      userName: "",
    };
  },
  mounted() {
      this.getInfo() 
  },
  methods: {
    // 获取用户信息
    getInfo() {
      Axios({
        url: "api/Handler/AdminLoginHandler?action=returninfo",
        method: "get"
      }).then(res => {
        // console.log(res.data);
        this.userName = res.data.data.userName,
        sessionStorage.setItem('pass',res.data.data.password)
      });
    },
      //退出
    exit() {
      Axios({
        url: "api/Handler/AdminLoginHandler?action=quit",
        method: "get"
      }).then(res => {
        if (res.data.success) {
          alert(res.data.success);
          this.$router.push("/");
        }
      });
    },
    // safe(){
    //     this.$emit("bool",true)
    // }

    safe(){
      this.$emit('giveHome',true)
    }
  }
};
</script>


<style>
@import url("../css/common.css");
@import url("../../static/font-awesome-4.7.0/css/font-awesome.css");
.headerPage .header {
  height: 45px;
  padding: 0 15px;
  background: #262626;
}
.headerPage .header .h_left {
  float: left;
}
.headerPage .h_left span {
  display: inline-block;
  height: 35px;
  width: 35px;
  padding: 4.5px 5px;
}
.headerPage .h_left img {
  width: 100%;
  height: 100%;
  border-radius: 9px;
}
.headerPage .tit_Name {
  display: inline-block;
}

.headerPage .tit_Name h3 {
  font-size: 16px;
  color: #fff;
  letter-spacing: 2px;
}
.headerPage .tit_Name p {
  font-size: 12px;
  color: #fff;
}

.headerPage .h_right {
  float: right;
}
.h_right ul {
  width: 100%;
}

.headerPage .h_right ul li {
  float: left;
  font-size: 12px;
  line-height: 40px;
  color: #9f9b95;
  margin-right: 30px;
}
.headerPage .h_right ul li span,
.nav ul li span {
  display: inline-block;
  margin-right: 5px;
}
.headerPage .nav {
  width: 100%;
  height: 45px;
  background: #1f3662;
}

.headerPage .nav ul li {
  float: left;
  color: #fff;
  line-height: 45px;
  font-size: 12px;
  padding-right: 50px;
}
.info {
  background: #fff;
  display: block;
  height: 40px;
  width: 100px;
  color: black;
  text-align: center;
  line-height: 40px;
}
</style>
