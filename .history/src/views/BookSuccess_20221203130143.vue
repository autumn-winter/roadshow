<template>
  <div class="all">
    <div class="icon"></div>
    <p class="sucessFont">恭喜您，预约成功</p>
    <p class="a afont">您可以在首页「<span>查看预约</span>」中查看</p>
    <p class="b afont">您的预约信息</p>
    <p class="c afont"><span>10</span>秒后自动返回「<span>首页</span>」</p>
  </div>
</template>

<script>
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
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 24px;
}
b {
  margin-bottom: 59px;
}
</style>