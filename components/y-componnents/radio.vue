<template>
	<view class="uni-flex">
		<view class="uni-inline-item y-form-item">
			单选按钮:
		</view>
		<view class="  uni-flex-item y-form-item">
			<label style="margin-right: 30upx;">
				<radio value="r1" checked="true" />选中
			</label>
			<label>
				<radio value="r2" />未选中
			</label>
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
