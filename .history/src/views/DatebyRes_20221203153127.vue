<template>
  <div>
    <div >
      <ResCard class="rescard" :res="$store.state.book_researcher" next-to="/bookform"/>
    </div>
    <TimeSelect :next-to="nextto" btn="更换"></TimeSelect>
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