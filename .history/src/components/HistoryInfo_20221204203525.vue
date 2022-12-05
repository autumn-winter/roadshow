<template>
  <div>
    <div class="select" @click="dateSelectShow=true">
      <span class="now">{{nowdate}}</span>
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
        @cancel="cancel"
      />
    </van-popup>
    <div v-for="r,index in rawRoad" :key="index" class="cardswrapper">
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
          selectDate: new Date(),
          dateSelectShow: false,
          minDate: new Date(2020, 0, 1),
          currentDate: new Date(),
        };
    },
    computed: {
        nowdate() {
            let Timestamp = new Date();
            let date = Timestamp.toLocaleDateString().split("/");
            return `${date[0]}年${date[1]}月`
        },
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
      dateChange(value) {
        console.log(value)
        // this.selectDate = value
      },
      cancel() {

      }
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