<template>
  <div class="wrapper">
    <img :src="res.imgsrc" class="imgclass">
    <div class="textwrapper">
      <p class="name">{{res.rname}}</p>
      <p class="note font1">{{res.note}}</p>
      <p class="intro font1">{{res.intro}}</p>
      <button v-if="btn" class="btn" @click="bookClick">{{btn}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResCard',
  props: {
    res : Object,
    nextTo: String,
    btn: String,
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
  font-size: $main-fbsize;
  font-family: $main-font;
  font-weight: $main-fbolder;
  line-height: 22px;
}
.font1 {
  font-size: $main-fsize;
  font-family: $main-font;
  font-weight: $main-fweight;
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
  text-justify: distribute-all-lines;
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
  font-size: $main-fbsize;
  font-family: $main-font;
  font-weight: $main-fweight;
  color: $color-white;
}
</style>