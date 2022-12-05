<template>
  <div>
    <div >
      <ResCard class="rescard" :res="$store.state.book_researcher" next-to="/bookform"/>
    </div>
  </div>
</template>

<script>
import ResCard from '../components/ResCard.vue'
export default {
  name: 'DatebyRes',
  components:{
    ResCard
  },
  data() {
    return {
      
    }
  },
}
</script>