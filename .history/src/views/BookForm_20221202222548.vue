<template>
  <div>
    <form action="" method="post" >
      <div class="wrapper">
        <p class="title">路演主题</p>
        <input type="text" v-model="theme" class="value">
        <div class="line"></div>
      </div>
      <span>研究员</span><br>
      <input type="text" name="firstname">
      <span>路演地点</span><br>
      <input type="text" name="firstname">
      <span>路演主题</span><br>
      <input type="text" name="firstname">
      <span>路演主题</span><br>
      <input type="text" name="firstname">
      <span>路演主题</span><br>
      <input type="text" name="firstname">
      <span>路演主题</span><br>
      <input type="text" name="firstname">
      <span>路演主题</span><br>
      <input type="text" name="firstname">
      <button @click.prevent="$router.go(-1)">上一步</button>
      <input @click.prevent="submitForm" type="submit" value="提交" >
    </form>
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
  </div>
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
    submitForm() {
      console.log(this.theme)
    },
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
.wrapper {
  box-sizing: border-box;
  width: 375px;
  height: 80px;
  padding: 17px 26px 0;
}
.title {
  margin: 0;
  text-align: left;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 20px;
}
.value {
  margin-top: 4px;
  text-align: left;
  width: 100%;
  height: 22px;
  border-width: 0;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #777777;
  line-height: 22px;
}
.line {
  width: 100%;
  height: 17px;
  border-bottom: 0.5px solid #777777;
}
/deep/ .van-cell {
    height: 80px;
    position: relative;
    display: flex;
    // display: -webkit-flex;
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
/deep/ .van-field__label {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 20px;
  height: 20px;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  box-sizing: border-box;
  width: 100%;
  margin-right: 0.32rem;
  text-align: left;
  word-wrap: break-word;
}
/deep/ .van-cell__value {
  width: 375px;
  height: 22px;
  position: relative;
  overflow: hidden;
  color: #969799;
  text-align: right;
  vertical-align: middle;
  word-wrap: break-word;
}
</style>