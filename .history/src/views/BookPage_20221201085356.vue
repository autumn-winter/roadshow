<template>
  <van-tabs v-model="type">
  <van-tab title="时间">按时间选</van-tab>
  <van-tab title="研究员">按研究员选</van-tab>
</van-tabs>
</template>

<script>
import TimeSelect from '../components/TimeBook/TimeSelect.vue'
export default {
  name: 'TimeBook',
  components:{
    TimeSelect
  },
  data() {
    return {
      type: 1,
    }
  }
}
</script>