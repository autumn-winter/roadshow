<template>
  <div>
    <div class="select" @click="dateSelectShow=true">
      <span class="now">{{selectDate}}</span>
      <div class="iconclass"></div>
    </div>
    <van-popup v-model="dateSelectShow" round position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        title=""
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="dateChange"
        @cancel="(dateSelectShow=false)"
      />
    </van-popup>
    <div v-for="r,index in filterRoads" :key="index" class="cardswrapper">
      <RoadShowCard :road-card="r" :index="index" :info-type="infoType" :is-last-index="(index==filterRoads.length-1)"></RoadShowCard>
    </div>
    
  </div>
</template>

<script>
import RoadShowCard from './RoadShowCard.vue'

export default {
    name: "HistoryInfo",
    components: {
      RoadShowCard
    },
    props: {
      rawRoad : Array,
      infoType: Number,
    },
    data() {
        return {
          selectDate: '',
          filterRoads: [],
          dateSelectShow: false,
          minDate: new Date(2020, 0, 1),
          maxDate: new Date(),
          currentDate: new Date(),
        };
    },
    methods: {
      formatter(type, val) {
        if (type === 'year') {
          return val;
        } else if (type === 'month') {
          return val;
        }
        return val;
      },
      nowdate(Timestamp) {
        let date = Timestamp.toLocaleDateString().split("/");
        return `${date[0]}年${date[1]}月`
      },
      dateEquel(nowdate,date2) {
        const nowyear = nowdate.slice(0,4)
        const nowmonth = nowdate.slice(5,-1)
        const list = date2.split('-')
        if(list[0]==nowyear && list[1]==nowmonth) {
          return true
        }
        return false
      },
      getLastMonth() {
          let date = new Date();
          let year = date.getFullYear();
          let month = date.getMonth(); 
          if (month == 0) {   
              year -= 1;
              month = 12;
          }
          return new Date(year, month, 1)
      },
      dateChange(value, isTimestamp=true) {
        if(isTimestamp){
          this.selectDate = this.nowdate(value)
        }
        this.filterRoads = this.rawRoad.filter((cur)=>{
          return this.dateEquel(this.selectDate, cur.date)
        })
        this.dateSelectShow = false
      }
    },
    created() {
      this.selectDate = this.nowdate(new Date())
      this.maxDate = this.getLastMonth()
      this.dateChange(this.selectDate,false)
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/img.scss'; 
.select {
  display: flex;
  align-items: center;
}
.now {
  margin: 20px 4px 20px 16px;
  display: inline-block;
  text-align: left;
  height: 28px;
  font-size: 20px;
  font-family: $main-font;
  font-weight: $main-fbolder;
  color: $color-black;
  line-height: 28px;
}

.iconclass {
  @include bg-image-2('~@/assets/img/bookInfo/icon下拉下', 18px, 18px); 
}
.cardswrapper {
  margin: 0 16px;
}
</style>