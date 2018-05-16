import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: r => require.ensure([], r => require("../components/login"), "login")
    },
    {
      path: '/header',
      component: r => require.ensure([], r => require("../components/header"), "header")
    },
    {
      path: '/home',
      component: r => require.ensure([], r => require("../components/home"), "home")
    },
    {
      path: '/adminList',
      component: r => require.ensure([], r => require("../components/adminList"), "adminList")
    },
    {
      path: '/student',
      component: r => require.ensure([], r => require("../components/student"), "student")
    },
   
   
  ]

})
