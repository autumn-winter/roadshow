<!-- <template>
  <div>
    <button @click="a">z</button>
    <van-calendar
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

</style> -->

<template>
  <div class="be-on-duty">
    <div class="calendar mb-10">
      <van-calendar
        ref="calendars"
        :poppable="false"
        :show-confirm="false"
        :default-date="defaultDate"
        :style="{ height: '500px' }"
        :formatter="formatter"
        :min-date="minDate"
        :max-date="maxDate"
      >
      </van-calendar>
      <van-icon name="arrow-left" @click="arrowLeft" />
      <van-button type="danger" @click="goNow">回今天</van-button>
      <van-icon name="arrow" @click="arrowRight" />
    </div>
  </div>
</template>
 
<script>
// import { queryDutySchedule } from "@/api/system/beOnDuty";
// import { calendar } from "js-calendar-converter";
import { Calendar, Button, Icon } from "vant";
export default {
  name: "beOnDuty",
  components: {
    VanCalendar: Calendar,
    VanButton: Button,
    VanIcon: Icon,
  },
  data() {
    return {
      minDate: new Date(),
      maxDate: new Date(),
      defaultDate: new Date(),
      dutyList: [],
      cont: 0,
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      nowDay: new Date().getDate(),
    };
  },
  created() {
    // this.getNowDuty();
    this._setMinMaxDay();
  },
  methods: {
    // 返回首页
    goHome() {},
    // 回到今天
    goNow() {
      this.defaultDate = new Date();
      this.minDate = new Date();
      this.maxDate = new Date();
      this.cont = 0;
      this._setMinMaxDay();
      // this.getNowDuty();
    },
    _setMinMaxDay() {
      this.showYear = this.defaultDate.getFullYear();
      this.showMonth = this.defaultDate.getMonth();
      var firstDay = new Date(this.defaultDate);
      firstDay.setDate(1);
      this.minDate = new Date(
        this.showYear,
        this.showMonth,
        firstDay.getDate()
      );
      var endDay = new Date(this.showYear, this.showMonth + 1, 1);
      endDay.setDate(0);
      this.maxDate = new Date(this.showYear, this.showMonth, endDay.getDate());
    },
    // 设置显示月份可选择的天数区间
    setMinMaxDay() {
      var firstDay = new Date(this.defaultDate);
      firstDay.setDate(1);
      this.minDate = new Date(
        this.year,
        this.month + this.cont,
        firstDay.getDate()
      );
 
      var endDate = new Date(this.defaultDate);
      endDate.setMonth(this.defaultDate.getMonth() + 1);
      endDate.setDate(0);
      this.maxDate = new Date(
        this.year,
        this.month + this.cont,
        endDate.getDate()
      );
    },
    // 当前月上一个月
    arrowLeft() {
      this.cont--;
      const days = this.getMonthDays(this.year, this.month + this.cont)
      this.defaultDate = new Date(
        this.year,
        this.month + this.cont,
        this.nowDay > days ? days : this.nowDay
      );
      this._setMinMaxDay();
      // this.getNowDuty();
    },
    getMonthDays(year, month) {
      let days = new Date(year, month + 1, 0).getDate();
      return days;
    },
    // 当前月下一个月
    arrowRight() {
      this.cont++;
      const days = this.getMonthDays(this.year, this.month + this.cont)
      this.defaultDate = new Date(
        this.year,
        this.month + this.cont,
        this.nowDay > days ? days : this.nowDay
      );
      this._setMinMaxDay();
      // this.getNowDuty();
    },
    getNowDuty() {
      // var y = this.defaultDate.getFullYear();
      // var m = this.defaultDate.getMonth() + 1;
      // m = m < 10 ? "0" + m : m;
      // const obj = {
      //   month: y + "-" + m,
      // };
      // queryDutySchedule(obj).then((res) => {
      //   this.dutyList = res.data;
      // });
    },
    // Vant日历日期添加法定节假日以及24节气
    formatter(day) {
      const _time = new Date(day.date);
      const y = _time.getFullYear();
      const m = _time.getMonth() + 1;
      const d = _time.getDate();
      const w = _time.getDay();
      const info = calendar.solar2lunar(y, m, d);
      //   改变周六周日显示颜色
      if (w === 0 || w === 6) {
        day.className = "weekendRed";
      }
      // var mm = m;
      // mm = m < 10 ? "0" + m : m;
      // var dd = d;
      // dd = d < 10 ? "0" + d : d;
      // var nowDate = y + "-" + mm + "-" + dd;
      // this.dutyList.forEach((item) => {
      //   if (item.dutyDate == nowDate) {
      //     if (item.dutyPeriod == "白班") {
      //       day.topInfo = "白";
      //     } else if (item.dutyPeriod == "夜班") {
      //       day.topInfo = "夜";
      //     }
      //   }
      // });
      //   优先级:节日>节气>农历
      if (info.festival != null && info.festival != "") {
        day.bottomInfo = info.festival;
      } else if (info.Term != null && info.Term != "") {
        day.bottomInfo = info.Term;
      } else if (info.IDayCn != null && info.IDayCn != "") {
        day.bottomInfo = info.IDayCn;
      }
      return day;
    },
  },
};
</script>
 
<style scoped lang="scss">
// @import "@/assets/style/variables.scss";
::v-deep.be-on-duty {
  background-color: gray;
  // .icon-home {
  //   display: block;
  //   width: 1.0625rem;
  //   height: 1.125rem;
  //   background: url(../../../assets/image/icon_home.png) no-repeat center;
  //   background-size: 100%;
  // }
  .calendar {
    .van-button--danger {
      height: 1.475rem;
      padding: 0.3125rem;
      position: absolute;
      top: 3.4rem;
      right: 4rem;
    }
    .van-icon-arrow {
      position: absolute;
      top: 3.6rem;
      right: 1.2rem;
      font-size: 1.3rem;
    }
    .van-icon-arrow-left {
      position: absolute;
      top: 3.6rem;
      left: 1.2rem;
      font-size: 1.3rem;
    }
    .van-calendar {
      .van-calendar__header {
        .van-calendar__header-subtitle {
          font-size: 1rem;
        }
        .van-calendar__weekdays {
          :nth-child(1),
          :nth-child(7) {
            color: red;
          }
        }
      }
    }
    .van-calendar__body {
      .van-calendar__month {
        .van-calendar__days {
          .van-calendar__day {
            font-size: 1.125rem;
            .van-calendar__top-info {
              padding-right: 0.625rem;
              text-align: right;
            }
          }
          .weekendRed {
            color: red !important;
          }
        }
      }
    }
  }
  .remind {
    li {
      background-color: red;
      display: flex;
      justify-content: space-between;
      .remind-left,
      .remind-right {
        text-align: left;
      }
    }
  }
}
</style>