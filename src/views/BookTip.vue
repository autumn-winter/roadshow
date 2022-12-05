<template>
  <div>
    <div class="textWrapper">
      <p class="name font"> 钻石客户路演预约机制</p>
      <div class="bookContent font">
        <p class="paragraph">1. 2021年12月22日-2021年12月24日为钻石客户锁定期，钻石客户服务预约将不定期高频在本群更新，请各位随时留意。<br/></p>
        <p class="paragraph">2. 考虑客户信息隐私，各位客户经理请在接龙表中，按照“路演时间段+业务部门+客户经理+线上/线下+研究员”进行接龙预约制，时间段为先填报先得的机制。<br/></p>
        <p class="paragraph">3. 各位客户经理在钻石客户服务群接龙表中填报完时间后，及时将联系信息私信发给李彦徵。“客户公司名称，钻石客户对接方人员，岗位，职级，钻石客户方对接电话”<br/></p>
        <p class="paragraph">举例：中华崛起基金，甄章庭，量化，研究员，<span class="telFont">13912345678</span> <br/></p>
        <p class="paragraph">4. 注意： <br/></p>
        <p class="paragraph">⑴ 若预约后的6小时内未提供联系信息，则从预约表中删除该路演安排。 <br/></p>
        <p class="paragraph">⑵ 在接龙表中，填写的客户经理必须为预约本人，暂不接受各部门运营人员预约。<br/></p>
        <p class="paragraph">⑶ 请各位客户经理按需填报，如后期钻石客户服务过程中出现超过50%的取消率/改期率，将会限制您后期的预约。 <br/></p>
        <p class="paragraph">⑷ 一切以【钻石客户路演预约机制】为准，未能按要求填报的将直接取消该项预约。 <br/></p>
        <p class="paragraph">⑸ 本群内所有研究部主动提供对钻石客户的研究服务都是免研究券的，免费服务。<br/></p>
      </div>
    </div>
    <div class="btn" @click="$router.push({ path:'/bookpage'})">
      <p class="btnFont">前往在线自助预约</p>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../styles/img.scss'; 
.textWrapper {
  height: 600px;
  overflow: scroll;
}
.btn{
  margin: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  @include bg-image-2('../assets/img/bookTip/矩形', 343px, 50px); 
}
.btnFont {
  margin: 0;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 25px;
}
.font {
  text-align: left;
  font-family: PingFangSC-Medium, PingFang SC;
  color: #333333;
}
.name {
  margin-top: 17px;
  margin-left: 16px;
  font-size: 18px;
  font-weight: 500;
}
.bookContent {
  margin: 17px 16px 0 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  line-height: 26px;
}
.paragraph {
  margin: 10px 0;
}
.telFont {
  color: #3983FF;
}
</style>
