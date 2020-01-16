<template>
	<!-- <view class="uni-padding-wrap uni-common-mt">
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
			<input type="text" value="" class="uni-input" placeholder="推荐人手机号" />
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
				<button type="primary" @tap="confirmMember">开始收银</button>
			</view>
		</view>
	</view> -->
	<view class="container">
		<view class="header tui-flex">
			<view class=" tui-col-6">
				<tui-list-cell @click="detail" :hover="false">
					姓名: 123
				</tui-list-cell>
				<tui-list-cell @click="detail" :hover="false">
					手机: 12345678901
				</tui-list-cell>
				<tui-list-cell @click="detail" :hover="false">
					会员等级: 1
				</tui-list-cell>
				<tui-list-cell @click="detail" :hover="false">
					性别: 男
				</tui-list-cell>
				<tui-list-cell @click="detail" :hover="false">
					积分: 223
				</tui-list-cell>
				<tui-list-cell @click="detail" :hover="false">
					卡券: 2
				</tui-list-cell>
			</view>
			<view class="tui-flex tui-col-6">
				<image src="../../static/img/qq.png" style="width: 100%;height: 100%;" mode="aspectFit"></image>
			</view>
		</view>
		<view class="middle ">
			<view class="tui-col-12 ">
				<tui-list-cell :hover="false">
					<view class="tui-line-cell tui-flex">
						<view class="tui-title">分享人手机</view>
						<input placeholder-class="phcolor" class="tui-input" name="name" placeholder="请输入分享人手机" maxlength="50" type="text" />
					</view>
				</tui-list-cell>
				<view class="tui-flex">
					<view class=" tui-col-6">
						<tui-list-cell @click="detail" :hover="false">
							分享人姓名: 123
						</tui-list-cell>
						<tui-list-cell @click="detail" :hover="false">
							分享人会员等级: 1
						</tui-list-cell>
						<tui-list-cell @click="detail" :hover="false">
							分享券: 2
						</tui-list-cell>
					</view>
					<view class="tui-flex tui-col-6">
						<image src="../../static/img/qq.png" style="width: 100%;height: 100%;" mode="aspectFit"></image>
					</view>
				</view>
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
	.header,
	.middle {
		background-color: #FFFFFF;
		margin-bottom: 30rpx;
	}

	.tui-input {
		padding-left: 20rpx;
	}
</style>
