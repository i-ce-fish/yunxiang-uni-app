<template>
	<view class="y-body-bg">
		<search></search>

		<picker-label></picker-label>
		<picker-date></picker-date>
		<pickerDateInterval></pickerDateInterval>
		<cheackbox></cheackbox>
		<y-radio></y-radio>
		<y-time></y-time>
		<y-time-interval></y-time-interval>
		<view class="y-margin-bottom">
		</view>
		<view class="uni-list">
			<y-input></y-input>
			<inputLabelTemp style="height: 200rpx;"></inputLabelTemp>
			<inputLabelTemp></inputLabelTemp>
			<inputLabelTemp></inputLabelTemp>
			<selectLabel @tap="go('selectSex')"></selectLabel>
		</view>

		<view class="uni-list">
			<view style="height: 200rpx;" class="uni-list-cell y-list-cell">
				<input-label label="名称" :requireStar="true"></input-label>
			</view>
			<view class="uni-list-cell y-list-cell">
				<input-label label="性别"></input-label>
			</view>
			<view class="uni-list-cell y-list-cell">
				<input-label label="日期"></input-label>
			</view>
			<view class="uni-list-cell y-list-cell">
				<input-label label="时间时间"></input-label>
			</view>
		</view>

	</view>

</template>

<script>
	import inputLabel from '../../components/y-componnents/input-label.vue'
	import pickerLabel from '../../components/y-componnents/picker-label.vue'
	import pickerDate from '../../components/y-componnents/picker-date.vue'
	import pickerDateInterval from '../../components/y-componnents/picker-date-interval.vue'
	import search from '../../components/y-componnents/search-bar.vue'
	import cheackbox from '../../components/y-componnents/checkbox.vue'
	import yRadio from '../../components/y-componnents/radio.vue'
	import yTime from '../../components/y-componnents/picker-time.vue'
	import yTimeInterval from '../../components/y-componnents/picker-time-interval.vue'
	import inputLabelTemp from '../../components/y-componnents/input-label-1.vue'
	import selectLabel from '../../components/y-componnents/select-label.vue'
	import yInput from '../../components/y-componnents/y-input.vue'
	export default {
		components: {
			selectLabel,
			pickerLabel,
			inputLabel,
			pickerDate,
			pickerDateInterval,
			search,
			cheackbox,
			yRadio,
			yTime,
			yTimeInterval,
			inputLabelTemp,
			yInput
		},
		data() {
			return {
				show: false,
				name: "名称:"
			};
		},
		mounted() {


		},
		methods: {
			test() {
				this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="scss">
	.uni-input-wrapper {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		padding: 8px 13px;
		flex-direction: row;
		flex-wrap: nowrap;
		background-color: #FFFFFF;
	}

	.uni-input {
		height: 28px;
		line-height: 28px;
		font-size: 15px;
		padding: 0px;
		flex: 1;
		background-color: #FFFFFF;
	}

	.uni-icon {
		font-family: uniicons;
		font-size: 24px;
		font-weight: normal;
		font-style: normal;
		width: 24px;
		height: 24px;
		line-height: 24px;
		color: #999999;
	}

	.uni-eye-active {
		color: #007AFF;
	}

	.card {
		background-color: #FFFFFF;
		width: 300rpx;

	}

	.y-list-cell {
		display: block;
		padding: 0 30rpx
	}
</style>
