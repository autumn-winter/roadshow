<template>
  <div class="all">
    <div class="icon"></div>
    <p class="sucessFont">恭喜您，预约成功</p>
    <p class="afont">您可以在首页「<span class="linkclass" @click="$router.push({path: '/'})">查看预约</span>」中查看</p>
    <p class="bfont">您的预约信息</p>
    <p class="c, afont"><span class="time">{{second}}</span>秒后自动返回「<span class="linkclass" @click="$router.push({path: '/bookinfo'})">首页</span>」</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      second: 10,
      timer: null,
    }
  },
  methods: {
    countdown() {
      this.timer = setInterval(() => {
        this.second = this.second-1
        if (this.second <= 0) {
          clearInterval(timer);
          this.timer = null;
          this.$router.replace({path: "/"}); 
        }
      }, 1000)
    }
  },
  mounted() {
    this.countdown()
  }
}
</script>

<style  lang="scss" scoped>
@import '../styles/img.scss';
.all {
  padding: auto;
}
.icon {
  margin: 40px 154px 22px;
  @include bg-image-2('../assets/img/bookSuccess/icon／手机号码', 68px, 68px); 
}
.sucessFont {
  margin-bottom: 37px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 25px;
}
.afont {
  margin-bottom: 0;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 24px;
}

.bfont {
  margin-bottom: 59px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 24px;
}
.linkclass {
  color: #3983FF;
}
.time {
  color: red;
}
</style>