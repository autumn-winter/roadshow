<template>
  <div class="all">
    <div class="homeImg">
      <div class="user">
        <div class="circle">
          <img src="../assets/img/homePage/icon／24／用户.png"
            srcset="../assets/img/homePage/icon／24／用户.png 1x, ../assets/img/homePage/icon／24／用户@2x.png 2x, ../assets/img/homePage/icon／24／用户@3x.png 3x"
            sizes="(-webkit-min-device-pixel-ratio: 1) 24px, (-webkit-min-device-pixel-ratio: 2) 48px, (-webkit-min-device-pixel-ratio: 3) 72px"/>
        </div>
        <span class="userFont">{{userName}}</span>
      </div>
      <p class="homeFont">{{homeName}}</p>
    </div>

    <div class="booking">
      <div class="bookItem1" @click="$router.push({ path:'/booktip'})">
        <p class="bookFont">路演预约</p>
      </div>
      <div class="bookItem2" @click="$router.push({ path:'/bookinfo'})">
        <p class="bookFont">查看预约</p>
      </div>
    </div>

    <div class="img">
      <div class="mainImg"></div>
      <div class="deImg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      userName: '某某某',
      homeName: '钻石客户路演小程序',
    }
  }
}
</script>

<style lang="scss" scoped >
@import '@/styles/img.scss';
.all {
  width: $main-width;
  font-family: $main-font;
  font-weight: $main-fbolder;
  color: $color-white;
}
.homeImg{
  @include bg-image('~@/assets/img/homePage/IMG_9563-拷贝6 + 108914392 + 矩形 蒙版', 375px, 250px); 
}
.user {
  display: flex;
  align-items: center;
  position: absolute;
  top: 98px;
  left: 16px;
}
.circle{
  width: 38px;
  height: 38px;
  border-radius: 19px;
  background-color: $main-color;
  display: flex;
  align-items: center;
  justify-content: center;
}
.userFont {
  margin-left: 6px;
  font-size: 18px;
  line-height: 25px;
}
.homeFont {
  margin: 0;
  position: relative;
  top: 170px;
  left: 16px;
  width: auto;
  text-align: left;
  font-size: 28px;
  line-height: 40px;
}

.booking {
  clear: both;
  height: 120px;
  margin: 16px 0px;
}
.bookItem1 {
  float: left;
  margin-left: 16px;
  @include bg-image('~@/assets/img/homePage/模块', 163px, 120px); 
}
.bookItem2 {
  float: right;
  margin-right: 16px;
  @include bg-image('~@/assets/img/homePage/模块备份', 163px, 120px); 
}
.bookFont{
  margin-top: 16px;
  margin-left: 16px;
  text-align: left;
  height: 22px;
  font-size: $main-fbsize;
  line-height: 22px;
}
.img{
  overflow: hidden;
  padding: 0 16px;
}
.mainImg{
  @include bg-image('~@/assets/img/homePage/106900968', 343px, 120px); 
  float: left;
}
.deImg{
  @include bg-image('~@/assets/img/homePage/编组 2', 323px, 20px); 
  float: left;
  margin-left: 10px;
}
</style>