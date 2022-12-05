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
      <div class="btn" @click="$router.go(-1)">
        <span class="lastbtnFont">上一步</span>
      </div>
      <button  ></button>
      <input @click.prevent="submitForm" type="submit" value="提交" class="subbtn">
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

.btn {
  margin: 16px 17px 0;
  box-sizing: border-box;
  padding: 12px 55px;
  width: 163px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #3983FF;
}
.lastbtnFont {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #3983FF;
  line-height: 25px;
}
</style>