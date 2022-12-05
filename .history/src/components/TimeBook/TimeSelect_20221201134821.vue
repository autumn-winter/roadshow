<template>
  <div class="all">
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
      <div class="timeWrapper">
        <div class="timeItemRec" v-for="t,index in times">
          <span class="timeFont">{{t[0]}}-{{t[1]}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeSelect',
  data () {
    return {
      times: [['08:30','09:30'], ['10:00','11:30'], ['13:00','14:30'], ['14:30','16:00'], ['18:30','19:30'], ['20:00','21:30'], ]
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
.all {
  width: 375px;
}
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
  height: 12px;
  background: #F5F5F5;
}
.timeWrapper {
  padding: 17px 16px;
}
.timeItemRec {
  display: inline-block;
  padding: 9px 12px;
  width: 103px;
  height: 40px;
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #D8D8D8;
}
.timeFont {
  width: 79px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 22px;
}
</style>
