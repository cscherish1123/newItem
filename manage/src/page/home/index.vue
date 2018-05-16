<template>

  <div class="home_Page">
      <Header></Header>
      <div class="wrap">
          <div class="wrap_list">
              <ul>
              
                     <li>
                     <div class="list_cont">
                          <h4>课程列表</h4>
                          <p>查询现有的课程,添加课程,管理课程</p>
                           <span class="fa fa-th-large fa-2x"></span>
                     </div>
                  </li>
                     <li>
                     <div class="list_cont">
                          <h4>课程添加</h4>
                          <p>Course Add</p>
                           <span class="fa fa-plus fa-2x"></span>
                     </div>
                  </li>
                    <li>
                     <div class="list_cont">
                          <h4>课程置顶</h4>
                          <p>Course Up</p>
                           <span class="fa fa-arrow-up fa-2x"></span>
                     </div>
                  </li>
                    <li>
                     <div class="list_cont">
                          <h4>视频管理</h4>
                          <p>Video Manage</p>
                           <span class="fa fa-video-camera fa-2x"></span>
                     </div>
                  </li>
                      <li>
                     <div class="list_cont">
                          <h4>用户管理</h4>
                          <p>User Manage</p>
                           <span class="fa fa-user fa-2x"></span>
                     </div>
                  </li>
                      <li>
                     <div class="list_cont">
                          <h4>学生管理</h4>
                          <p>Student Manage</p>
                           <span class="fa fa-file fa-2x"></span>
                     </div>
                  </li>
              </ul>
          </div>
      </div>

      <!-- 模态框 -->
      <div id="cover">
        <div id="cover-bg"></div>
        <div id="cover-content">
            <p class="tit"><span>修改密码</span><i class="fa fa-times-circle cha" ></i></p>
            <div class="from">
                <p>*当前密码：<input type="text" ref="oldpsd"></p>
                <p>&nbsp;&nbsp;&nbsp;*新密码：<input type="text" class="newpsd"></p>
                <p>*确认密码：<input type="text" ref="repeatpsd"></p>
            </div>
            <div class="btn">
                <button style="background:#46C540;margin-right:30px">确定<tton>
                <button>取消<tton>
            </div>
        </div>
     </div>

      <!-- 模态框 -->
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: { Header }
};
</script>

<style>
/* @import url("../../css/common.css");
@import url("../../../static/font-awesome-4.7.0/css/font-awesome.css"); */

.wrap {
  width: 100%;
  height: 100vh;
  background: -moz-linear-gradient(top, #0d2153, #741798); /*火狐*/
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#0d2153),
    to(#741798)
  ); /*谷歌*/
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-start(0, #0d2153),
    color-stop(1, #741798)
  );
}
.wrap_list {
  padding: 50px;
}
.wrap_list ul {
  width: 94%;
  margin: 0 auto;
}

.wrap_list ul li {
  float: left;
  height: 200px;
  width: 160px;
  background: rgba(255, 255, 255, 0.3);
  margin: 0 30px;
}


.wrap_list ul li .list_cont{
    padding: 12px 15px;
}

 .list_cont span{
     width: 50px;
     height: 50px;
     display: block;
     margin: 0 auto;
    
 }
.list_cont p, .list_cont span,.list_cont h4{
 color: #fff;
 text-align: center;
}

.list_cont h4 {
   margin:8px 0;
}
.list_cont p{
    font-size: 13px;
  margin-bottom: 40px;
}

#cover {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 5;
  top: 0px;
  left: 0px;
}
#cover-bg {
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.7;
  -webkit-opacity: 0.7;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
}
#cover-content {
  border: 5px solid #4664ad;
  background: #fff;
  z-index: 8;
  width: 482px;
  height: 304px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -241px;
  margin-top: -152px;
  color: #404044;
  text-align: center;
}
#cover-content .tit {
  width: 100%;
  height: 36px;
  background: #4664ad;
  line-height: 36px;
  color: #fff;
  padding-left: 4px;
  font-weight: bold;
  font-family: "宋体";
}
#cover-content .tit .cha {
  margin-left: 394px;
}
#cover-content .from {
  padding: 36px 0px 0px 0px;
}
#cover-content .from input {
  width: 300px;
  height: 24px;
  border: 1px solid #ded8d9;
  outline: none;
  padding-left: 10px;
  margin-bottom: 20px;
}
#cover-content .btn button {
  width: 80px;
  height: 30px;
  background: #4664ad;
  border: none;
  color: #ffffff;
}



</style>
