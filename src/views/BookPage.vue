<template>
  <div>
    <div class="header">
      <span class="headerFont">预约日期介绍：2021年12月22日-2021年12月24日为钻石客户锁定期。</span>
    </div>
    <van-tabs v-model="active" color="#3983FF" title-active-color="#3983FF">
      <van-tab #title><span :style="active===0?'color:#3983FF':'color:#333'">按时间选</span></van-tab>
      <van-tab #title><span :style="active===1?'color:#3983FF':'color:#333'">按研究员选</span></van-tab>    
    </van-tabs>
    <div v-if="!active">
      <TimeSelect :next-to="active"></TimeSelect>
    </div>
    <div v-else>
      <ResSelect ></ResSelect>
    </div>
  </div>
</template>

<script>
import TimeSelect from '../components/BookPage/TimeSelect.vue'
import ResSelect from '../components/BookPage/ResSelect.vue'
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
  watch: {
    active: {
      handler: function(val) {
        if(!val) {
          this.$router.push({path: '/bookpage/timeselect'})
        }else {
          this.$router.push({path: '/bookpage/resselect'})
        }
      },
      immediate: true
    },
    $route(to, from) {
      if(to.path=='/bookpage/timeselect'){
        this.active = 0
      }else if(to.path=='/bookpage/resselect') {
        this.active = 1
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  padding: 17px 16px;
  width: $main-width;
  height: 86px;
  background: $main-color;
}
.headerFont {
  display: inline-block;
  text-align: left;
  font-size: 16px;
  font-family: $main-font;
  font-weight: $main-fweight;
  color: $color-white;
  line-height: 26px;
}
/deep/ .van-tab__text--ellipsis {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    height: 22px;
    font-size: 16px;
    font-family: $main-font;
    font-weight: $main-fweight;
    color: $color-black;
    line-height: 22px;
}
</style>