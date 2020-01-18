<template>
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
				<view class="tui-list-cell">

					<image src="../../static/img/qq.png" style="width: 100%;height: 100%;" mode="aspectFit"></image>
				</view>
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
					<view class=" tui-flex tui-col-6 ">
						<view class="tui-list-cell">

							<image src="../../static/img/qq.png" style="width: 100%;height: 100%;" mode="aspectFit"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="tui-btn-box">
			<tui-button type="blue" shape="circle" @click="go('add-product')">开始收银</tui-button>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {

			}
		},
		methods: {

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
