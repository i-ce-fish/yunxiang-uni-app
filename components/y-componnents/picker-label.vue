<template>
	<view class="uni-flex">
		<view class="uni-inline-item">
			<view class="y-form-item">
				下拉选择:
			</view>
		</view>
		<view class="uni-row uni-flex-item">
			<picker  @change="bindPickerChange" :value="index" :range="array" range-key="name">
				<view class="y-form-item">{{array[index].name}}</view>
			</picker>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: [{
					name: '现金'
				}, {
					name: '微信'
				}, {
					name: '支付'
				}, {
					name: '储值卡'
				}, {
					name: '信用卡'
				}],
				index: 0
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.target.value)
				this.index = e.target.value
			}
		}
	}
</script>

<style>
 
</style>
