<template>
  <div>
    <div class="homeImg">
      <div class="user">
        <div class="circle">
          <picture style="padding:0;border:0">
            <source media="(-webkit-min-device-pixel-ratio: 1)" srcset="../assets/img/homePage/icon／24／用户.png" >
            <source media="(-webkit-min-device-pixel-ratio: 2)" srcset="../assets/img/homePage/icon／24／用户@2x.png" >
            <source media="(-webkit-min-device-pixel-ratio: 3)" srcset="../assets/img/homePage/icon／24／用户@3x.png">
            <img src="../assets/img/homePage/icon／24／用户.png" alt="用户头像">
          </picture>
        </div>
        <span class="userFont">{{userName}}</span>
    </div>
      <!-- <img src="../assets/img/homePage/106900968.png"/> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      userName: '某某某',
    }
  }
}
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
.user {
  display: flex;
  position: absolute;
  top: 98px;
  left: 16px;
}
.circle{
  width: 38px;
  height: 38px;
  border-radius: 19px;
  background-color: #3983FF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.userFont {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 25px;
}
</style>