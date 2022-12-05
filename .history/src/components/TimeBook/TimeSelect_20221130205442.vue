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
  <div class="calendar">
    <div class="calendar-top">
      <div class="calendar-top-title">学习表</div>
      <div class="calendar-top-button">
        <img
          src="../../assets/img/outside/icxxbgsy18.png"
          alt=""
          class="button-icon"
          @click="arrowLeft()"
        />
        <div class="calendar-top-time" @click="clickDate">
          {{ year }}-{{ month + 1 }}
        </div>
        <img
          src="../../assets/img/outside/icxxbgsy17.png"
          alt=""
          class="button-icon"
          @click="arrowRight()"
        />
      </div>
    </div>
    <van-calendar
      class="calendar-main"
      :show-title="false"
      :poppable="false"
      :show-confirm="false"
      :show-mark="false"
      :default-date="defaultDate"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
      @select="selectDay"
      first-day-of-week="1"
      row-height="35px"
      ref="calendar"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  watch,
  onMounted,
  computed,
  onActivated,
  getCurrentInstance,
} from "vue"
import { GetCalendar } from "../../api/appBase"
import { useUserStore } from "../../store/model/user"
import { useBaseStore } from "../../store/model/appBase"
const userStore = useUserStore()
const baseStore = useBaseStore()
const { proxy } = getCurrentInstance() as any

let dayDatas = reactive({ days: [] })

let defaultDate = ref(new Date())
let year = ref(defaultDate.value.getFullYear())
let month = ref(defaultDate.value.getMonth())
let currentMonth = ref(defaultDate.value.getMonth())
let showAllMonth = ref(false)

let minDate = ref()
let maxDate = ref()

const formatter = (day: any) => {
  // console.log(dayDatas)
  //给有数据的日期加点
  let isHasData = false
  let dayTimestamp = Date.parse(day.date)
  dayDatas.days.forEach((item) => {
    if (dayTimestamp == item["date"] * 1000) isHasData = true
  })
  if (isHasData) {
    day.className = "addDot"
  }
  //日期被选中并且有数据
  let selectDayTimestamp = baseStore.selectTimestamp * 1000
  if (dayTimestamp == selectDayTimestamp && isHasData) {
    day.className = "addDot_Select"
  }
  //当天日期加样式
  let todayTimestamp = new Date(new Date().toDateString()).getTime()
  if (dayTimestamp == todayTimestamp) {
    day.className = "calendarToday"
  }
  //当天日期有数据
  if (dayTimestamp == todayTimestamp && isHasData) {
    day.className = "addDot_calendarToday"
  }
  return day
}

//初始化 从接口获得数据
const GetCalendarData = function (year: any, month: any) {
  const grade = userStore.getGrade
  const mode = 0
  GetCalendar({ year, month, stage: grade, mode }).then((res) => {
    // console.log(res.data)
    dayDatas.days = res.data
  })
}

//设置当前显示日历
const setDate = (month: number) => {
  const daycount = new Date(year.value, month + 1, 0).getDate()
  let monthMin = new Date(year.value, month, 1)
  let monthMax = new Date(year.value, month, daycount)
  minDate.value = monthMin
  maxDate.value = monthMax
}

//切换上个月
const arrowLeft = function () {
  // console.log("<")
  if (month.value != currentMonth.value - 1) {
    month.value = currentMonth.value - 1
    setDate(month.value)
    GetCalendarData(year.value, month.value + 1)
    let day = new Date(
      year.value,
      month.value,
      new Date(year.value, month.value + 1, 0).getDate()
    )
    selectDay(day)
  } else {
    proxy.$toast({
      message: "仅保留本月和上个月的记录哦",
      icon: new URL(`../../assets/img/outside/icxxbgsy28.png`, import.meta.url)
        .href,
      className: "toast-c",
    })
  }
}

//切换下个月
const arrowRight = function () {
  // console.log(">")
  if (month.value < currentMonth.value) {
    month.value++
    setDate(month.value)
    GetCalendarData(year.value, month.value + 1)
    let day = new Date(year.value, month.value, 1)
    selectDay(day)
  } else {
    proxy.$toast({
      message: "仅保留本月和上个月的记录哦",
      icon: new URL(`../../assets/img/outside/icxxbgsy28.png`, import.meta.url)
        .href,
      className: "toast-c",
    })
  }
}

const selectDay = function (day: any) {
  // console.log(day)
  const timestamp = Date.parse(day) / 1000
  baseStore.$patch((state) => {
    state.selectTimestamp = timestamp
  })
}

const clickDate = function () {
  showAllMonth.value = !showAllMonth.value
  let calendarMain = <HTMLElement>(
    document.getElementsByClassName("calendar-main")[0]
  )
  if (showAllMonth.value) {
    calendarMain.style.height = "225px"
  } else {
    calendarMain.style.height = "68px"
    let date = new Date(baseStore.selectTimestamp * 1000)
    proxy.$refs.calendar.reset(date)
  }
}   

