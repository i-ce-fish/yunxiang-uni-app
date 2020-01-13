<template>
	<view class="uni-flex ">
		<view class="uni-inline-item y-form-item ">
			选择日期范围:
		</view>
		<view class="uni-flex-item y-form-item">
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="y-form-value">从{{date}}</view>
			</picker>
		</view>
		<view class="uni-flex-item y-form-item">
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="y-form-value">至{{date}}</view>
			</picker>
		</view>
	</view>
</template>

<script>
	function getDate(type) {
		const date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;

		return `${year}-${month}-${day}`;
	}

	export default {
		data() {
			return {
				date: getDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end')

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
