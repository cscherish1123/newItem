<template>
<div>

    <texts></texts>
    <texts></texts>

    <div id="box">
       <left-box></left-box>
       <div class="middle">
           <button>></button>
            <button><</button>
       </div>
     
       <rightBox></rightBox>
    </div>


    <!-- 下拉列表 -->
    <div class="down">
      <button></button>
    </div>
    
</div>
  
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {};
  },
  components: {
    leftBox: {
      template: `<div>
        <div class="left" >
          <li v-for="item in leftData"> <input type="checkbox"/>{{item}}</li>
         

        </div>
      
      </div>`,
      data() {
        return {
          leftData: ["php", "java", "python"]
        };
      }
    },
    rightBox: {
      template: `<div>
        <div class="right">
         <li v-for="i in rightData"> <input type="checkbox"/>{{i  }}</li>
        </div>
      
      </div>`,
      data() {
        return {
          rightData: ["php", "java", "python"]
        };
      }
    }
  }
};
</script>

<style>
li {
  list-style: none;
  font-size: 15px;
  line-height: 30px;
}
input {
  margin-right: 20px;
}
#box {
  width: 500px;
  height: 200px;
  margin-top: 100px;
  border: 1px solid black;
}
#box .left,
.right {
  width: 40%;
  height: 200px;
}
.left {
  float: left;
  border-right: 1px solid black;
}

.right {
  float: right;
  border-left: 1px solid black;
}
#box .middle{
  float: left;
}

#box .middle button{
  width: 50px;
  height: 30px;
  margin:30px 20px 0;
  display:block; 
}

</style>
