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
        @cancel="(dateSelectShow=true)"
      />
    </van-popup>
    <div v-for="r,index in filterRoads" :key="index" class="cardswrapper">
      <RoadShowCard :road-card="r" :index="index" :info-type="infoType"></RoadShowCard>
    </div>
    
  </div>
</template>

<script>
import RoadShowCard from '../components/RoadShowCard.vue'

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
          currentDate: new Date(),
        };
    },
    computed: {
        maxDate() {
          let Timestamp = new Date();
          let date = Timestamp.toLocaleDateString().split("/");
          return new Date(date[0], date[1], 1)
        }
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
        console.log(nowyear,nowmonth)
        if(list[0]==nowyear && list[1]==nowmonth) {
          return true
        }
        return false
      },
      dateChange(value) {
        this.selectDate = this.nowdate(value)
        // let sdate =this.nowdate(value)
        this.filterRoads = this.rawRoad.filter((cur)=>{
          console.log(sdate, cur.date,this.dateEquel(sdate, cur.date))
          return this.dateEquel(this.selectDate, cur.date)
        })
        this.dateSelectShow = false
      }
    },
    created() {
      this.selectDate = this.nowdate(new Date())
      this.filterRoads = this.rawRoad
      console.log(this.filterRoads)
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/img.scss'; 
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
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 28px;
}

.iconclass {
  // float: right;
  @include bg-image-2('../assets/img/bookInfo/icon／下拉／下', 18px, 18px); 
}
.cardswrapper {
  margin: 0 16px;
}
</style>