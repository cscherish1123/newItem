<template>
  <div id="app">
    <div class="wrap">
      <div class="todoInput"> 
        <input type="text" v-model="msg" />
        <button @click="add">添加</button>
        </div>

        <div class="todoList">
          <ul>
            <li v-for="item,index in todo">{{item.text}}<span @click="del(index)">{{item.del}}</span><span><input type="text" @keydown.13="enter"  v-show="hide" v-model="inputVaule">{{item.edit}}</span></li>
          </ul>
        </div>
    </div>
     
       

  </div>
</template>
<script>
export default {
  name:"todo",
  data(){
      return{
          msg:"",
          hide:false,
          inputVaule:"",
          todo:[{
            text:"",
            del:"",
            edit:""

          }]
      }
  },
  methods:{
      add(){
        // console.log(this.msg)
        this.todo.push({
          text : this.msg,
          del : "删除",
          edit : "编辑"
        })

      },
      del(index){
       this.todo.splice(index,1)
      },
      edit(){
        this.hide=true
        
      },
      enter(){
        
      }
  }
}
</script>
<style>

</style>

