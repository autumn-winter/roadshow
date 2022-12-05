<template>
  <div>
    <p class="now">{{nowdate}}</p>
    <div v-for="r,index in roads" :key="index">
      <RoadShowCard :road="r"></RoadShowCard>
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
    data() {
        return {
          raw_roads : 
          [{imgsrc: '/static/resimg.png', date: '2022-12-8', weekday: '周四', time: '10:00-11:30', theme: '路演主题路演', resname:'张胜利', state:''},
          {imgsrc: '/static/resimg.png', date: '2022-12-8', weekday: '周四', time: '8:00-9:30', theme: '路演主题路演', resname:'张胜利', state:''},
          {imgsrc: '/static/resimg.png', date: '2022-12-6', weekday: '周二', time: '10:00-11:30', theme: '路演主题路演', resname:'张胜利', state:'即将开始'},
          {imgsrc: '/static/resimg.png', date: '2022-12-1', weekday: '周四', time: '10:00-11:30', theme: '路演主题路演', resname:'张胜利', state:'已取消'},
          {imgsrc: '/static/resimg.png', date: '2022-11-30', weekday: '周三', time: '10:00-11:30', theme: '路演主题路演', resname:'张胜利', state:''}]
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
          return
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
</style>