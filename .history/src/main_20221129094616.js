// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 按需引入vant组件
import '@/plugin/vant'
// 引入vant组件样式
import 'vant/lib/index.css';
// 引入移动端适配
import 'lib-flexible/flexible.js'

import { Button } from 'vant';

Vue.use(Button);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
