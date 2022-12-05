<template>
  <div>
    <div class="header">
      <p class="year">$store.state.book_time[0].slice(0,4)年</p>
      <p class="datetime">$store.state.book_time[0]</p>
      <van-button plain round type="info" class="btn">修改</van-button>
    </div>
    <!-- <div v-for="r,index in resCards" >
      <ResCard :imgsrc="r.imgsrc" :rname="r.rname" :note="r.note" :intro="r.intro"/>
    </div> -->
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
      resCards: [{imgsrc:'../assets/img/book/resimg.png', rname:'张胜利', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},
                {imgsrc:'../assets/img/book/resimg.png', rname:'张胜利', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},
                {imgsrc:'../assets/img/book/resimg.png', rname:'张胜利', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},
                {imgsrc:'../assets/img/book/resimg.png', rname:'张胜利', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 375px;
  height: 112px;
  background: #3983FF;
  padding: 29px 0 0 16px;
}
.year {
  text-align: left;
  height: 26px;
  color: #FFFFFF;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 26px;
}
.datetime {
  margin-left: 16px;
  text-align: left;
  height: 28px;
  color: #FFFFFF;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 28px;

}
.btn {
  margin-left: 12px;
  margin-top: 55px;
}
</style>