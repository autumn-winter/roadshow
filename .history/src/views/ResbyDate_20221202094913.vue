<template>
  <div class="header">

  </div>
  <ResCard />
</template>

<script>
import ResCard from '../components/ResCard.vue'
export default {
  name: 'ResbyDate',
  components:{
    ResCard
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 375px;
  height: 112px;
  background: #3983FF;
}
</style>