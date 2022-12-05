import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/views/HomePage'
import BookTip from '@/views/BookTip'
import ResbyDate from '@/views/ResbyDate'
import BookPage from '@/views/BookPage'

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
    },
    {
      path: '/bookpage',
      name: 'BookPage',
      component: BookPage
    },
    {
      path: '/resbydate',
      name: 'ResbyDate',
      component: ResbyDate
    },
  ]
})
