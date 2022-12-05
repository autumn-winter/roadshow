<template>
  <div>
    <div class="header">
      <p class="year">{{$store.state.book_time[0]}}年</p>
      <p class="datetime">{{$store.state.book_time[0]}}</p>
      <van-button plain round type="info">修改</van-button>
    </div>
    <div v-for="r,index in resCards" >
      <ResCard />
    </div>
  </div>
</template>

<script>
import ResCard from '../components/ResCard.vue'
export default {
  name: 'ResbyDate',
  components:{
    ResCard
  },
  data() {
    return {
      resCards: [{}]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 375px;
  height: 112px;
  background: #3983FF;
}
</style>