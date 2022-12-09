<template>
  <div>
    <div v-for="r,index in resCards" :key="index">
      <ResCard class="rescard" :res="r" next-to="/book/res/datebyres" btn="预约"/>
    </div>
  </div>
</template>

<script>
import ResCard from '../ResCard.vue'
import service from '@/utils/http.js'
export default {
  name: 'ResSelect',
  components:{
    ResCard
  },
  data() {
    return {
      resCards: []
    }
  },
  created() {
    service.get('/resdata').then(res => {
      this.resCards = res
    }).catch(err => {
      console.error(err)
    })
  }
}
</script>

<style lang="scss" scoped>
.rescard {
  margin: 16px;
}
</style>