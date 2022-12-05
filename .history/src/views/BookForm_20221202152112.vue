<template>
  <van-form validate-first @failed="onFailed">
    <!-- 通过 pattern 进行正则校验 -->
    <van-field
      v-model="theme"
      name="pattern"
      label="路演主题"
      placeholder="正则校验"
      :rules="[{ pattern, message: '请输入正确内容' }]"
    />
    <!-- 通过 validator 进行函数校验 -->
    <van-field
      v-model="value2"
      name="validator"
      placeholder="函数校验"
      :rules="[{ validator, message: '请输入正确内容' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      pattern: /\d{6}/,
    };
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>