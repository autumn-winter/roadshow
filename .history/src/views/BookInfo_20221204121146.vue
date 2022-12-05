<template>
  <div>
    <van-tabs v-model="active" color="#3983FF" title-active-color="#3983FF">
      <van-tab #title><span :style="active===0?'color:#3983FF':'color:#333'">未开始路演</span></van-tab>
      <van-tab #title><span :style="active===1?'color:#3983FF':'color:#333'">历史预约记录</span></van-tab>    
    </van-tabs>
    <div v-if="!active">
      <NotStartInfo></NotStartInfo>
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
}
</script>