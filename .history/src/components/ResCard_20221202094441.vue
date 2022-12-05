<template>
  <div class="wrapper">
    <img :src="imgsrc" class="imgclass">
    <p class="name">{{rname}}</p>
    <p class="note">{{note}}</p>
    <p class="intro">{{intro}}</p>
    <van-button round type="info">预约</van-button>
  </div>
</template>

<script>
export default {
  name: 'ResCard',
  props: {
    imgsrc: String,
    rname: String,
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

.name {
  margin-top: 13px;
  margin-left: 104px;
}
.note {
  margin-top: 4px;
  margin-left: 104px;
}
.intro {
  margin-top: 8px;
  margin-left: 104px;
}
</style>