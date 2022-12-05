<template>
  <van-form validate-first @failed="onFailed">
    <van-field
      v-model="theme"
      name="theme"
      label="路演主题"
    />
    <van-field
      v-model="researcher"
      name="researcher"
      label="研究员"
    />
    <van-field
      v-model="address"
      name="address"
      label="路演地点"
    />
    <van-field
      v-model="datetime"
      name="datetime"
      label="钻石客户路演时间"
    />
    <van-field
      v-model="persons"
      name="persons"
      label="业务人员"
    />
    <van-field
      v-model="name"
      name="name"
      label="钻石客户名称"
    />
    <van-field
      v-model="nameaddress"
      name="nameaddress"
      label="钻石客户办公地址"
    />
    <van-field
      v-model="dname"
      name="dname"
      label="钻石客户对接人姓名"
    />
    <van-field
      v-model="dposition"
      name="dposition"
      label="钻石客户对接人职位"
    />
    <van-field
      v-model="dtel"
      name="dtel"
      label="钻石客户对接人电话"
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
      theme: '',
      researcher: '',
      address: '',
      datetime: '',
      persons: '',
      name: '',
      nameaddress: '',
      dname: '',
      dposition: '',
      dtel: '',
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
/deep/ .van-cell {
    height: 80px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 0.267rem 0.427rem;
    overflow: hidden;
    color: #323233;
    font-size: 0.373rem;
    line-height: 0.64rem;
    background-color: #fff;
}
</style>