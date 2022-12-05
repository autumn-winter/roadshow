<template>
  <div>
    <div v-for="r,index in resCards" :key="index">
      <ResCard class="rescard" :imgsrc="r.imgsrc" :rname="r.rname" :note="r.note" :intro="r.intro" :next-to="/datebyres"/>
    </div>
  </div>
</template>

<script>
import ResCard from '../components/ResCard.vue'
export default {
  name: 'ResSelect',
  components:{
    ResCard
  },
  data() {
    return {
      resCards: [{imgsrc:'/static/resimg.png', rname:'张胜利1', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},
                {imgsrc:'/static/resimg.png', rname:'张胜利2', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},
                {imgsrc:'/static/resimg.png', rname:'张胜利3', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},
                {imgsrc:'/static/resimg.png', rname:'张胜利4', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},]
    }
  },
}
</script>

<style lang="scss" scoped>
.rescard {
  margin: 16px;
}
</style>