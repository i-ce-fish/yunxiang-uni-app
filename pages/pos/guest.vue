<template>
	<view class="container ">
		<view class="tui-flex-box tui-white">
			<view class="tui-flex tui-align-center header">
				<view>
					顾客扫码，发手机号到店铺微信
				</view>
			</view>
			<view class="tui-flex tui-align-center">
				<view class="qrcode">
					<image style="width: 100px; height: 100px;" src="../../static/img/qrcode.png"></image>
				</view>
			</view>
		</view>
		<view>
		</view>
		<view class="form">
			<form>
				<tui-list-cell :hover="false">
					<view class="tui-line-cell">
						<view class="tui-title">会员手机</view>
						<input placeholder-class="phcolor" class="tui-input" name="name" placeholder="请输入会员手机" maxlength="50" type="text" />
					</view>
				</tui-list-cell>
				<view class="tui-btn-box">
					<tui-button type="blue" shape="circle" @click="go('member-info')">查询</tui-button>
					<tui-button class="btn-gray" type="gray" shape="circle">注册</tui-button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiButton from "@/components/extend/button/button"
	export default {
		components: {
			tuiListCell,
			tuiButton
		},
		data() {
			return {}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.header{
		margin: 60rpx 0;
	}
	.form {
		padding-top: 30rpx;
	}

	.tui-line-cell {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.tui-input {
		font-size: 32rpx;
		color: #333;
		padding-left: 20rpx;
		flex: 1;
	}

	.tui-btn-box {
		padding: 40rpx 50rpx;
		box-sizing: border-box;
	}

	.btn-gray {
		margin-top: 30rpx;
	}
</style>
