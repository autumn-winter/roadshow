// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import './styles/font.css'
require ('./utils/mock.js')


import { Button, Calendar, Tab, Tabs, Popup, Picker, Dialog, Form, Field, Toast, Col, Row, DatetimePicker } from 'vant';
Vue.use(Button).use(Calendar).use(Tab).use(Tabs).use(Popup).use(Picker).use(Dialog).use(Form).use(Field).use(Toast).use(Col).use(Row).use(DatetimePicker);

import { Select } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Select)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
