// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引入移动端适配
import 'lib-flexible/flexible.js'

import { Button, Calendar, Tab, Tabs, Popup, Picker, Dialog, Form, Field } from 'vant';
Vue.use(Button).use(Calendar).use(Tab).use(Tabs).use(Popup).use(Picker).use(Dialog).use(Form).use(Field);

import { Select } from 'ant-design-vue';
import 'ant-design-vue/lib/select/style'
Vue.use(Select)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  store,
  router,
  render: h => h(App),
  // components: { App },
  // template: '<App/>'
}).$mount('#app')
