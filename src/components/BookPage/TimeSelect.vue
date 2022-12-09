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
        <div class="timeItemRec" v-for="t,index in times" :class="(timeSel && activeItem==index) ? 'activeClass' : '' ">
          <span class="timeFont" @click="timeSelect(t,index)" :style="(timeSel && activeItem==index) ? 'color:#FFFFFF' : '' ">{{t[0]}}-{{t[1]}}</span>
        </div>
        <div class="timeSelfRec" :class="timeSelfSel ? 'activeClass' : '' ">
          <span class="timeFont" @click="isTimeSelf=true" :style="timeSelfSel ? 'color:#FFFFFF' : '' ">自定义</span>
        </div>
      </div>
        <van-popup v-model="isTimeSelf" round position="bottom">
          <van-picker show-toolbar title="" :columns="columns" @cancel="isTimeSelf = false" @confirm="timeSelfSelect"/>
          <span class="zhi">至</span>
          <span class="zuo">:</span>
          <span class="you">:</span>
        </van-popup>
      <div class="btn">
        <span class="btnFont" @click="nextClick">下一步</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { Dialog } from 'vant';
import service from '@/utils/http.js'
Dialog.setDefaultOptions('confirmButtonColor','#3983FF')
export default {
  name: 'TimeSelect',
  props: {
    nextTo: Number
  },
  data () {
    return {
      dateSel: false,
      timeSel: false,
      timeSelfSel: false,
      activeItem: -1,
      book_time: ['','',''],
      times: [['08:30','09:30'], ['10:00','11:30'], ['13:00','14:30'], ['14:00','16:00'], ['18:30','19:30'] ],
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
      this.$set(this.book_time,0,this.getLocalTime(date))
      this.$set(this.book_time,1,this.getWeekDay(date))
    },
    timeSelect(t,index) {
      this.timeSel = true
      if(this.timeSelfSel){
        this.timeSelfSel = !this.timeSelfSel
      }
      this.activeItem = index
      this.$set(this.book_time,2,`${t[0]}-${t[1]}`)
    },
    timeSelfSelect(t) {
      let begin = new Date() 
      let end = new Date()
      begin.setHours (t[0])
      begin.setMinutes (t[1])
      end.setHours (t[2])
      end.setMinutes (t[3])
      if(end.getTime () - begin.getTime() > 0) {
        this.timeSelfSel = true
        if(this.timeSel){
          this.timeSel = !this.timeSel
        }
        this.isTimeSelf = false
        this.$set(this.book_time,2,`${t[0]}:${t[1]}-${t[2]}:${t[3]}`)
      } else {
        Toast.fail('请选择正确时段');
      }


    },
    nextClick() {
      if(!this.dateSel || !(this.timeSel || this.timeSelfSel)) {
        let text = !this.dateSel ? '日期' : '时间'
        Dialog.alert({
          title: '提示',
          confirmButtonColor: "#3983FF",
          message: `请选择${text}`,
        }).then(() => {
        });
      }else{
          let pass = true
          let list = []
          service.get('/roadbookdata').then(res => {
            list  = res
            for(let i=0; i<list.length; i++) {
              if(this.compareOneTime(list[i].form.datetime, this.book_time)){
                pass = false
                break
              }
            }
            if(pass){
              this.$store.commit('change_book_time',this.book_time)
              let routerTo = !this.nextTo ? '/book/time/resbydate' : '/book/bookform'
              this.$router.push({ path: routerTo}) 
            }else {
              Dialog.alert({
                title: '提示',
                confirmButtonColor: "#3983FF",
                message: `您选择的时间「${this.book_time[0]} ${this.book_time[1]} ${this.book_time[2]}」已被预约，请重新选择`,
              }).then(() => {
              })  
              .catch(() => {
                // on cancel
              });;
            }
          }).catch(err => {
            console.error(err)
          })

      }
      
    },
    PrefixInteger(num, length) {
      return (Array(length).join('0') + num).slice(-length);
    },
    getLocalTime(Timestamp) {
      return Timestamp.toLocaleDateString().replace(/\//g, "-"); 
    },
    getWeekDay(Timestamp) {
      return '周'+"日一二三四五六".charAt(Timestamp.getDay())
    },
    compareDate(date1,date2){
        let result = -1;
        const list1 = date1.split("-")
        const list2 = date2.split("-")
        if(Number(list1[0])>Number(list2[0])){
          result = 1
        }else if(Number(list1[0])==Number(list2[0])){
          if(Number(list1[1])>Number(list2[1])){
            result = 1
          }else if(Number(list1[1])==Number(list2[1])){
            if(Number(list1[2])>Number(list2[2])){
              result = 1
            }else if(Number(list1[2])==Number(list2[2])){
              result = 0
            }
          }
        }
        return result;
    },
    compareOneTime(compared, now) {
      let reg = /(\d+)年(\d+)月(\d+)日\s周([\u4e00-\u9fa5])\s(.+)/
      let list = compared.match(reg)
      const compareMonth = `${list[1]}-${list[2]}-${list[3]}`
      const res = this.compareDate(compareMonth,now[0])
      if(res!==0) {
        return false
      }else {
        const beginTime = list[5].split("-")[0]
        const endTime = list[5].split("-")[1]
        let b = new Date()
        let e = new Date()
        b.setHours (beginTime.split(":")[0]);
        b.setMinutes (beginTime.split(":")[1]);
        e.setHours (endTime.split (":")[0]);
        e.setMinutes (endTime.split (":")[1]); 

        const nowBegin = now[2].split("-")[0]
        const nowEnd = now[2].split('-')[1]
        let nb = new Date() 
        let ne = new Date()
        nb.setHours (nowBegin.split (":")[0]);
        nb.setMinutes (nowBegin.split (":")[1]); 
        ne.setHours (nowEnd.split (":")[0]);
        ne.setMinutes (nowEnd.split (":")[1]); 
        if(ne<=b || nb>=e) {
          return false;
        } else {
          return true;
        }
      }
    }
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
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/img.scss';
.activeClass {
  background: $main-color;
}
.all {
  width: $main-width;
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
  box-shadow: 0 0px 0px $color-white;
}
/deep/ .van-calendar__header-title {
  display: none;
}
/deep/ .van-calendar__header-subtitle {
  margin-bottom: 16px;
  height: 25px;
  font-size: 18px;
  font-family: $main-font;
  font-weight: $main-fbolder;
  color: $color-black;
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
  font-family: $main-font;
  font-weight: $main-fbolder;
  color: $color-black;
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
  margin-right: 12px;
  margin-top: 12px;
  display: inline-block;
  border-radius: 0.5px;
  border: 1px solid #D8D8D8;
}
.timeSelfRec {
  height: 36px;
  display: inline-block;
  box-sizing: border-box;
  width: 107px;
  margin-right: 12px;
  margin-top: 16px;
  display: inline-block;
  border-radius: 0.5px;
  border: 1px solid #D8D8D8;
}
.timeFont {
  display: block;
  width: 90px;
  height: 16px;
  margin: 9px 8px;
  font-size: 14px;
  line-height: 16px;
  font-family: $main-font;
  font-weight: 400;
  color: $color-black;
}

.btn {
  margin: 0 16px 16px;
  padding: 13px 0;
  @include bg-image-2('~@/assets/img/timeBook/timeSelect/矩形', 343px, 50px); 
}
.btnFont {
  height: 25px;
  font-size: 18px;
  font-family: $main-font;
  font-weight: $main-fweight;
  color: #FFFFFF;
  line-height: 25px;
}
.zhi {
  position: relative;
  bottom: 146px;
  left: 5px;
  width: 20px;
  height: 25px;
  font-size: 18px;
  font-family: $main-font;
  font-weight: $main-fweight;
  color: $color-black;
  line-height: 25px;
  letter-spacing: 1px;
}
.zuo {
  position: relative;
  bottom: 146px;
  right: 100px;
  width: 7px;
  height: 25px;
  font-size: 18px;
  font-family: $main-font;
  font-weight: $main-fweight;
  color: $color-black;
  line-height: 25px;
  letter-spacing: 1px;
}
.you {
  position: relative;
  bottom: 146px;
  left: 79px;
  width: 7px;
  height: 25px;
  font-size: 18px;
  font-family: $main-font;
  font-weight: $main-fweight;
  color: $color-black;
  line-height: 25px;
  letter-spacing: 1px;
}

</style>
