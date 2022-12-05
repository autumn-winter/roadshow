<template>
  <div>
    <div class="header">
      <van-button plain round type="info" class="btn">修改</van-button>
      <p class="year">{{year}}年</p>
      <p class="datetime">{{datetime}}</p>
      
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
  },
  computed: {
    year () {
      return this.$store.state.book_time[0].slice(0,4)
    },
    datetime() {
      let list = this.$store.state.book_time[0].split('-')
      let month = list[1]
      let day = list[2]
      return `${month}月${day}日 ${this.$store.state.book_time[1]} ${this.$store.state.book_time[2]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  width: 375px;
  height: 112px;
  background: #3983FF;
  padding: 29px 16px 0;
}
/deep/ .van-button--plain.van-button--info {
  width: 48px;
  height: 28px;
  color: #3983FF;

}
/deep/ .van-button--text {
  width: 32px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 22px;
}
/deep/ .van-button--round {
  border-radius: 4px;
}
.year {
  text-align: left;
  margin: 0;
  // height: 26px;
  color: #FFFFFF;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  // line-height: 26px;
}
.datetime {
  text-align: left;
  margin: 0;
  color: #FFFFFF;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 28px;
  height: 28px;
}
.btn {
  float: right;
  margin-top: 55px;
}
</style>