<template>
  <div>
    <p class="now">{{nowdate}}</p>
    <div v-for="r,index in rawRoad" :key="index" class="cardswrapper">
      <RoadShowCard :road-card="r" :index="index" :info-type="infoType" :is-last-index="(index==rawRoad.length-1)"></RoadShowCard>
    </div>
    
  </div>
</template>

<script>
import RoadShowCard from './RoadShowCard.vue'

export default {
    name: "NotStartInfo",
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
            let weekday = "周" + "日一二三四五六".charAt(Timestamp.getDay());
            let date = Timestamp.toLocaleDateString().split("/");
            return `${date[0]}年${date[1]}月${date[2]}日${weekday}`;
        },
    }
}
</script>

<style lang="scss" scoped>
.now {
  margin-top: 20px;
  margin-left: 16px;
  text-align: left;
  height: 28px;
  font-size: 20px;
  font-family: $main-font;
  font-weight: $main-fbolder;
  color: $color-black;
  line-height: 28px;
}
.cardswrapper {
  margin: 0 16px;
}
</style>