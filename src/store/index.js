import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    book_time: [],
    book_researcher: {},
    datetime: '',
    bookform_data: {},
    now_bookdetail: {},
    raw_roads: [],
  },
  mutations:{
    change_book_time(state, book_time) {
      state.book_time = book_time
    },
    change_book_researcher(state, book_researcher) {
      state.book_researcher = book_researcher
    },
    get_datetime(state, datetime) {
      state.datetime = datetime
    },
    submit_bookform(state, bookform_data) {
      state.bookform_data = bookform_data
    },
    get_now_bookdetail(state, now_bookdetail) {
      state.now_bookdetail = now_bookdetail
    },
    add_bookroad(state, bookform_data) {
      state.raw_roads.push({
        imgsrc: '/static/resimg.png', 
        state:'', 
        form: bookform_data
      })
    }
  },
})
export default store