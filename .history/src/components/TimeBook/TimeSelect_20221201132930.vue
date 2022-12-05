<template>
  <div>
    <div class="calWrapper">
      <van-calendar
        color="#3983FF"
        title="日历"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '375px' }"
        @select="dateSelected"
      />
      <div class="rec"></div>
    </div>
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
    dateSelected:function(date) {
      console.log(date)
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .van-calendar {
  height: 375px;
  margin: 14px 16px 0px;
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
  margin-bottom: 21px;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  box-shadow: 0 0px 0px white;
}
/deep/ .van-calendar__header-title {
    display: none;
}
/deep/ .van-calendar__header-subtitle {
  margin-bottom: 16px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 25px;
}
/deep/ .van-calendar__weekday {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
  width: 18px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 25px;
}
/deep/ .van-calendar__day {
    position: relative;
    width: 14.285%;
    height: 49px;
    font-size: 0.427rem;
    cursor: pointer;
}
/deep/ .van-calendar__selected-day {
    width: 49px;
    height: 49px;
    color: #fff;
    background-color: #3983FF;
    border-radius: 50%;
}

.rec {
  width: 375px;
  height: 12px;
  background: #F5F5F5;
}
</style>
