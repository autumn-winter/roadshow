<template>
  <div>
    <form>
      <div class="wrapper">
        <p class="title">路演主题</p>
        <input type="text" v-model="theme" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">研究员</p>
        <input type="text" v-model="researcher" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">路演地点</p>
        <input type="text" v-model="address" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">钻石客户路演时间</p>
        <input type="text" v-model="datetime" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">业务人员</p>
        <input type="text" v-model="persons" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">钻石客户名称</p>
        <input type="text" v-model="name" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">钻石客户办公地址</p>
        <input type="text" v-model="nameaddress" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">钻石客户对接人姓名</p>
        <input type="text" v-model="dname" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">钻石客户对接人职位</p>
        <input type="text" v-model="dposition" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">钻石客户对接人电话</p>
        <input type="text" v-model="dtel" class="value">
        <div class="line"></div>
      </div>
      <button @click.prevent="$router.go(-1)">上一步</button>
      <input @click.prevent="submitForm" type="submit" value="提交" >
    </form>
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
  color: #333333;
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