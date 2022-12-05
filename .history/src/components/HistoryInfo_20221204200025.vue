<template>
  <div>
    <div class="select">
      <span class="now">{{nowdate}}</span>
      <div class="iconclass"></div>
    </div>
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

        };
    },
    computed: {
        nowdate() {
            let Timestamp = new Date();
            let date = Timestamp.toLocaleDateString().split("/");
            return `${date[0]}年${date[1]}月`;
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/img.scss'; 
.select {
  display: flex;
}
.now {
  margin: 20px 0 20px 16px;
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
  float: right;
  @include bg-image-2('../assets/img/bookInfo/icon／下拉／下', 18px, 18px); 
}
.cardswrapper {
  margin: 0 16px;
}
</style>