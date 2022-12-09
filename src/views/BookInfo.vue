<template>
  <div>
    <van-tabs v-model="active" color="#3983FF" title-active-color="#3983FF">
      <van-tab #title>
        <span :style="active===0?'color:#3983FF':'color:#333'">
         未开始路演
        </span>
      </van-tab>
      <van-tab #title>
        <span :style="active===1?'color:#3983FF':'color:#333'">
          历史预约记录
        </span>
      </van-tab>   
    </van-tabs>
    <div v-if="!active">
      <NotStartInfo :info-type="active" :raw-road="roads.notStartInfo"></NotStartInfo>
    </div>
    <div v-else>
      <HistoryInfo :info-type="active" :raw-road="roads.historyInfo"></HistoryInfo>
    </div>
  </div>
</template>

<script>
import NotStartInfo from '../components/BookInfo/NotStartInfo.vue'
import HistoryInfo from '../components/BookInfo/HistoryInfo.vue'
import service from '@/utils/http.js'
export default {
  name: 'TimeBook',
  components:{
    NotStartInfo,
    HistoryInfo
  },
  data() {
    return {
      active: 0,
      raw_roads : [],
      roads: [],
    }
  },
  watch: {
    active: {
      handler: function(val) {
        if(!val) {
          this.$router.push({path: '/bookinfo/notstartinfo'})
        }else {
          this.$router.push({path: '/bookinfo/historyinfo'})
        }
      },
      immediate: true
    },
    $route(to, from) {
      if(to.path=='/bookinfo/notstartinfo'){
        this.active = 0
      }else if(to.path=='/bookinfo/historyinfo') {
        this.active = 1
      }
    }
  },
  methods: {
    getdatetime(str) {
      const reg = /(\d+)年(\d+)月(\d+)日\s周([\u4e00-\u9fa5])\s(.+)/
      let data = str.match(reg);
      return [`${data[1]}-${data[2]}-${data[3]}`,`周${data[4]}`,data[5]]
    },
    getnowdate() {
        let Timestamp = new Date();
        let date = Timestamp.toLocaleDateString().split("/");
        return `${date[0]}/${date[1]}/${date[2]}`;
    },
    compareDate(date1,date2){
        let result = 0;
        const list1 = date1.split("-")
        const list2 = date2.split("/")
        if(Number(list1[0])>Number(list2[0])){
          result = 1
        }else if(Number(list1[0])==Number(list2[0])){
          if(Number(list1[1])>Number(list2[1])){
            result = 1
          }else if(Number(list1[1])==Number(list2[1])){
            if(Number(list1[2])>=Number(list2[2])){
              result = 1
            }
          }
        }
        return result;
    },
    getRoads() {
      let date,weekday,time
      let list = this.raw_roads
      for(let i=0; i<list.length; i++) {
        [date, weekday, time] = this.getdatetime(list[i].form.datetime)
        list[i].time = time
        list[i].date = date
        list[i].weekday = weekday
      }
      let all = [];
      let ndate = list[0].date;
      let roadbydate = {date: ndate, roads:[]};
      for(let i=0; i<list.length; i++) {
        if(list[i].date==ndate){
          roadbydate.roads.push(list[i])
        }else {
          all.push(roadbydate)
          ndate = list[i].date;
          roadbydate = {date: ndate, roads:[list[i]]};
        }
      }
      all.push(roadbydate)
      let res = {notStartInfo:[], historyInfo:[]}
      let nowdata =this.getnowdate()
      for(let i=0; i<all.length; i++) {
        if(this.compareDate(all[i].date, nowdata)) {
          res.notStartInfo.push(all[i])
        }else{
          res.historyInfo.push(all[i])
        }
      }
      return res
    }
  },
  created() {
    service.get('/roadbookdata').then(res => {
      this.raw_roads  = res.concat(this.$store.state.raw_roads)
      this.roads = this.getRoads()
    }).catch(err => {
      console.error(err)
    })
    
  }
}
</script>
