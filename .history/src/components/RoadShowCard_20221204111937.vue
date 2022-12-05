<template>
  <div class="wrapper">
    <div class="date">
      <p class="month">{{monthday}}</p>
      <p class="week">{{roadCard.weekday}}</p>
    </div>
    <div class="multicards" v-for="r,index in roadCard.roads" :key="index">
      <van-col>
        <van-row span="8">span: 8</van-row>
      </van-col>

      <div class="cardwrapper">
        <img :src="r.imgsrc" class="imgclass">
        <div class="content">
          <div class="textwrapper">
            <p class="time">{{r.time}}</p>
            <p class="theme font1">{{r.theme}}</p>
            <p class="resname font1">{{r.resname}}</p>
          </div>
        </div>
        <div class="state">
          <span class="stateFont">{{r.state}}</span>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'ResCard',
  props: {
    roadCard : Object,
    state: String,
  },
  computed: {
    monthday() {
      let list = this.roadCard.date.split('-')
      return `${list[1]}月${list[2]}`
    }
  },
  methods: {
    bookClick() {
      if(this.btn=='预约') {
        this.$store.commit('change_book_researcher', this.res)
        this.$router.push({ path: this.nextTo})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  // width: 343px;
  height: auto;
  display: flex;
}
.date {
  width: 56px;
  height: 56px;
  padding: auto;
  margin: 0;
  background: #3983FF;
  border-radius: 8px;
}
.month {
  margin: 8px 0 0;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 22px;
}
.week {
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 17px;
}
.multicards {
  margin: 0 0 16px 16px;
  width: 271px;
  overflow: visible;
  height: auto;
}
.cardwrapper {
  // margin: 0 0 16px 16px;
  width: 271px;
  height: 100px;
  border-radius: 8px;
  border: 0.5px solid #D8D8D8;
  display: flex;
}
.content {
  width: 167px;
}
.imgclass{
  width: 64px;
  height: 100px;
}

.textwrapper {
  padding-left: 16px;
  text-align: left;
}
.time {
  margin: 11px 0 8px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 25px;
}
.font1 {
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
.theme {
  margin-bottom: 2px;
}
.state {
  width: 40px;
  height: 100px;
  background: #3983FF;
  border-radius: 0px 8px 8px 0px;
  padding: 16px 10px;
}
.stateFont {
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 17px;

  // width: 20px;
  // height: 68px;
  // display: block;
  // overflow-wrap: break-word;
  // color: rgba(255, 255, 255, 1);
  // font-size: 12px;
  // line-height: 17px;
  // text-align: center;
  // overflow: hidden;
  // text-overflow: ellipsis;
}

.btn {
  float: right;
  position: relative;
  top: -125px;
  right: 16px;
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