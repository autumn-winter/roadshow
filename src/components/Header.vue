<template>
  <div class="header">
    <div class="back" @click="$router.go(-1)"></div>
    <span class="name">{{$route.meta.header}}</span>
    <div class="right"></div>
  </div>
</template>

<script>
</script>
<style lang="scss" scoped>
@import '@/styles/img.scss';
.header {
  display: flex;
}
.back {
  margin: 10px 8px 10px 10px;
  @include bg-image('~@/assets/img/header/icon_back', 24px, 24px); 
}
.name {
  margin: 10px 0;
  height: 25px;
  font-size: 18px;
  font-family: $main-font;
  font-weight: $main-fbolder;
  color: $color-black;
  line-height: 25px;
}
.right {
  position: absolute;
  right: 10px;
  top: 8px;
  @include bg-image('~@/assets/img/header/顶部／关闭', 76px, 28px); 
}
</style>