<template>
  <div class="all">
    <div class="icon"></div>
    <p class="sucessFont">恭喜您，预约成功</p>
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
</style>