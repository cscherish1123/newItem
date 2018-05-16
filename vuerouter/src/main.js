import Vue from "vue"
import Vuex from "vuex"
import router from "./router"
import state from "./components/vuex"
import store from "./store"
Vue.use(Vuex)

router.beforeEach((to,from,next)=>{
  // console.log(to),
  console.log(from)
  next()
  if(to.matched.length===0){
    console.log(from.name)
    from.name?next({next:from.name}):next("/404")
  }else{
    next()
  }
})

// router.afterEach((to,from)=>{

// })
new Vue({
  el:"#app",
  router,
  store
})