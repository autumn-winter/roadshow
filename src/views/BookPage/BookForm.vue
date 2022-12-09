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
      <div class="sbtn" @click="throSubmit">
        <span class="subFont">提交</span>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { Dialog } from 'vant';
import service from '@/utils/http.js';
import { throttle } from '@/utils/helper'
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
      options: []

    };
  },
  methods: {
    submitForm() {
      const telreg =  new RegExp('^[1][3,4,5,6,7,8,9][0-9]{9}$')
      if(!telreg.test(this.form.dtel)) {
        Toast.fail('请填写正确的手机号');
        return
      }
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
          confirmButtonColor: "#3983FF",
          message: '您确定要提交预约申请吗？',
        })
          .then(() => {
            // on confirm
            this.$store.commit('submit_bookform',this.form)
            this.$store.commit('add_bookroad', this.form)
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
    },
  },
  created() {
    this.form.datetime = this.$store.state.datetime
    this.form.researcher = this.$store.state.book_researcher.rname
    this.throSubmit = throttle(this.submitForm,500)
    service.get('/namedata').then(res => {
      this.options = res
    }).catch(err => {
      console.error(err)
    })
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
  width: $main-width;
  height: 80px;
  padding: 17px 26px 0;
}
.title {
  margin: 0;
  text-align: left;
  height: 20px;
  font-size: $main-fsize;
  font-family: $main-font;
  font-weight: $main-fweight;
  color: $color-gray;
  line-height: 20px;
}
.value {
  margin-top: 4px;
  text-align: left;
  width: 100%;
  height: 22px;
  border-width: 0;
  font-size: $main-fbsize;
  font-family: $main-font;
  font-weight: $main-fweight;
  color: $color-black;
  line-height: 22px;
}
.line {
  width: 100%;
  height: 17px;
  border-bottom: 0.5px solid $color-gray;
}

.btn {
  float: left;
  margin: 16px 16px 16px;
  box-sizing: border-box;
  padding: 11px 53px;
  width: 163px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid $main-color;
}
.lastbtnFont {
  height: 25px;
  font-size: 18px;
  font-weight: $main-fweight;
  color: $main-color;
  line-height: 25px;
}
.sbtn {
  float: right;
  margin: 16px 16px 16px 0;
  box-sizing: border-box;
  padding: 11px 62px;
  width: 163px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid $main-color;
  background-color: $main-color;
}
.subFont {
  height: 25px;
  font-size: 18px;
  font-weight: $main-fweight;
  color: $color-white;
  line-height: 25px;
}
</style>