<template>
  <div>
    <div class="header">
      <button class="btn">修改</button>
      <p class="year">{{year}}年</p>
      <p class="datetime">{{datetime}}</p>
      
    </div>
    <div v-for="r,index in resCards" >
      <ResCard class="rescard" :imgsrc="r.imgsrc" :rname="r.rname" :note="r.note" :intro="r.intro"/>
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
      resCards: [{imgsrc:'@/assets/img/book/resimg.png', rname:'张胜利', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},
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
.btn {
  float: right;
  position: relative;
  top: 22px;
  right: 42px;
  width: 48px;
  height: 28px;
  background: #FFFFFF;
  border-width: 0.5px;
  border-radius: 4px;
  border-color: #3983FF;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #3983FF;
}
.year {
  text-align: left;
  margin: 0;
  color: #FFFFFF;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
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
.rescard {
  margin: 16px;
}
</style>