import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Home from '../page/home'
import Item from '../page/item'
import Score from '../page/score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: "/",
          component: r => require.ensure([], r => require('../page/home'), "home")
        },
        {
          path: "/item",
          component: r => require.ensure([], r => require('../page/item'), "item")
        },
        {
          path: "/score",
          component: r => require.ensure([], r => require('../page/score'), "score")
        }

        // {
        //   path:"/home",
        //   name:"home",
        //   component:Home
        // },
        // {
        //   path:"/item",
        //   name:"item",
        //   component:Item
        // },
        // {
        //   path:"/score",
        //   name:"score",
        //   component:Score
        // }
      ]
    }
  ]
})
