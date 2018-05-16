<template>
  <div>
    <!-- 头部 -->
    <header>
      <div class="logo"></div>
      <div class="search">
        <a href="" class="cancel" v-show="hide" @before-enter="beforeenter">取消</a>
      
        <input type="text"  @click="moveLeft"  placeholder="搜索" class="move" >
        
  
      </div>
    </header>

    <!-- 内容 -->
    <div class="main">
      <img src="https://img11.static.yhbimg.com/yhb-img01/2018/04/24/16/01cffbd9267b45cf4016c60afbab123a6b.jpg?imageView2/2/w/640/h/800/q/90" alt="背景图片">
      <!-- 中间内容 -->
      <div class="main_list">
        <router-link to="/boy" class="jump">
          <div class="list_item">
         男生
         <span>BOYS</span>
       <span class="fa fa-chevron-right"></span>
       </div>
        </router-link>
     
           <router-link to="/gril" class="jump">
        <div class="list_item">
         女生
         <span>GRILS</span>
         <span class="fa fa-chevron-right"></span>
       </div>
           </router-link>
             <router-link to="/kids" class="jump">
        <div class="list_item">
         潮童
         <span>KIDS</span>
         <span class="fa fa-chevron-right"></span>
       </div>
           </router-link>
             <router-link to="/life" class="jump">
        <div class="list_item">
         创意生活
         <span>LIFTSTYLE</span>
          <span class="fa fa-chevron-right"></span>
       </div>
    </router-link>
      </div>
    </div>
    <!-- footer -->
    <footer>
      <div class="footer_box">
        <div class="login"><router-link to="/register">注册</router-link> &nbsp;|</div>
        <div class="register"><router-link to="/login">登录</router-link></div>
      </div>

      <div class="back">返回顶部
        <span class="fa fa-chevron-up"></span>
      </div>
      <div class="copyright">
        CopyRight©2007-2018 南京新与力文化传播有限公司
    </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: false
    };
  },
  methods: {
    moveLeft() {
      this.hide = !this.hidebox;
    },
    beforeenter(el) {
      console.log(arguments);
      el.style.marginLeft = 300 + "px";
      console.log(1);
    }
  }
};
</script>

<style>
/* 头部 */
header {
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  height: 0.96rem;
  padding: 0 0.1rem;
  overflow: hidden;
}
header .logo {
  height: 0.96rem;
  width: 48%;
  background: url("https://cdn.yoho.cn/yohobuywap-node/6.5.51/img/channel/yohologo.png?16300c4efce") 0 no-repeat;
  background-size: 100% 65%;
  opacity: 1;
  float: left;
}
header .search {
  float: right;
  width: 52%;
  height: 0.96rem;
  /* background: red; */
  position: relative;
}

header .search input {
  position: absolute;
  top: 0.25rem;
  left: 0.1rem;
  height: 0.5rem;
  width: 93%;
  font-size: 18px;
  border: 1px solid #ccc;
  outline: none;
  text-indent: 0.5em;
}
header .cancel {
  /* display: none; */
  float: left;
  font-size: 17px;
  color: #999;
  line-height: 0.96rem;
}

/* 内容 */
.main {
  position: relative;
  width: 100%;
  min-height: 7.36px;
  background: #000;
  color: #fff;
  text-align: center;
}
.main img {
  width: 100%;
  display: block;
  margin: 0 auto;
}
.main .main_list {
  height: 4rem;
  width: 100%;
  top: 50%;
  position: absolute;
  margin-top: -3rem;
  /* background: red; */
}
.main_list .list_item {
  position: relative;
  display: block;
  margin: 0 auto 0.4rem;
  border: 2px solid #fff;
  background-color: #000000;
  text-align: center;
  /* font-weight: 700; */
  font-size: 22px;
  width: 4rem;
  height: 1rem;
  line-height: 1rem;
}

footer {
  height: 1.4rem;
  width: 100%;
  background: #fff;
}

.footer_box,
.footer_box .login,
.footer_box .register,
.back {
  font-size: 15px;
  float: left;
  line-height: 0.6rem;
  padding: 0 0.2rem;
}

.back,
.copyright {
  float: right;
}

.jump {
  background: #eee;
  color: #fff !important;
  transition: all 0.3s ease-in;
}

.copyright {
  width: 100%;
  font-size: 15px;
  height: 0.8rem;
  line-height: 0.8rem;

  box-sizing: border-box;
  text-align: center;
}
</style>
