<template>
  <div>
      <Header></Header>
      <!-- 面包屑 brand-->
      <div class="box">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          <el-breadcrumb-item>学员管理</el-breadcrumb-item>
      </el-breadcrumb>
      <div id="inp">
        <el-input class="inp_cont" placeholder="请输入内容" v-model="text"></el-input>
         <el-button type="success" @click="find">查询 </el-button>
         <el-button type="primary" class="add" @click="add">添加</el-button>
      </div>

      <div class="AdminList">
 
          <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="userName"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="trueName"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="power"
        label="后台权限">
      </el-table-column>
       <el-table-column
        prop="phone"
        label="手机">
      </el-table-column>
       <el-table-column
        prop="updateAt"
        label="编辑日期">
      </el-table-column>
       <el-table-column
        prop="tokenId"
        label="操作">
         <template slot-scope="scope">
        <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
        <el-button type="text" size="small" @click="editor(scope.row)">编辑</el-button>
      </template>
      </el-table-column>
    </el-table>
      </div>

      
        <!-- 分页 -->
    <div class="block">
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="3"
      layout="total, pager, next"
      :total="count">
    </el-pagination>
  </div>
        <!-- 分页 -->

      </div>
        <!-- 面包屑 -->

        <!-- 模态框 -->
     <div class="mutai" v-show="hide">
             <div class="boxCont">
                <div class="topT">添加数据 <span  @click="cancel" class="fa  fa-close"></span></div>
                <div class="userInfo">
                    <p> <span>用户名:</span><input  type="text" ref="userName"></p>
                    <p> <span> 姓名: </span><input  type="text" ref="trueName"></p>
                    <p> <span>手机号:</span> <input  type="text" ref="phone"></p>
                     权限选择：<select name="" id="" ref="power">
                    <option value="">系统管理员</option>
                    <option value="">课程管理员</option>
                  </select>

                    <div class="btn">
                     <div class="ok" @click="sure">确定</div>
                <div class="no" @click="cancel">取消</div>
                </div>   
                </div>
                </div>
                <div>

                         
             </div>
     </div>
        <!-- 模态框 -->

        <!-- 修改的模态框 -->
         <div class="mutai" v-show="hide2">
             <div class="boxCont">
                <div class="topT">修改 <span  @click="noshow" class="fa  fa-close"></span></div>
                <div class="userInfo">
                    <p> <span>用户名:</span><input  type="text" v-model="username" readonly="readonly"></p>
                    <p> <span> 姓名: </span><input  type="text" v-model="truename"></p>
                    <p> <span>手机号:</span> <input  type="text" v-model="phone"></p>
                     权限选择：<select name="" id="" ref="Power">
                    <option value="">系统管理员</option>
                    <option value="">课程管理员</option>
                  </select>
                    <div class="btn">
                     <div class="ok" @click="makesure">修改</div>
                <div class="no" @click="noshow">取消</div>
                </div>   
                </div>
                </div>
                <div>

                         
             </div>
     </div>
        <!--  -->


  </div>
 
</template>

<script>
import Header from "../components/header";
import Axios from "axios";
export default {
  components: { Header },
  data() {
    return {
      tableData: [],
      text: "",
      hide: false,
      hide2: false,
      insertAdd: [],
      pageStart: 1,
      count: 0,
      username: "",
      truename: "",
      phone: ""
    };
  },
  methods: {
    show() {
      // 把数据渲染到页面
      Axios({
        url: "/api/Handler/AdminshowList?action=show",
        method: "get",
        params: {
          pageStart: this.pageStart,
          searchText: this.text
        }
      }).then(res => {
        // console.log(res.data.data.list)
        this.tableData = res.data.data.list;
        this.count = res.data.data.count;
      });
    },
    del(row) {
      //删除
      Axios({
        url: "/api/Handler/AdminshowList?action=delete",
        method: "get",
        params: {
          tokenId: row.tokenId
        }
      }).then(res => { 
        console.log(arguments);
        if (res.data.success) {
          alert(res.data.success);
        }
        console.log(res);
        this.show();
      });
    },
    //查询
    find() {
      this.show();
    },

    //添加
    add() {
      this.hide = true;
    },
    cancel() {
      this.hide = false;
    },
    sure() {
      Axios({
        url: "/api/Handler/AdminRegHandler?action=add",
        method: "post",
        data: {
          userName: this.$refs.userName.value,
          truename: this.$refs.trueName.value,
          phone: this.$refs.phone.value,
          password: "123456",
          power: this.$refs.power.value
        }
      }).then(res => {
        console.log(res);
        if (res.data.success) {
          alert(res.data.success);
          this.show();
          this.hide = false;
        }
      });
    },

    //分页
    handleCurrentChange(val) {
      this.pageStart = val;
      this.show();
    },

    // 编辑
    editor(row) {
      console.log(row);
      this.username = row.userName;
      this.hide2 = true;
    },
    noshow() {
      this.hide2 = false;
      (this.username = ""), (this.truename = ""), (this.phone = "");
    },
    makesure() {
      Axios({
        url: "/api/Handler/AdminRegHandler?action=update",
        method: "post",
        data: {
          username: this.username,
          truename: this.truename,
          phone: this.phone
        }
      }).then(res => {
        if (res.data.success) {
          alert(res.data.success);
          this.show();
        }
      });
         this.noshow();
    }
  },

  mounted() {
    this.show();
  }
};
</script>

<style>
html,
body {
  background: #f6f6f3;
}
.box {
  padding: 20px 40px;
}
#inp {
  margin-top: 20px;
  width: 100%;
  height: 60px;
  border: 1px solid lightgray;
  background: #fff;
}
#inp .inp_cont {
  margin-top: 8px;
  width: 50%;
  margin-left: 5px;
  height: 30px !important;
  border-radius: 0 !important;
}

.AdminList {
  border: 1px solid lightgray;
  height: 300px;
  width: 100%;
  background: #fff;
  margin-top: 20px;
}

.mutai {
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.mutai .boxCont {
  width: 500px;
  height: 300px;
  background: white;
  margin: 150px auto;
  border: 6px solid #4664ad;
}
.mutai .boxCont .topT {
  height: 50px;
  width: 100%;
  background: #4664ad;
  color: white;
  line-height: 46px;
}
.mutai .boxCont .topT span {
  float: right;
  line-height: 45px;
  margin-right: 10px;
}
.mutai .userInfo {
  width: 270px;
  margin: 50px auto 0;
}
.mutai .boxCont .userInfo p {
  width: 270px;
  height: 30px;
  /* background: #000; */
}
.mutai .boxCont .userInfo p input {
  float: right;
  margin-left: 20px;
}
.mutai .boxCont .btn {
  width: 300px;
  margin: 20px auto;
  background: yellow;
}
.mutai .boxCont .btn div {
  width: 80px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
}
.mutai .boxCont .btn .ok {
  background: #46c540;
  float: left;
}
.mutai .boxCont .btn .no {
  background: #4664ad;
  float: right;
}
</style>
