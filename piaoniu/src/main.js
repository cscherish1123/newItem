// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import rem from '../src/config/rem'
import Mint from 'mint-ui'
import "../node_modules/mint-ui/lib/style.css";
import "../src/css/common.css"
import '../static/font-awesome-4.7.0/css/font-awesome.css'
Vue.use(Mint)
Vue.config.productionTip = false  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})
