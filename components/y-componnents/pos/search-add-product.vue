<template>
	<view class="uni-flex uni-row-margin">
		<view class="uni-flex-item">
			<input class="uni-input" type="text" v-model="barcode" placeholder="请扫码" />
		</view>
		<view class="uni-inline-item" @tap="scan">
			点击扫码
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				barcode:''
			};
		},methods:{
			scan() {
				// todo BUG  不可用的
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
