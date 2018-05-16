<template>
  <div>
      <div class="reg">
          <div class="reg_tit"><span @click="back" class="fa fa-chevron-circle-left"></span>登录</div>
            <div class="reg_cont">
                <ul>
                    <li><span class="fa fa-lg fa-user"></span><input type="text" ref="name" placeholder="用户名"></li>
                    <li><span class="fa fa-lg fa-lock"></span><input type="password" ref="pwd" placeholder="密码"></li>
                    <li><span class="fa fa-lg fa-unlock-alt"></span><input type="text" ref="code" placeholder="验证码"><div class="code">{{code}}</div></li>
                </ul>

                <button class="reg_suc" @click="checkveri">登录</button>
            </div>
     
     
      </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      code: ""
    };
  },
  // body:document.body.style.background="#fff"
  methods: {
    back() {
      this.$router.push("/");
    },

    veri() {
      Axios({
        url: "api/Handler/AdminLoginHandler?action=veri",
        method: "get"
      }).then(res => {
        console.log(res.data.data);
        this.code = res.data.data;
      });
    },

    checkveri() {
      Axios({
        url: "api/Handler/AdminLoginHandler?action=checkveri",
        method: "get",
        params: {
          veri: this.$refs.code.value
        }
      }).then(res => {
        if (res.data.success == "校验成功") {
          this.login();
        } else {
          alert("您输入的验证码有误");
        }
      });
    },

    login() {
      Axios({
        url: "api/Handler/AdminRegHandler?action=login",
        method: "post",
        data: {
          userName: this.$refs.name.value,
          password: this.$refs.pwd.value
        }
      }).then(res => {
        if (res.data.success == "登录成功") {
          this.$router.push("/boy");
        }else{
          alert("用户不存在")
        }
      });
    }
  },
  mounted() {
    this.veri();
  }
};
</script>

<style>
body,
html {
  background: #fff !important;
}
.reg {
  padding: 0.3rem 0.4rem;
}
.reg .reg_tit {
  width: 100%;
  height: 1rem;
  font-size: 20px;
  text-align: center;
  line-height: 1rem;
  position: relative;
  color: #444;
}
.reg .reg_tit span {
  position: absolute;
  left: 0;
  top: 0.35rem;
  color: #444;
}
.reg_cont {
  width: 100%;
}
.reg_cont ul li {
  width: 100%;
  height: 0.8rem;
  border: 1px solid lightgray;
  margin: 30px 0;
  position: relative;
}

.reg_cont ul li .code {
  position: absolute;
  right: 0;
  border: 1px solid lightgray;
  width: 1.5rem;
  height: 0.8rem;
  font-size: 16px;
  text-align: center;
  line-height: 0.8rem;
  letter-spacing: 0.1rem;
}

.reg_cont ul li span {
  position: absolute;
  color: #444;
  top: 0.25rem;
  left: 0.2rem;
  font-size: 30px;
}

.reg_cont ul li input {
  position: absolute;
  border: 0;
  top: 0.3rem;
  left: 0.8rem;
  outline: none;
}
.reg .reg_suc {
  width: 100%;
  height: 0.8rem;
  background: #b0b0b0;
  font-size: 20px;
  text-align: center;
  line-height: 0.8rem;
  border: 0;
}
</style>
