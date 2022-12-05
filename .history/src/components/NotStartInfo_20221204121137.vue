<template>
  <div>
    <p class="now">{{nowdate}}</p>
    <div v-for="r,index in roads" :key="index" class="cardswrapper">
      <RoadShowCard :road-card="r" :index="index" ></RoadShowCard>
    </div>
    
  </div>
</template>

<script>
import RoadShowCard from '../components/RoadShowCard.vue'

export default {
    name: "NotStartInfo",
    components: {
      RoadShowCard
    },
    props: {
      raw_roads : Object,
    },
    data() {
        return {

        };
    },
    computed: {
        nowdate() {
            let Timestamp = new Date();
            let weekday = "周" + "日一二三四五六".charAt(Timestamp.getDay());
            let date = Timestamp.toLocaleDateString().split("/");
            return `${date[0]}年${date[1]}月${date[2]}日${weekday}`;
        },
        roads() {
          let all = [];
          let ndate = this.raw_roads[0].date;
          let weekday = this.raw_roads[0].weekday;
          let roadbydate = {date: ndate, weekday, roads:[]};
          for(let i=0; i<this.raw_roads.length; i++) {
            if(this.raw_roads[i].date==ndate){
              roadbydate.roads.push(this.raw_roads[i])
            }else {
              all.push(roadbydate)
              ndate = this.raw_roads[i].date;
              weekday = this.raw_roads[i].weekday;
              roadbydate = {date: ndate, weekday, roads:[this.raw_roads[i]]};
            }
          }
          all.push(roadbydate)
          console.log(all)
          return all
        }
    },
    components: { RoadShowCard }
}
</script>

<style lang="scss" scoped>
.now {
  margin-top: 28px;
  margin-left: 16px;
  text-align: left;
  height: 28px;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 28px;
}
.cardswrapper {
  margin: 0 16px;
}
</style>