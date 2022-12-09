<template>
  <div>
    <ResCard class="card" :res="researcher" next-to="/resinfo" btn=""/>
    <FormShow></FormShow>
    <van-row class="footer">
      <van-col class="Wrapper" @click="cancelClick">
        <div class="iconCancel"></div>
        <p class="fontClass fontGray">取消预约</p>
      </van-col>
      <van-col>
        <div class="line"></div>
      </van-col>
      <van-col class="Wrapper revise">
        <div class="iconRevise"></div>
        <p class="fontClass fontBlue">修改预约</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import FormShow from '@/components/BookDetail/FormShow.vue'
import ResCard from '@/components/ResCard.vue'
export default {
  name:'BookDetail',
  data() {
    return {
      researcher: {imgsrc:'/static/resimg.png', rname:'张胜利1', note:'xxx', intro:'研究员介绍：2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定…'},
    }
  },
  components: {
    FormShow,
    ResCard
  },
  methods: {
    cancelClick() {
      Dialog.confirm({
        title: '提示',
        confirmButtonColor: "#3983FF",
        message: '您确定要取消此次预约？',
      })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/img.scss';
.card {
  margin: 0 16px;
}
.footer {
  width: $main-width;
  height: 72px;
  padding:17px 74px;
}

.Wrapper {
  width: 48px;
  height: 38px;
}

.iconCancel{
  margin-left: 14px;
  @include bg-image-2('~@/assets/img/bookdetail/icon_20_取消', 20px, 20px); 
}
.iconRevise {
  margin-left: 14px;
  @include bg-image-2('~@/assets/img/bookdetail/icon_20_修改', 20px, 20px); 

}
.fontClass {
  margin: 0;
  width: 48px;
  height: 12px;
  font-size: 10px;
  -webkit-transform: scale(0.8);
  font-family: $main-font;
  font-weight: $main-fbolder;
  line-height: 12px;
}
.fontGray {
  color: $color-gray;
}
.fontBlue {
  color: $main-color;
}

.revise {
  margin-left: 65px;
}

.line {
  margin-left: 65px;
  width: 0.5px;
  height: 40px;
  background: #D8D8D8;
}
</style>