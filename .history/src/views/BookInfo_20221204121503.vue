<template>
  <div>
    <van-tabs v-model="active" color="#3983FF" title-active-color="#3983FF">
      <van-tab #title><span :style="active===0?'color:#3983FF':'color:#333'">未开始路演</span></van-tab>
      <van-tab #title><span :style="active===1?'color:#3983FF':'color:#333'">历史预约记录</span></van-tab>    
    </van-tabs>
    <div v-if="!active">
      <NotStartInfo :raw-roads="raw_roads"></NotStartInfo>
    </div>
    <div v-else>
      <!-- <ResSelect ></ResSelect> -->
    </div>
  </div>
</template>

<script>
import NotStartInfo from '../components/NotStartInfo.vue'
export default {
  name: 'TimeBook',
  components:{
    NotStartInfo
  },
  data() {
    return {
      active: 0,
      raw_roads : 
          [{imgsrc: '/static/resimg.png', date: '2022-12-8', weekday: '周四', time: '10:00-11:30', theme: '路演主题路演', resname:'张胜利', state:''},
          {imgsrc: '/static/resimg.png', date: '2022-12-8', weekday: '周四', time: '8:00-9:30', theme: '路演主题路演', resname:'张胜利', state:''},
          {imgsrc: '/static/resimg.png', date: '2022-12-6', weekday: '周二', time: '10:00-11:30', theme: '路演主题路演', resname:'张胜利', state:'即将开始'},
          {imgsrc: '/static/resimg.png', date: '2022-12-1', weekday: '周四', time: '10:00-11:30', theme: '路演主题路演', resname:'张胜利', state:'已取消'},
          {imgsrc: '/static/resimg.png', date: '2022-11-30', weekday: '周三', time: '10:00-11:30', theme: '路演主题路演', resname:'张胜利', state:''}]
    }
  },
  computed: {
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
  }
}
</script>