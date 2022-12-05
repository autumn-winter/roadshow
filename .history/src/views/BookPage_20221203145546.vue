<template>
  <div>
    <div class="header">
      <span class="headerFont">预约日期介绍：2021年12月22日-2021年12月24日为钻石客户锁定期。</span>
    </div>
    <van-tabs v-model="active" color="#3983FF" title-active-color="#3983FF">
      <van-tab #title><span :style="active===0?'color:#3983FF':'color:#333'">按时间选</span></van-tab>
      <van-tab #title><span :style="active===1?'color:#3983FF':'color:#333'">按研究员选</span></van-tab>    </van-tabs>
    <div v-if="!active">
      <TimeSelect :next-to="active"></TimeSelect>
    </div>
    <div v-else>
      <ResSelect ></ResSelect>
    </div>
  </div>
</template>

<script>
import TimeSelect from '../components/TimeSelect.vue'
import ResSelect from '../components/ResSelect.vue'
export default {
  name: 'TimeBook',
  components:{
    TimeSelect,
    ResSelect
  },
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    typeClick(name, title) {
      // if(title=='按时间选'){
      //   this.isTimetype = true
      // }else{
      //   this.isTimetype = false
      // }
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  padding: 17px 16px;
  width: 375px;
  height: 86px;
  background: #3983FF;
}
.headerFont {
  display: inline-block;
  text-align: left;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 26px;
}
/deep/ .van-tab__text--ellipsis {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 22px;
}
</style>