import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    book_time: [],
    book_researcher: '',
    bookform_data: {},
  },
  mutations:{
    change_book_time(state, book_time) {
      state.book_time = book_time
    },
    change_book_researcher(state, book_researcher) {
      state.book_researcher = book_researcher
    },
    submit_bookform(state, bookform_data) {
      state.bookform_data = bookform_data
    },
  },
})
export default store