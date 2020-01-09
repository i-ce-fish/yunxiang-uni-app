<template>
	<view class="uni-padding-wrap uni-common-mt">
		<view class="uni-flex">
			<view class="uni-flex-item">
				<view class="uni-flex uni-row-margin">
					<view class="text" style="-webkit-flex: 1;flex: 1;">姓名：123</view>
				</view>
				<view class="uni-flex uni-row-margin">
					<view class="text" style="-webkit-flex: 1;flex: 1;">手机：12345678901</view>
				</view>
				<view class="uni-flex uni-row-margin">
					<view class="text" style="-webkit-flex: 1;flex: 1;">会员等级：1</view>
				</view>
				<view class="uni-flex uni-row-margin">
					<view class="text uni-flex-item"  >性别：1</view>
				</view>
				<view class="uni-flex uni-row-margin">
					<view class="text" style="-webkit-flex: 1;flex: 1;">积分：123</view>
				</view>
				<view class="uni-flex uni-row-margin">
					<view class="text" style="-webkit-flex: 1;flex: 1;">卡券：1</view>
				</view>
			</view>

			<view class="uni-flex-item">
				<view >
					<image src="../../static/img/qq.png" style="width: 100px;height: 100px;" mode=""></image>
				</view>
			</view>		
		</view>
		<view class="uni-row-margin y-border">
		</view>
		<view class="uni-flex">
			<view class="" style="-webkit-flex: 1;flex: 1;">
				<view class="uni-flex uni-row-margin">
					<view class="text" style="-webkit-flex: 1;flex: 1;"> 分享人姓名：1</view>
				</view>
				<view class="uni-flex uni-row-margin">
					<view class="text" style="-webkit-flex: 1;flex: 1;">分享人手机：12345678901</view>
				</view>
				<view class="uni-flex uni-row-margin">
					<view class="text" style="-webkit-flex: 1;flex: 1;">会员等级：123</view>
				</view>
				<view class="uni-flex uni-row-margin">
					<view class="text" style="-webkit-flex: 1;flex: 1;">分享券：1</view>
				</view>
			</view>

		</view>
 
		<view class="uni-flex uni-row-margin">
			<view class="text" style="-webkit-flex: 1;flex: 1;">
				<button type="primary" @tap="confirmMember">确认</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			confirmMember() {
				uni.navigateTo({
					url: 'add-product'
				})
			}
		}
	}
</script>

<style>

</style>
