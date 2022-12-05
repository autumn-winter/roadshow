<!-- <template>
  <div>
    <button @click="a">z</button>
    <van-calendar
  title="日历"
  :poppable="false"
  :show-confirm="false"
  :style="{ height: '500px' }"
  ref="cal"
/>
    
  </div>
</template>

<script>
export default {
  name: 'TimeSelect',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    a:function() {
      this.$refs.cal.scrollToDate(new Date(2024,12))
      console.log("hhh")
    }
  }
}
</script>

<style lang="scss" scoped>

</style> -->

<!--我的 -->
<template>
	<div class="lalal">
		<img src="../assets/img/timeBook/timeSelect/icon／18／通知.jpg" class="img1" @click="arrowLeft()">
		<img src="../assets/img/timeBook/timeSelect/icon／18／通知备份.jpg" class="img2" @click="arrowRight()">
		<van-calendar :show-confirm="false" @confirm="onConfirm" :default-date="defaultDate" :min-date="minDate"
			:max-date="maxDate" :poppable="false" :show-title="false" :show-mark="false" row-height="40" />
	</div>
</template>
<script>
	export default {
		name: 'date',
		data() {
			return {
				date: '',
				show: false,
				minDate: new Date(),
				maxDate: new Date(),
				defaultDate: new Date(),
				// dutyList: [],
				cont: 0,
				year: new Date().getFullYear(),
				month: new Date().getMonth(),
				nowDay: new Date().getDate(),
			};
		},
		created() {
			this.setMinMaxDay();
		},
		methods: {
			formatDate(date) {
				let months = date.getMonth() + 1;
				let days = date.getDate();
				if (months < 10) {
					if (days < 10) {
						return `${date.getFullYear()}.${"0" + months}.${"0" + days}`
					} else {
						return `${date.getFullYear()}.${"0" + months}.${days}`;
					}

				} else {
					if (days < 10) {
						return `${date.getFullYear()}.${months}.${"0" + days}`
					} else {
						return `${date.getFullYear()}.${months}.${days}`;
					}
				}
			},
			onConfirm(date) {
				this.show = false;
				this.date = this.formatDate(date);
				//此处的putData是在父组件中监听的事件名称，即v-on：后面的名字，data就是需要往父组件传递的数据。
				// $emit("事件名称","传递参数1","传递的参数2"....)
				this.$emit('putData', this.date);
			},
			showPopup() {
				this.show = true;
			},
			// 设置显示月份可选择的天数区间
			setMinMaxDay() {
				let minYear = new Date(2021, 5, 15).getFullYear();
				let minMonth = new Date(2021, 5, 15).getMonth();
				let maxYear = new Date().getFullYear();
				let maxMonth = new Date().getMonth() + 1;
				let nowYear = this.defaultDate.getFullYear();
				let nowMonth = this.defaultDate.getMonth() + 1;
				if (maxYear == nowYear && nowMonth == maxMonth) {
					var firstDay = new Date(this.defaultDate);
					firstDay.setDate(1);
					this.minDate = new Date(
						nowYear,
						nowMonth - 1,
						firstDay.getDate()
					);
					var endDate = new Date(this.defaultDate);
					endDate.setDate(new Date().getDate());
					this.maxDate = new Date(
						nowYear,
						nowMonth - 1,
						endDate.getDate()
					);
				} else if (nowYear == minYear) {
					if (nowMonth == minMonth) {
						var firstDay = new Date(2021, 5, 15);
						firstDay.setDate(15);
						this.minDate = new Date(
							nowYear,
							nowMonth - 1,
							firstDay.getDate()
						);
						var endDate = new Date(this.defaultDate);
						endDate.setMonth(this.defaultDate.getMonth() + 1);
						endDate.setDate(0);
						this.maxDate = new Date(
							nowYear,
							nowMonth - 1,
							endDate.getDate()
						);
					} else {
						var firstDay = new Date(this.defaultDate);
						firstDay.setDate(1);
						this.minDate = new Date(
							this.year,
							this.month + this.cont,
							firstDay.getDate()
						);
						var endDate = new Date(this.defaultDate);
						endDate.setMonth(this.defaultDate.getMonth() + 1);
						endDate.setDate(0);
						this.maxDate = new Date(
							this.year,
							this.month + this.cont,
							endDate.getDate()
						);
					}

				}

			},
			// 当前月上一个月
			arrowLeft() {
				let minYear = new Date(2021, 5, 15).getFullYear();
				let minMonth = new Date(2021, 5, 15).getMonth();
				let nowYear = this.defaultDate.getFullYear();
				let nowMonth = this.defaultDate.getMonth() + 1;
				if (nowYear > minYear) {
					this.cont--;
					this.defaultDate = new Date(
						this.year,
						this.month + this.cont,
						this.nowDay
					);
				}
				if (nowYear == minYear && nowMonth > minMonth) {
					this.cont--;
					this.defaultDate = new Date(
						this.year,
						this.month + this.cont,
						this.nowDay
					);
				}
				this.setMinMaxDay();
			},
			// 当前月下一个月
			arrowRight() {
				let maxYear = new Date().getFullYear();
				let maxMonth = new Date().getMonth();
				let nowYear = this.defaultDate.getFullYear();
				let nowMonth = this.defaultDate.getMonth();
				if (nowYear < maxYear) {
					this.cont++;
					this.defaultDate = new Date(
						this.year,
						this.month + this.cont,
						this.nowDay
					);
				}
				if (nowYear == maxYear && nowMonth < maxMonth) {
					this.cont++;
					this.defaultDate = new Date(
						this.year,
						this.month + this.cont,
						this.nowDay
					);
				}
				this.setMinMaxDay();
			},
		},
	};
</script>
<style>
	/* .van-calendar__header-title {
		display: none;
	}
 */
	.van-icon-cross::before {
		content: '';
	}

	.van-calendar__header-subtitle {
		font-size: 16px;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: center;
		color: #333333;
		width: 116px;
		padding-top: 20px;
		padding-left: 123px;
	}

	.van-calendar__weekday {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		line-height: 0.8rem;
		text-align: center;
		opacity: 0.65;
		font-size: 14px;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		color: #666666;
	}

	.van-calendar__selected-day {
		width: 37px;
		height: 37px;
		color: #fff;
		background-color: #4E7CFD;
		border-radius: 50%;
	}

	.van-calendar__day {
		position: relative;
		width: 14.285%;
		cursor: pointer;
		height: 20px;
		/* background: #666666; */
		font-size: 14px;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: center;
		line-height: 20px;
	}

	.img1,
	.img2 {
		width: 22px;
		height: 22px;
		background: #f2f2f2;
		border-radius: 6px;
	}

	.img1 {
		position: absolute;
		top: 23px;
		left: 85px;
	}

	.img2 {
		position: absolute;
		top: 24px;
		right: 90px;
	}
</style>

