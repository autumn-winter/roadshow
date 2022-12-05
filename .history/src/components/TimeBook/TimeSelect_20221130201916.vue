<template>
  <div>
    <button @click="a">z</button>
    <van-calendar
  title="日历"
  :poppable="false"
  :show-confirm="false"
  :style="{ height: '500px' }"
  ref="cal"
/>
    
  </div>
</template>

<script>
export default {
  name: 'TimeSelect',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    a:function() {
      this.$refs.cal.scrollToDate(new Date(2024,12))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>