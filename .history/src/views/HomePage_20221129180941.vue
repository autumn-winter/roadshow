<template>
  <div>
    <div class="homeImg">
      <div class="circle">

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
}

.userImg{
  width:375px;
  height:250px;
  background-size: 375px 250px;
  background-repeat:no-repeat;
  @include bg-image('../assets/img/homePage/icon／24／用户'); 
}
</style>