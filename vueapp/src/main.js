//main.js
import Vue from "vue";   //相当于引入vue.js
// import App from  "./App"
import Life from  "./Life"
import Filters from  "./Filter"
import Tab from  "./tab"
import Tab2 from  "./tab2"
import selected from  "./selected" 
import Dt from  "./dongtai"
import components from  "./component"
import direc from  "./directives"
import texts from  "./texts"
import translation from  "./translation"
import Http from  "./http"
import VueResource from "vue-resource"   //vue1 暂停维护
import axios from "axios"        //vue2
Vue.use(VueResource)
import router from './router'


// Vue.filter("uppercase",function(val){
//   console.log(arguments);
//   return val.toUpperCase()
// })


Vue.filter("cal",function(val,oldval,newval){
  console.log(arguments)
  return val+oldval+newval
})

//全局组件
// Vue.component("custom",{
//   template:`<div>我是全局组件{{msg}}
//     <customSecond :data="a" @receve="get"></customSecond>
//   </div>`,
//   data(){
//    return{
//     a:"我是你爸爸",
//     msg:""
//    }
// },methods:{ 
//   get(val){
//     this.msg = val
//   }
// }

// })

// Vue.component("customSecond",{
//   props:["data"],
//   template:`<div>我是子组件{{data}}
//   <button @click="send">点击</button>
//   </div>`,
//   data(){
//    return{
//     bb:"我是child"
//    }
// },methods:{
//   send(){
//     // $emit通过发送
//     this.$emit("receve",this.bb)
//   }
 
// },
// mounted(){
//   this.$emit("receve",this.bb)
// }
// })


//父传子
// Vue.component("custom",{
//   template:`<div>我是全局组件
//   <customSecond :data="a"></customSecond>
//   </div>`,
//   data(){
//     return{
//       a:"我是你爸爸"
//     }
//     }
// })

// Vue.component("customSecond",{
//   props:["data"],
//   template:`<div>我是子组件{{data}}
//   </div>`
// ,data(){
//   return{
//     bb:"我是child"
//   }
// }
// })

// 子传父
// Vue.component("custom",{
//   template:`<div>我是全局组件{{cc}}
//   <customSecond @getM="msg"></customSecond>
//   </div>`,
//   data(){
//     return{
//       a:"我是你爸爸",
//       cc:""
//     }
//     },
//     methods:{
//       msg(val){
//         this.cc = val
//       }
//     }
// })

// Vue.component("customSecond",{
//   props:["data"],
//   template:`<div>我是子组件
//   <button @click="send">发送</button>
//   </div>`
// ,data(){
//   return{
//     bb:"我是child"
//   }
// },
// methods:{
//   send(){
//     // alert(1)
//     this.$emit("getM",this.bb)

//   }
// },mounted(){
//   this.$emit("getM",this.bb)

// }
// })

// 兄弟
// var bus = new Vue();
// Vue.component("brother",{
//   template:`<div>我是兄弟一组件
//   {{getMsg}}
//   </div>`,
//   data(){ 
//     return{
//       getMsg:""
//     }
//   },
//   mounted(){
//     bus.$on("send", val=>{
//       this.getMsg=val;
//       console.log(val)
//     })
//   }

// })

// Vue.component("brother2",{
//   template:`<div>我是兄弟二组件
//           <button @click="contact">连接</button>
//   </div>`,
//   data(){
//       return{
//         msg2:"我是二"
//       }
//   },
//   methods:{
//     contact(){
//       bus.$emit("send",this.msg2)
//     }
//   }
// })

// 下拉
// Vue.component("texts",{
//   template:`<div >
//   <input type=text @focus="getfocus" @blur="lost" v-model="cont" /><button>查询</button> 
//   <li v-show="hide" v-for="item,index in arr" @mouseover="hover(index)">{{item}}</li>
//    </div>`,
//   data(){
//     return{
//       arr:["我最美","不用看，还是我最美","闪现了你的狗眼"],
//       hide:false,
//       cont:""
//     }
//   },methods:{
//     getfocus(){
//       this.hide=true;
//     },
//     lost(){
//       this.hide=false;
//     },
//     hover(index){
//       this.cont=this.arr[index]  
//       // console.log(this.cont)
//     }
//   }
// })

// 


// 作业
// var vm=new Vue({
//   // el:"#app", //el ===element  元素  挂载
//   router,  
//   template:'<texts/>',
//   components:{texts}
// }).$mount('#app')




// 组件
// var vm=new Vue({
//   // el:"#app", //el ===element  元素  挂载
//   router,  
//   template:'<components/>',
//   components:{components}
// }).$mount('#app')


//自定义指令
// var vm=new Vue({
//   // el:"#app", //el ===element  元素  挂载
//   router,  
//   template:'<direc/>',
//   components:{direc}
// }).$mount('#app')




//开始实例化对象
// tab选项卡
var vm=new Vue({
  // el:"#app", //el ===element  元素  挂载
  router,  
  template:'<Tab/>',
  components:{Tab}
}).$mount('#app')

// qq下拉
// var vm=new Vue({
//     // el:"#app", //el ===element  元素  挂载
//     router,  
//     template:'<Tab2/>',
//     components:{Tab2}
//   }).$mount('#app')
  

// 老杨  案例  下拉搜索
  // var vm=new Vue({
  //   // el:"#app", //el ===element  元素  挂载
  //   router,  
  //   template:'<selected/>',
  //   components:{selected}
  // }).$mount('#app')

//动态 添加删除
// var vm=new Vue({
//   // el:"#app", //el ===element  元素  挂载
//   router,  
//   template:'<Dt/>',
//   components:{Dt}
// }).$mount('#app')


//动画
// var vm=new Vue({
//   // el:"#app", //el ===element  元素  挂载
//   router,  
//   template:'<translation/>',
//   components:{translation}
// }).$mount('#app')

  // 交互
  // var vm=new Vue({
  //   // el:"#app", //el ===element  元素  挂载
  //   router,  
  //   template:'<Http/>',
  //   components:{Http}
  // }).$mount('#app')
  
    