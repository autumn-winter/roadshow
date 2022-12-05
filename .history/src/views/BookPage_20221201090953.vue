<template>
  <div>
    <van-tabs @click="typeClick">
      <van-tab title="time"></van-tab>
      <van-tab title="researcher">按研究员选</van-tab>
    </van-tabs>
    <div v-if="isTimetype">
      <TimeSelect></TimeSelect>
    </div>
    <div v-else>
      
    </div>
  </div>
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
      type: 0,
      isTimetype: true,
    }
  },
  methods: {
    typeClick(name, title) {
      if(title=='time'){
        this.isTimetype = true
      }else{
        this.isTimetype = false
      }
    },
  },
}
</script>