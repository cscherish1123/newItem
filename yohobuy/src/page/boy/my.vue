<template>
<div>
  <div class="info">
    <div class="info_center">
      <span class="fa fa-angle-left left"></span>
      个人中心
      <span class="fa fa-list-ul right"></span>
    </div>

    <!-- 内容 -->
    <div class="info_cont">
       <div class="btn_log">
         <button class="btn">登录/注册</button>
       </div>

      <div class="list_item">
        <p class="p_left">默认购物频道</p>
        <p class="p_right">男士MEN <span></span></p>
      </div>

      <!-- 我的订单 -->
          <div class="list_item">
        <p class="p_left">我的订单</p>
        <p class="p_right">全部订单<span></span></p>
      </div>

       <ul class="state">
            <li><span class="fa fa-vcard"></span>待付款</li>
            <li><span class="fa fa-vcard"></span>待发货</li>
            <li><span class="fa fa-vcard"></span>待收货</li>
        </ul>
         <ul class="state state2">
              <li><a>0</a>商品收藏</li>
            <li><a>0</a>品牌收藏</li>
            <li><a>0</a>浏览记录</li>
        </ul>

        <!-- banner  -->
        <div class="banner_list">
          <img src="//img11.static.yhbimg.com/yhb-img01/2017/12/18/17/015ca6b18d8571b763e583a288646f737c.jpg?imageView2/3/w/640/h/200/q/60" alt="">
        </div>
    </div>
    <!-- 内容 -->
  </div>
</div>
</template>

<script>
</script>

<style>
.info {
  width: 100%;
  height: 100%;
}
.info_center {
  height: 1rem;
  font-size: 25px;
  color: #fff;
  line-height: 1rem;
  position: relative;
  text-align: center;
  background: #3a3a3a;
}

.info_center span {
  padding: 0 0.4rem;
  font-size: 30px;
  color: #fff;
}
.info_center .left {
  position: absolute;
  top: 0.25rem;
  left: 0;
}

.info_center .right {
  position: absolute;
  top: 0.25rem;
  right: 0;
}
.info .info_cont {
  width: 100%;
  height: 1.8rem;
  background: url("https://cdn.yoho.cn/yohobuywap-node/6.5.41/img/home/index/header-bg.jpg?162f1b4127e");
  background-size: cover;
}
.info .info_cont .btn {
  border: 1.5px solid #fff;
  background: transparent;
  width: 2.2rem;
  height: 0.6rem;
  margin: 0 2rem;
  font-size: 15px;
  line-height: 0.6rem;
  color: #fff;
  letter-spacing: 0.03rem;
}
.list_item {
  padding: 0 0.4rem;
  font-size: 18px;
  height: 0.6rem;
  line-height: 0.6rem;
  position: relative;
  background: #fff;
  margin: 0.2rem 0 0rem;
}
.list_item p {
  color: #444;
  display: inline-block;
}
.list_item .p_left {
  position: absolute;
  left: 0.4rem;
}
.list_item .p_right {
  position: absolute;
  right: 0.4rem;
}
.state,
.state2 {
  width: 100%;
  overflow: hidden;
  background: #fff;
  padding: 0 0.6rem;
  border-top: 1px solid lightgray;
}
.state li {
  height: 1.5rem;
  line-height: 1rem;
  float: left;
  width: 33%;
  font-size: 18px;
}
.state li span {
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  display: block;
}
.state2 li {
  line-height: 2rem;
  position: relative;
}
.state2 li a {
  position: absolute;
  top: -0.4rem;
  left: 0.5rem;
}

.banner_list{
  width: 100%;
  height: 2.5rem;
  margin-top: 0.2rem;
}
.banner_list img{
  width: 100%;
  height: 100%;
}

</style>
