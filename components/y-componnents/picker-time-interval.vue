<template>
	<view class="uni-flex">
		<view class="uni-inline-item y-form-item">
			选择时间范围:
		</view>
		<view class="uni-flex-item y-form-item">
			<picker mode="time" :value="time" start="06:00" @change="bindTimeChange">
				<view>从{{time}}</view>
			</picker>
		</view>
		<view class="uni-flex-item y-form-item">
			<picker mode="time" :value="time" start="06:00" @change="bindTimeChange">
				<view>至{{time}}</view>
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
