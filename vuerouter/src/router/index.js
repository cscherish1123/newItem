import Vue from "vue"
import Router from "vue-router"
import Home from "../components/home"
import Vuex from "../components/vuex"
Vue.use(Vuex)

// 一级路由
import Frist from "../components/frist"
import New from "../components/news"
import Chat from "../components/chat"

// 二级路由
import Second from "../components/second"
Vue.use(Router)

//三级路由
import Thrid from "../components/thrid"
import Fail from "../components/404"
import Left from "../components/left"
import Right from "../components/right"

export default new Router({
   //#hash  history -1  返回上一页
  mode:"history",         
  base:__dirname,       //base 是定义路径的
  linkActiveClass:"is-actived",
  routes:[    //配置路由全局   
    {
      path:"/",
      name:"home",
      component:Home,
      // 路由独享守卫
      // beforeEnter(to,from,next){
      //     // 用于处理注册  登录
      // }
    },
    {
      path:"/frist",
      name:"frist",
      // 命名视图
      components:{
        default:Frist,
        left:Left,
        right:Right
      },
      children:[{
        path:"/frist/second",
        name:"second",
        component:Second,
        children:[{
          path:"/frist/second/thrid",
          name:"thrid",
          component:Thrid,
        }]
      }]
    },
    {
      path:"/new",
      name:"new",
      component:New
    },
    {
      path:"/chat",
      name:"chat",
      component:Chat
    },
    {
      path:"/404",
      name:"404",
      component:Fail
    },{
      path:"/vuex",
      name:"vuex",
      component:Vuex
      
    }
    // ,{
      // 路由重定向  写在最下面
      // path:"*",
      //第一种
      // redirect:{name:"frist"}

      // 第二种
      //  redirect:(to)=>{
      //    console.log(arguments)
      //    console.log(to)
      //    return "/"
      //  }

      // 第三种
        // redirect:"/"

      // 第四种
      // redirect:{path:"/"}
    // }
  ]
})