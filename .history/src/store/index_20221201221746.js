import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    book_time: []
  },
  mutations:{
    change_book_time(state, book_time) {
      state.book_time = book_time
    },
  },
})
export default store