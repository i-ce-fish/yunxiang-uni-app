<template>
	<view class="uni-flex">
		<view class="y-form-item uni-inline-item  ">
			选择时间:
		</view>
		<view class="y-form-item uni-flex-item  uni-row">
			<picker mode="time" :value="time" start="06:00" @change="bindTimeChange">
				<view>{{time}}</view>
			</picker>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time: '12:01'

			}
		},
		methods: {
			bindTimeChange: function(e) {
				this.time = e.target.value
			}
		}
	}
</script>

<style>

</style>
