// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Mint from 'mint-ui'
import "../node_modules/mint-ui/lib/style.css";
import '../static/font-awesome-4.7.0/css/font-awesome.css'
import rem  from "./config/rem"
import '../src/css/common.css'
import Axios from 'axios'
Vue.use(Mint);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})
