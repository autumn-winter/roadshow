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
        <a-select
          show-search
          style="width: 343px"
          :filter-option="filterOption"
          @change="handleChange"
        >
          <a-select-option v-for="(o,index) in options" :key="index" :value="o">
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
import { Toast } from 'vant';
import { Dialog } from 'vant';
Dialog.setDefaultOptions('confirmButtonColor','#3983FF')
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
      options: ['王建','王建国','王建军','王建业','王建安','王建全','李林','李全']

    };
  },
  methods: {
    submitForm() {
      let isFull = true
      for(let value of Object.values(this.form)) {
        if(!value) {
          isFull = false
        }
      }
      if(!isFull) {
        Toast.fail('请全部填写');
      }else {
        Dialog.confirm({
          title: '提示',
          message: '您确定要提交预约申请吗？',
        })
          .then(() => {
            // on confirm
            this.$store.commit('submit_bookform',this.form)
            console.log(this.$store,this.$store.bookform_data)
            this.$router.push({ path: '/booksuccess'})
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    handleChange(value) {
       this.form.name= value
       console.log(this.form.name)
    },
  },
  created() {
    this.datetime = this.$store.state.datetime
    this.researcher = this.$store.state.book_researcher
  }
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

/deep/ .ant-select-selection--single .ant-select-selection__rendered {
    margin: 0;
    height: 22px;
}
/deep/ .ant-select-selection {
    display: block;
    box-sizing: border-box;
    background-color: #fff;
    border-width: 0;
    outline: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
/deep/ .ant-select-focused .ant-select-selection, .ant-select-open .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active, .ant-select-selection:hover{
  border-width: 0;
  outline: 0;
}
/deep/ .ant-select-selection-selected-value {
    float: left;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 22px;
    border-width: 0;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 22px;
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