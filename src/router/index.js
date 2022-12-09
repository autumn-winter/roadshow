import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import BookTip from '@/views/BookTip'
import BookPage from '@/views/BookPage'
import BookSuccess from '@/views/BookSuccess'
import BookDetail from '@/views/BookDetail'
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: { header: '路演预约' }
    },
    {
      path: '/booktip',
      name: 'BookTip',
      component: BookTip,
      meta: { header: '预约提示' }
    },
    {
      path: '/bookpage',
      name: 'BookPage',
      component: BookPage,
      meta: { header: '自助预约' },
      children: [
        {
          path: 'resselect',
          name: 'ResSelect',
          component: resolve => require(['@/components/BookPage/ResSelect'], resolve),
          meta: { header: '自助预约' }
        },
        {
          path: 'timeselect',
          name: 'TimeSelect',
          component: resolve => require(['@/components/BookPage/TimeSelect'], resolve),
          meta: { header: '自助预约' }
        },

      ]
    },
    {
      path: '/book/time/resbydate',
      name: 'ResbyDate',
      component: resolve => require(['@/views/BookPage/ResbyDate'], resolve),
      meta: { header: '自助预约' }
    },
    {
      path: '/book/res/datebyres',
      name: 'DatebyRes',
      component: resolve => require(['@/views/BookPage/DatebyRes'], resolve),
      meta: { header: '自助预约' }
    },
    {
      path: '/book/bookform',
      name: 'BookForm',
      component: resolve => require(['@/views/BookPage/BookForm'], resolve),
      meta: { header: '预约信息' }
    },
    {
      path: '/booksuccess',
      name: 'BookSuccess',
      component: BookSuccess,
      meta: { header: '预约成功' }
    },
    {
      path: '/bookinfo',
      name: 'BookInfo',
      component: resolve => require(['@/views/BookInfo'], resolve),
      meta: { header: '查看预约' },
      children: [
        {
          path: 'notstartinfo',
          name: 'NotStartInfo',
          component: resolve => require(['@/components/BookInfo/NotStartInfo'], resolve),
          meta: { header: '查看预约' }
        },
        {
          path: 'historyinfo',
          name: 'HistoryInfo',
          component: resolve => require(['@/components/BookInfo/HistoryInfo'], resolve),
          meta: { header: '查看预约' }
        }
      ]
    },
    {
      path: '/bookdetail',
      name: 'BookDetail',
      component: BookDetail,
      meta: { header: '预约详情' }
    },
  ]
})
