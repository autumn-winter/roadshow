<template>
  <div>
    <div class="header">
      <button class="btn">修改</button>
      <p class="year">{{year}}年</p>
      <p class="datetime">{{datetime}}</p>
      
    </div>
    <div v-for="r,index in resCards" :key="index">
      <ResCard class="rescard" :res="r" next-to="/book/bookform" btn="预约"/>
    </div>
  </div>
</template>

<script>
import ResCard from '@/components/ResCard.vue'
export default {
  name: 'ResbyDate',
  components:{
    ResCard
  },
  data() {
    return {
      resCards: [{imgsrc:'/static/resimg.png', rname:'张胜利1', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},
                {imgsrc:'/static/resimg.png', rname:'张胜利2', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},
                {imgsrc:'/static/resimg.png', rname:'张胜利3', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},
                {imgsrc:'/static/resimg.png', rname:'张胜利4', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},]
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
  },
  mounted() {
    this.$store.commit('get_datetime', `${this.year}年${this.datetime}`)
  }
}
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  width: $main-width;
  height: 112px;
  background: $main-color;
  padding: 29px 16px 0;
}
.btn {
  float: right;
  position: relative;
  top: 25px;
  right: 30px;
  width: 48px;
  height: 28px;
  background: $color-white;
  border-width: 0.5px;
  border-radius: 4px;
  border-color: $main-color;
  font-size: $main-fbsize;
  font-family: $main-font;
  font-weight: $main-fweight;
  color: $main-color;
}
.year {
  text-align: left;
  margin: 0;
  color: $color-white;
  font-size: $main-fbsize;
  font-family: $main-font;
  font-weight: $main-fweight;
}
.datetime {
  text-align: left;
  margin: 0;
  color: $color-white;
  font-size: 20px;
  font-family: $main-font;
  font-weight: $main-fbolder;
  line-height: 28px;
  height: 28px;
}
.rescard {
  margin: 16px;
}
</style>