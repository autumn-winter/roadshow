// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入移动端适配
import 'lib-flexible/flexible.js'

import { Button, Calendar, Tab, Tabs } from 'vant';
import 'vant/lib/index.less';

Vue.use(Button).use(Calendar).use(Tab).use(Tabs);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
