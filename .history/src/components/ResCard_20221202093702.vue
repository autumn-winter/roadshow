<template>
  <div class="wrapper">
    <img :src="imgsrc" class="imgclass">
  </div>
</template>

<script>
export default {
  name: 'ResCard',
  props: {
    imgsrc: String,
    name: String,
    note: String,
    intro: String,
  },
  components:{
    TimeSelect
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 343px;
  height: 140px;
  border-radius: 8px;
  border: 0.5px solid #D8D8D8;
}
.imgclass{
  width: 88px;
  height: 140px;
}
</style>