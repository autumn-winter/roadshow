import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/views/HomePage'
import BookTip from '@/views/BookTip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/booktip',
      name: 'BookTip',
      component: BookTip
    }
  ]
})
