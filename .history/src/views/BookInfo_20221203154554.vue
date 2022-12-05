<template>
  <div>
    <van-tabs v-model="active" color="#3983FF" title-active-color="#3983FF">
      <van-tab #title><span :style="active===0?'color:#3983FF':'color:#333'">未开始路演</span></van-tab>
      <van-tab #title><span :style="active===1?'color:#3983FF':'color:#333'">历史预约记录</span></van-tab>    
    </van-tabs>
    <div v-if="!active">
      <!-- <TimeSelect :next-to="active"></TimeSelect> -->
    </div>
    <div v-else>
      <!-- <ResSelect ></ResSelect> -->
    </div>
  </div>
</template>

<script>
import ResSelect from '../components/ResSelect.vue'
export default {
  name: 'TimeBook',
  components:{
    ResSelect
  },
  data() {
    return {
      active: 0,
    }
  },
}
</script>