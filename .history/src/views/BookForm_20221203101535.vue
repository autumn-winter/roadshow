<template>
  <div>
    <form>
      <div class="wrapper">
        <p class="title">路演主题</p>
        <input type="text" v-model="form.theme" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">研究员</p>
        <input type="text" v-model="form.researcher" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">路演地点</p>
        <input type="text" v-model="form.address" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">钻石客户路演时间</p>
        <input type="text" v-model="form.datetime" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">业务人员</p>
        <input type="text" v-model="form.persons" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">钻石客户名称</p>
        <!-- <select v-model="form.name">
          <option v-for="o,item in options" >{{o}}</option>
        </select> -->
        <a-select
          show-search
          style="width: 200px"
          :filter-option="filterOption"
          @change="handleChange"
        >
          <a-select-option v-for="((o,index)) in options" :key="index" value="o">
            {{o}}
          </a-select-option>
        </a-select>
        <!-- <input type="text" v-model="name" class="value"> -->
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">钻石客户办公地址</p>
        <input type="text" v-model="form.nameaddress" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">钻石客户对接人姓名</p>
        <input type="text" v-model="form.dname" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">钻石客户对接人职位</p>
        <input type="text" v-model="form.dposition" class="value">
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <p class="title">钻石客户对接人电话</p>
        <input type="text" v-model="form.dtel" class="value">
        <div class="line"></div>
      </div>
      <div class="btn" @click="$router.go(-1)">
        <span class="lastbtnFont">上一步</span>
      </div>
      <div class="sbtn" @click="submitForm">
        <span class="subFont">提交</span>
      </div>
      <!-- <input @click.prevent="submitForm" type="submit" value="提交" class="subbtn"> -->
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form : {
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
      },
      options: ['王']

    };
  },
  methods: {
    submitForm() {
      console.log(this.theme)
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    handleChange(value) {
       this.name= value
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
  float: left;
  margin: 16px 16px 0;
  box-sizing: border-box;
  padding: 11px 53px;
  width: 163px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #3983FF;
}
.lastbtnFont {
  height: 25px;
  font-size: 18px;
  font-weight: 400;
  color: #3983FF;
  line-height: 25px;
}
.sbtn {
  float: right;
  margin: 16px 16px 0 0;
  box-sizing: border-box;
  padding: 11px 62px;
  width: 163px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #3983FF;
  background-color: #3983FF;
}
.subFont {
  height: 25px;
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 25px;
}
</style>