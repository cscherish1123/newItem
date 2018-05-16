import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: "/",
      component: r => require.ensure([], r => require('../page/home'), "home")
    },
    {
      path: "/boy",
      component: r => require.ensure([], r => require('../page/boy'), "boy"),
    },
    {
      path: "/shop",
      component: r => require.ensure([], r => require('../page/boy/shop'), "shop"),
    },
    {
      path: "/cate",
      component: r => require.ensure([], r => require('../page/boy/cate'), "cate"),
    },
    {
      path: "/my",
      component: r => require.ensure([], r => require('../page/boy/my'), "my"),
    },
    {
      path: "/cart",
      component: r => require.ensure([], r => require('../page/boy/cart'), "cart"),
    },
    {
      path: "/detail",
      component: r => require.ensure([], r => require('../page/boy/detail'), "detail"),
    },
    {
      path: "/register",
      component: r => require.ensure([], r => require('../page/boy/register'), "register")
    },  {
      path: "/login",
      component: r => require.ensure([], r => require('../page/boy/login'), "login")
    },
    {
      path: "/gril",
      component: r => require.ensure([], r => require('../page/gril'), "gril")
    },
    {
      path: "/life",
      component: r => require.ensure([], r => require('../page/life'), "life")
    },
    {
      path: "/kids",
      component: r => require.ensure([], r => require('../page/kids'), "kids")
    },
   
  ]
})
