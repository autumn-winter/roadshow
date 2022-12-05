<template>
  <div class="wrapper">
    <img :src="imgsrc" class="imgclass">
    <div class="textwrapper">
      <p class="name">{{rname}}</p>
      <p class="note font1">{{note}}</p>
      <p class="intro font1">{{intro}}</p>
      <button class="btn">预约</button>
    </div>

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
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 343px;
  height: 140px;
  border-radius: 8px;
  border: 0.5px solid #D8D8D8;
  display: flex;
}
.imgclass{
  width: 88px;
  height: 140px;
}

.textwrapper {
  padding-left: 16px;
  text-align: left;
}
.name {
  margin: 0;
  margin-top: 13px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 22px;
}
.font1 {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 20px;
}
.note {
  margin: 4px 0;
}
.intro {
  margin: 8px 16px 13px 0;
  letter-spacing: 0.5px;
  text-align: justify;
  text-justify:distribute-all-lines;
  text-align-last: justify;
}

.btn {
  float: right;
  position: relative;
  top: -522px;
  right: 42px;
  width: 48px;
  height: 28px;
  background: #3983FF;
  border-width: 0.5px;
  border-radius: 4px;
  border-color: #3983FF;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
}
</style>