//特属于keepAlive的一个生命周期,activated在页面每次进入都会执行
onActivated(() => {
  if (baseStore.selectTimestamp != 0) {
    defaultDate.value = new Date(baseStore.selectTimestamp * 1000)
  }
  year.value = defaultDate.value.getFullYear()
  month.value = defaultDate.value.getMonth()
  GetCalendarData(year.value, month.value + 1)
  setDate(month.value)
  let calendarMain = <HTMLElement>(
    document.getElementsByClassName("calendar-main")[0]
  )
  calendarMain.style.height = "70px"
})

watch(
  () => userStore.getGrade,
  (newVal, oldVal) => {
    GetCalendarData(year.value, month.value + 1)
  }
)
</script>

<style lang="scss" scoped>
.calendar {
  // border: 1px solid red;
  margin-bottom: 46px !important;
  .calendar-top {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    .calendar-top-title {
      font-size: 32px;
      font-weight: bold;
    }
    .calendar-top-button {
      display: flex;
      font-size: 28px;
      align-items: center;
      .button-icon {
        width: 32px;
        height: 32px;
      }
      .calendar-top-time {
        color: rgba($color: #007aea, $alpha: 0.5);
        margin: 0 10px;
      }
    }
  }

  .calendar-weekdays {
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    // border: 1px solid red;
    .calendar-weekdays-item {
      width: 50px;
      font-size: 20px;
      color: rgba($color: #000000, $alpha: 0.5);
      // border: 1px solid red
    }
  }
  .calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 8%);
    grid-row-gap: 14px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    .calendar-days-item {
      flex-shrink: 0;
      width: 50px;
      font-size: 28px;
      color: #000000;
      // border: 1px solid red;
    }
  }
}
::v-deep(.van-calendar) {
  width: 106%;
  margin-left: -3%;
  background: none;
}
::v-deep(.van-calendar__body) {
  overflow: hidden;
}
::v-deep(.van-calendar__header) {
  box-shadow: none;
}
// ::v-deep(.van-calendar__day) {
//   margin-bottom: 6px !important;
// }
::v-deep(.van-calendar__selected-day) {
  border-radius: 50%;
  background-color: #59afff !important;
  z-index: 2;
  position: absolute;
}
::v-deep(.van-calendar__selected-day::after) {
  background-color: #fff !important;
}
::v-deep(.van-calendar__header-subtitle) {
  display: none;
}
::v-deep(.van-calendar__weekday) {
  color: rgba($color: #000000, $alpha: 0.5);
}
::v-deep(.van-calendar__weekday::before) {
  content: "周";
  color: rgba($color: #000000, $alpha: 0.5);
}
//有数据日期加点
::v-deep(.addDot) {
  position: relative;
}
::v-deep(.addDot::after) {
  position: absolute;
  content: "";
  width: 12px;
  height: 12px;
  top: 26Px;
  left: 45px;
  border-radius: 50%;
  background-color: #0084ff;
}
//当天日期
::v-deep(.calendarToday) {
  position: relative;
  color: #fff;
  // font-size: 0;
  // z-index: 1;
}
::v-deep(.calendarToday::before) {
  width: 35Px;
  height: 35Px;
  line-height: 35Px;
  position: absolute;
  top: 0;
  content: "今";
  text-align: center;
  font-size: 30px;
  border-radius: 50%;
  background-color: #ffae34;
  // z-index: -1;
}
//当天日期并且有数据
::v-deep(.addDot_calendarToday::after) {
  position: absolute;
  content: "";
  width: 12px;
  height: 12px;
  top: 26Px;
  left: 45px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 4;
}
::v-deep(.addDot_calendarToday::before) {
  width: 35Px;
  height: 35Px;
  line-height: 35Px;
  position: absolute;
  top: 0;
  content: "今";
  text-align: center;
  font-size: 30px;
  border-radius: 50%;
  color: #fff;
  background-color: #ffae34;
}
//有数据并且被选中
::v-deep(.addDot_Select::after) {
  position: absolute;
  content: "";
  width: 12px;
  height: 12px;
  top: 26Px;
  left: 45px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 3;
}
//被选中显示的今字
::v-deep(.calendarToday .van-calendar__selected-day) {
  font-size: 0;
}
::v-deep(.calendarToday .van-calendar__selected-day::before) {
  content: "今";
  z-index: 9;
  font-size: 30px;
  height: 35Px;
  line-height: 35Px;
}
::v-deep(.addDot_calendarToday .van-calendar__selected-day) {
  font-size: 0;
}
::v-deep(.addDot_calendarToday .van-calendar__selected-day::before) {
  content: "今";
  z-index: 9;
  font-size: 30px;
  height: 35Px;
  line-height: 35Px;
}
</style>

<style lang="scss">
.toast-c {
  width: 450px;
  height: 60px;
  padding: 22px 40px;
  min-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .van-toast__icon {
    font-size: 48px;
    margin-right: 10px;
  }
  .van-toast__text {
    font-size: 28px;
    margin-top: 0;
  }
}
</style>
