<template>
  <div>
    <div class="wrapper">
      <span class="title font">路演主题</span>
      <span class="value font">{{form.theme}}</span>
    </div>
    <div class="wrapper">
      <span class="title font">研究员</span>
      <span class="value font">{{form.researcher}}</span>
    </div>
    <div class="wrapper">
      <span class="title font">路演地点</span>
      <span class="value font">{{form.address}}</span>
    </div>
    <div class="wrapper">
      <span class="title font">路演时间</span>
      <span class="value font">{{form.datetime}}</span>
    </div>
    <div class="wrapper">
      <span class="title font">业务人员</span>
      <span class="value font">{{form.persons}}</span>
    </div>
    <div class="wrapper">
      <span class="title font">钻石客户名称</span>
      <span class="value font">{{form.name}}</span>
    </div>
    <div class="wrapper">
      <span class="title font">钻石客户办公地址</span>
      <span class="value font">{{form.nameaddress}}</span>
    </div>
    <div class="wrapper">
      <span class="title font">钻石客户对接人姓名</span>
      <span class="value font">{{form.dname}}</span>
    </div>
    <div class="wrapper">
      <span class="title font">钻石客户对接人职位</span>
      <span class="value font">{{form.dposition}}</span>
    </div>
    <div class="wrapper">
      <span class="title font">钻石客户对接人电话</span>
      <span class="value font">{{form.dtel}}</span>
    </div>
  </div>

</template>

<script>
export default {
  name:'BookDetail',
  data() {
    return {
      form: {},
    }
  },
  created() {
    this.form = this.$store.state.now_bookdetail.form
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
  width: $main-width;
  height: auto;
  padding: 17px 16px;
  border-bottom: 0.5px solid #777777;
  overflow: hidden;
}
.font {
  font-size: $main-fsize;
  font-family: $main-font;
  font-weight: $main-fweight;
  line-height: 20px;
}
.title {
  float: left;
  margin: 0;
  text-align: left;
  color: #999999;
}
.value {
  float: right;
  width: 177px;
  text-align: right;
  overflow-wrap: break-word;
  white-space: normal;
}
</style>