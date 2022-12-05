<template>
  <div>
    <div class="homeImg">
      <div class="circle">
        <picture>
          <source srcset="../assets/img/homePage/icon／24／用户@3x.png" media="(-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)">
          <source srcset="../assets/img/homePage/icon／24／用户@2x.png" media="(-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2)">
          <source srcset="../assets/img/homePage/icon／24／用户.png">
          <img src="../assets/img/homePage/icon／24／用户.png" alt="耳机">
        </picture>

      </div>
      <!-- <img src="../assets/img/homePage/106900968.png"/> -->
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
@import '../styles/img.scss';
.homeImg{
  width:375px;
  height:250px;
  background-size: 375px 250px;
  background-repeat:no-repeat;
  @include bg-image('../assets/img/homePage/IMG_9563-拷贝6 + 108914392 + 矩形 蒙版'); 
}
.circle{
  width: 38px;
  height: 38px;
  border-radius: 19px;
  background-color: #3983FF;
  position: absolute;
  top: 98px;
  left: 16px;
}

.userImg{
  width:375px;
  height:250px;
  background-size: 375px 250px;
  background-repeat:no-repeat;
  @include bg-image('../assets/img/homePage/icon／24／用户'); 
}
</style>