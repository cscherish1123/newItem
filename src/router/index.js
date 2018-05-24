import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:r=>require.ensure([],r=>require("../components/home"))
    },
    {
      path: '/C_mainbc',
      component:r=>require.ensure([],r=>require("../components/C_mainbc"))
    }
  ]
})
