<template>
  <div>
    <ResCard class="rescard card" :res="$store.state.book_researcher" next-to="/bookform" btn="更换"/>
    <TimeSelect :next-to="nextto" ></TimeSelect>
  </div>
</template>

<script>
import ResCard from '../components/ResCard.vue'
import TimeSelect from '../components/TimeSelect.vue'
export default {
  name: 'DatebyRes',
  components:{
    ResCard,
    TimeSelect
  },
  data() {
    return {
      nextto: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin: 0 16px;
}
</style>