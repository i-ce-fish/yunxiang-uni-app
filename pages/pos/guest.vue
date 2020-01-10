<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-flex" style="-webkit-justify-content: center;justify-content: center;">
				<view class="text">扫码添加微信</view>
			</view>
			<view class="uni-flex" style="-webkit-justify-content: center;justify-content: center;">
				<view class="qrcode">
					<image style="width: 100px; height: 100px;" src="../../static/img/qrcode.png"></image>
				</view>
			</view>
			<view class="uni-flex" style="-webkit-justify-content: center;justify-content: center;">
				<view class="text">查询会员</view>
			</view>
			<view class="uni-row-margin uni-form-item uni-column">
				<view class="uni-flex uni-row-margin">
					<view class="text" style="-webkit-flex: 1;flex: 1;">
						<input class="uni-input" type="number" maxlength="11" placeholder="请输入会员手机号" />
					</view>
				</view>
			<!-- 	<view class="uni-flex uni-row-margin">
					<view class="text" style="-webkit-flex: 1;flex: 1;">
						<input class="uni-input" type="number" maxlength="11" placeholder="请输入分享人手机号" />
					</view>
				</view> -->
			</view>

			<view class="uni-row-margin">
				<button type="primary" @tap="getMember">查询</button>
			</view>
<view class="uni-row-margin uni-flex">
	
	<view class="uni-flex-item">
		<button type="default">注册</button>
	</view>
	<view class="uni-flex-item">
		<button type="default">非会员买单</button>
	</view>
</view>
		 

		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {}
		},
		methods: {
			getMember() {
				uni.navigateTo({
					url: "member-info"
				})
			}
		}
	}
</script>

<style lang="scss">
	.text {
		margin: 15rpx 10rpx;
		padding: 0 20rpx;
		height: 50rpx;
		line-height: 70rpx;
		text-align: center;
		color: #777;
		font-size: 26rpx;
	}
</style>
