<template>
    <div>
      <!--头部-->
      <div class="tit">
        <div class="left">贵阳大数据安全靶场</div>
        <ul class="right">
          <li>用户名<span>|</span></li>
          <li>登录时间<span>|</span></li>
          <li>安全退出</li>
        </ul>
      </div>
      <!--头部-->

      <!--主内容-->
        <div class="content">
          <div class="cont_bg"   v-for="item in list">
            <img :src="item.bg" alt="bg"/>
              <p>{{item.name}}</p>
              <img class="dec_img" :src="item.img" alt="img"/>
            </div>

        </div>
      <!--主内容-->

    </div>
</template>

<script>
    export default {
        name: "C_mainbc",
      data(){
          return{
            imgShow:false,
            imgHide:true,
            list:[{
              name:"攻防演练平台",
              bg:"../../../static/h_img/normal1.png",
              img:"../../../static/h_img/img1.png"
            },{
              bg:"../../../static/h_img/normal1.png",
              name:"城市安全态势感知平台",
              img:"../../../static/h_img//img1.png"
            },
              {
                bg:"../../../static/h_img/normal1.png",
                name:"测试与服务平台",
                img:"../../../static/h_img//img4.png"
              },
              {
                bg:"../../../static/h_img/normal1.png",
                name:"实训与创新平台",
                img:"../../../static/h_img//img2.png"
              },
              {
                bg:"../../../static/h_img/normal1.png",
                name:"资源库管理平台",
                img:"../../../static/h_img//img3.png"
              },
              {
                bg:"../../../static/h_img/normal1.png",
                name:"靶场支撑平台",
                img:"../../../static/h_img//img5.png"
              },

              ]
          }
      },
    }
</script>

<style lang="less" scoped>
  html,body{
    height: 100vh;
  }
  .tit{
    width: 100%;
    height: 108px;
    background: linear-gradient(top, #d5d3d5, #e7e4e6);
    .left{
      float: left;
      padding-left: 23px;
      line-height: 108px;
      font-size: 39px;
      font-weight: 600;
    }
      .right{
        height: 55px;
        float: right;
        width: 600px ;
        background: #F8F7FA;
        border-radius: 5px;
        margin: 28px 60px;
        li{
          float: left;
          line-height: 55px;
          padding-left: 70px;
          color: #3B436D;
          span{
            margin-left: 40px;
            color: #D7D5DC;
          }
        }
    }
  }
  .content {
    background: url("../../static/h_img/bg.png");
    width: 100%;
    height: 820px;
    .cont_bg {
      margin: 30px 70px;
      float: left;
      width: 360px;
      height: 360px;
      position: relative;
    }
    p{
      position: absolute;
      left: 30%;
      top: 50%;
      text-align: center;
    }
    .dec_img{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

</style>
