<template>
  <div>
    <van-calendar
      color="#3983FF"
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '500px' }"
      ref="cal"
    />
  </div>
</template>

<script>
export default {
  name: 'TimeSelect',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    a:function() {
      this.$refs.cal.scrollToDate(new Date(2024,12))
      console.log("hhh")
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .van-calendar__header {
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}
/deep/ .van-calendar {
  margin: 14px 16px 13px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    height: 100%;
    background-color: #fff;
}
/deep/ .van-calendar__header {
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}
/deep/ .van-calendar__header-title {
    display: none;
}

/deep/ .van-calendar__header-subtitle {
  
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 25px;
}
// /deep/ .van-calendar__weekday {
//   -webkit-box-flex: 1;
//   -webkit-flex: 1;
//   flex: 1;
//   text-align: center;
//   width: 18px;
//   height: 25px;
//   font-size: 18px;
//   font-family: PingFangSC-Medium, PingFang SC;
//   font-weight: 500;
//   color: #333333;
//   line-height: 25px;
// }

// /deep/ .van-calendar__day {
//     position: relative;
//     font-size: 18px;
//     cursor: pointer;
//     width: 49px;
// height: 49px;
// font-size: 18px;
// font-family: PingFangSC-Medium, PingFang SC;
// font-weight: 500;
// color: #333333;
// line-height: 25px;
// }
/deep/ .van-calendar__selected-day {
    width: 49px;
    height: 49px;
    color: #fff;
    background-color: #3983FF;
    border-radius: 50%;
}
</style>
