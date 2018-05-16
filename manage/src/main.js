// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import "./css/common.css";
import "../static/font-awesome-4.7.0/css/font-awesome.css";
import Axios from 'axios';
import crypto from 'crypto'
import echarts from 'echarts'
import element from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(element)
Vue.prototype.$echarts = echarts 

// Axios.defaults.withCredentials = true;
Vue.prototype.$axios=Axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})
