<template>

  <div class="home_Page">
      <Header @giveHome="autoHide"></Header>
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
      <resetPwd @hide="noshow" v-if="isShow"></resetPwd>
      <div class="photo">
        <Echarts></Echarts>
      </div>
  </div>
</template>

<script>
import Header from "../components/header";
import resetPwd from "../components/resetPwd";
import Echarts from "../components/Echarts";
export default {
  components: { Header, resetPwd, Echarts },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    autoHide(res) {
      this.isShow = res;
    },
    noshow(res) {
      this.isShow = res;
    }
  },
  mounted: {}
};
</script>

<style>
/* @import url("../../css/common.css");
@import url("../../../static/font-awesome-4.7.0/css/font-awesome.css"); */

.wrap {
  width: 100%;
  height: 400px;
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
.wrap_list ul li:hover {
}

.wrap_list ul li .list_cont {
  padding: 12px 15px;
}

.list_cont span {
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
}
.list_cont p,
.list_cont span,
.list_cont h4 {
  color: #fff;
  text-align: center;
}

.list_cont h4 {
  margin: 8px 0;
}
.list_cont p {
  font-size: 13px;
  margin-bottom: 40px;
}


</style>
