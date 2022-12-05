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
        <div class="timeItemRec" v-for="t,index in times" >
          <span class="timeFont" @click="timeSelect(t)">{{t[0]}}-{{t[1]}}</span>
        </div>
        <div class="timeSelfRec">
          <span class="timeFont" @click="isTimeSelf=true">自定义</span>
        </div>
      </div>
      <!-- <div v-if="isTimeSelf"> -->
        <van-popup v-model="isTimeSelf" round position="bottom">
          <van-picker show-toolbar title="" :columns="columns" @cancel="isTimeSelf = false" @confirm="timeSelfSelect"/>
        </van-popup>
      <!-- </div> -->
      <div class="btn">
        <span class="btnFont" @click="nextClick">下一步</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeSelect',
  data () {
    return {
      dateSel: false,
      timeSel: false,
      times: [['08:30','09:30'], ['10:00','11:30'], ['13:00','14:30'], ['14:30','16:00'], ['18:30','19:30'] ],
      isTimeSelf: false,
      columns: [
        {
          values: [],
          defaultIndex: 0,
        },
        {
          values: [],
          defaultIndex: 0,
        },
        {
          values: [],
          defaultIndex: 0,
        },
        {
          values: [],
          defaultIndex: 0,
        }
      ],
    }
  },
  methods: {
    dateSelected(date) {
      this.dateSel = true
      console.log(date,this.getLocalTime(date))
    },
    timeSelect(t) {
      this.timeSel = true
      console.log(t,`${t[0]}-${t[1]}`)
    },
    timeSelfSelect(t) {
      console.log(t, `${t[0]}:${t[1]}-${t[2]}:${t[3]}`)
      this.timeSel = true
      this.isTimeSelf = false
    },
    nextClick() {
      if(!this.dateSel) {
        Dialog.alert({
          title: '标题',
          message: '弹窗内容',
        }).then(() => {
          // on close
        });
      }
      this.$router.push({ path:'/resbydate'})
    },
    PrefixInteger(num, length) {
      return (Array(length).join('0') + num).slice(-length);
    },
    getLocalTime(Timestamp) {
      return Timestamp.toLocaleDateString().replace(/\//g, "-"); 
    },
  },
  created(){
    for(let i = 0; i < 24; i++){
      let tep = this.PrefixInteger(i, 2)
      this.columns[0]['values'].push(tep)
      this.columns[2]['values'].push(tep)
    }
    for(let i = 0; i < 60; i++){
      let tep = this.PrefixInteger(i, 2)
      this.columns[1]['values'].push(tep)
      this.columns[3]['values'].push(tep)
    }
    console.log(this.columns)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/img.scss';
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
  padding: 0 0 16px 12px;
}
.timeItemRec {
  box-sizing: border-box;
  width: 108px;
  margin-right: 12px;
  margin-top: 16px;
  display: inline-block;
  padding: 9px 8px;
  background: #FFFFFF;
  border-radius: 0.5px;
  border: 1px solid #D8D8D8;
}
.timeSelfRec {
  display: inline-block;
  box-sizing: border-box;
  width: 107px;
  margin-right: 12px;
  margin-top: 16px;
  display: inline-block;
  padding: 9px 8px;
  background: #FFFFFF;
  border-radius: 0.5px;
  border: 1px solid #D8D8D8;
}
.timeFont {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
}

.btn {
  margin: 0 16px 16px;
  padding: 13px 0;
  @include bg-image-2('../assets/img/timeBook/timeSelect/矩形', 343px, 50px); 
}
.btnFont {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 25px;
}
</style>
