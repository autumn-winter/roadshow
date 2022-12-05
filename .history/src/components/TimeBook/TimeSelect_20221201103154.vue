<template>
  <div>
    <van-calendar
      color="#3983FF"
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
      console.log("hhh")
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .van-calendar__header-title {
    display: none;
}

/deep/ .van-calendar__selected-day {
    // width: 1.44rem;
    // height: 1.44rem;
    // color: #fff;
    // background-color: #ee0a24;
    border-radius: 50%;
}
</style>
