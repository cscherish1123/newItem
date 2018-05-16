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
        <el-input class="inp_cont" placeholder="用户名" v-model="user"></el-input>
         <el-input class="inp_cont" placeholder="邮箱" v-model="email"></el-input>
          <el-input class="inp_cont" placeholder="手机号" v-model="phone"></el-input>
         <el-button type="success" @click="search">查询 </el-button>
         <el-button type="success" @click="add">添加 </el-button>
         <el-button type="success" @click="update">修改 </el-button>
      </div>

      <div class="AdminList">
    <el-table :data="tableData"  style="width: 100%">  
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="180">
      </el-table-column>
       <el-table-column
        prop="phone"
        label="手机">
      </el-table-column>

         <el-table-column
        prop="createAt"
        label="注册日期">
      </el-table-column>

       <el-table-column
        prop="isstate"
        label="状态">
      </el-table-column>
       <el-table-column
        prop="tokenId"
        label="操作">
         <template slot-scope="scope">
        <el-button type="text" size="small" @click="Frozen(scope.$index,scope.row)" class="freezebtn">冻结</el-button>
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

      


  </div>
 
</template>

<script>
import Header from "../components/header";
import Axios from "axios";
export default {
  components: { Header },
  data() {
    return {
      hide: false,
      tableData: [],
      pageStart: 1,
      user: "",
      email: "",
      phone: "",
      count: 0,
      free:1
    };
  },
  methods: {
    // 定义改变页面的时候
    handleCurrentChange(val) {
      this.pageStart = val;
      this.show();
    },
    //查询的时候
    search() {
      this.show();
    },
    //冻结的时候

    Frozen(index,row) {
       var inner=document.querySelectorAll(".freezebtn span")[index].innerHTML
        if(inner=="冻结"){
            document.querySelectorAll(".freezebtn span")[index].innerHTML="解冻"
            document.querySelectorAll(".freezebtn span")[index].style.color='red'
            
        }else{
           document.querySelectorAll(".freezebtn span")[index].innerHTML="冻结"
           document.querySelectorAll(".freezebtn span")[index].style.color='#66b1ff'                        
           
        }
          Axios({
          url: "api/Handler/studentHandler?type=updateFreeze",
          method: "post",
          data:{
              tokenId:row.tokenId,
              freeze:document.querySelectorAll(".freezebtn span")[index].innerHTML
          }
          }).then(res => {  
            if(res.data.success){
              this.show()                
            }    
          }); 
          // console.log(row.freeze)
    },

    //添加数据的时候
    add() {
      Axios({
        url: "/api/Handler/studentHandler?type=addStudent",
        method: "post",
        data: {
          username: this.user,
          email: this.email,
          phone: this.phone
        }
      }).then(res => {
        if (this.user == "") {
          alert("您输入的用户名不正确");
        } else {
          // console.log(res.data.data);
          this.show();
        }
      });
    },

    //修改数据
    update() {
      Axios({
        url: "/api/Handler/studentHandlerupdate?type=studentupdate",
        method: "get",
        params: {
          username: this.user,
          phone: this.phone,
          email: this.email
        }
      }).then(res => {
        // console.log(res.data.data)
        if (this.user == "") {
          alert("您输入的用户名不正确");
        } else {
          alert("修改成功")
          this.show();
        }
      });
    },

    show() {
      Axios({
        url: "/api/Handler/studentHandlerReg?type=showStudentList",
        method: "get",
        params: {
          pageStart: this.pageStart,
          searchText: this.user
        }
      }).then(res => {
        console.log(res.data.data.list);
        this.tableData = res.data.data.list;
        this.count = res.data.data.count;
      });
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
  width: 20%;
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
