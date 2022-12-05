<template>
  <div class="wrapper">
    <div class="date">
      <p class="month">{{monthday}}</p>
      <p class="week">{{road.weekday}}</p>
    </div>
    <div class="cardwrapper">
      <div class="content">
        <img :src="road.imgsrc" class="imgclass">
        <div class="textwrapper">
          <p class="time">{{road.time}}</p>
          <p class="intro font1">{{road.theme}}</p>
          <p class="intro font1">{{road.resname}}</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'ResCard',
  props: {
    road : Object,
  },
  computed: {
    monthday() {
      let list = this.road.date.split('-')
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
  // height: 140px;
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

.cardwrapper {
  margin: 0 0 16px 16px;
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