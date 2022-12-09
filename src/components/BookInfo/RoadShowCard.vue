<template>
  <div class="wrapper">
    <div class="left">
      <div class="date" :class="(!index && !infoType) ? 'bgDarkBlue' : 'bgBlue'">
        <p class="month" :class="(!index && !infoType) ? 'colorWhite' : 'colorBlack'">{{monthday}}</p>
        <p class="week" :class="(!index && !infoType) ? 'colorWhite' : 'colorGray'">{{roadCard.roads[0].weekday}}</p>
      </div>
      <div :class="isLastIndex ? '' : 'dashed'"></div>
    </div>
    <van-col class="multicards">
      <van-row v-for="r,index in roadCard.roads" :key="index" @click="onClick(r)">
        <div class="cardwrapper">
          <img :src="r.imgsrc" class="imgclass">
          <div class="content">
            <div class="textwrapper">
              <p class="time">{{r.time}}</p>
              <p class="theme font1">{{r.form.theme}}</p>
              <p class="resname font1">{{r.form.researcher}}</p>
            </div>
          </div>
          <div v-if="r.state" class="state" :class="r.state=='即将开始' ? 'bgDarkBlue' : 'bgGray'">
            <span class="stateFont">{{r.state}}</span>
          </div>
        </div>
      </van-row>
    </van-col>

  </div>
</template>

<script>
export default {
  name: 'ResCard',
  props: {
    infoType: Number,
    roadCard : Object,
    index: Number,
    isLastIndex: Boolean,
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
    },
    onClick(r) {
      this.$store.commit('get_now_bookdetail',r)
      this.$router.push({ path: '/bookdetail'})
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}
.left {
  display: flex;
  width: 56px;
}
.date {
  width: 56px;
  height: 56px;
  padding: auto;
  margin: 0;
  border-radius: 8px;
}
.month {
  margin: 8px 0 0;
  height: 22px;
  font-size: $main-fbsize;
  font-family: $main-font;
  font-weight: $main-fbolder;
  line-height: 22px;
}
.week {
  height: 17px;
  font-size: 12px;
  font-family: $main-font;
  font-weight: $main-fweight;
  line-height: 17px;
}
.colorWhite {
  color: $color-white;
}
.colorBlack {
  color: $color-black;
}
.colorGray {
  color: $color-gray;
}

.dashed {
  position: relative;
  left: -28px;
  top: 56px;
  width: 1px;
  height: calc(100% - 56px);
  background-image: linear-gradient(to bottom, #D8D8D8 0%, #D8D8D8 50%, transparent 0%);
  background-size: 1px 10px;
  background-repeat: repeat-y;
}
.multicards {
  margin: 0 16px 24px 0;
  width: 271px;
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
  margin: 11px 0 8px;
  height: 25px;
  font-size: 18px;
  font-family: $main-font;
  font-weight: $main-fbolder;
  color: $color-black;
  line-height: 25px;
}
.font1 {
  height: 20px;
  font-size: $main-fsize;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: $main-fweight;
  color: $color-black;
  line-height: 20px;
}
.theme {
  margin-bottom: 2px;
}
.state {
  width: 40px;
  height: 100px;
  border-radius: 0px 8px 8px 0px;
  padding: 16px 10px;
}

.bgDarkBlue {
  background: $main-color;
}
.bgGray {
  background: #D8D8D8;
}
.bgBlue {
  background: rgba(57, 131, 255, 0.2)
}
.stateFont {
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 12px;
  font-family: $main-font;
  font-weight: $main-fweight;
  color: $color-white;
  line-height: 17px;
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
  font-size: $main-fbsize;
  font-family: $main-font;
  font-weight: $main-fweight;
  color: $color-white;
}
</style>