<template>
  <div>
    <div class="homeImg">
      <div class="circle">
        
          <!-- <img src="../assets/img/homePage/icon／24／用户.png"
          srcset="../assets/img/homePage/icon／24／用户@2x.png 2x,  ../assets/img/homePage/icon／24／用户@3x.png 3x"
     alt="耳机"> -->
        <picture class="userImg">
          <source srcset="../assets/img/homePage/icon／24／用户.png">
          <source srcset="../assets/img/homePage/icon／24／用户@2x.png" media="(-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx)">
          <source srcset="../assets/img/homePage/icon／24／用户@3x.png" media="(-webkit-min-device-pixel-ratio: 3),(min-resolution: 3dppx)">
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
  position: absolute;
  top: 7px;
  left: 7px;
}
</style>