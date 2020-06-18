<template>
	<view>
		<view class='tui-notice-board' @tap="showAlert">
			<view class="tui-icon-bg">
				<tui-icon name="news-fill" :size='24' color='#de8c17'></tui-icon>
			</view>
			<view class="tui-scorll-view">
				<view class="tui-notice ">会员13611605568，三级，优惠券2张，储值卡¥290，生日1994年10月20日。推荐人五级</view>
			</view>
		</view>
		<!--alert-->
		<tui-alert :show="show" @click="hideAlert" @cancel="hideAlert"  >
			<slot></slot>
		</tui-alert>
	</view>
</template>

<script>
	import tuiAlert from "@/components/extend/alert/alert"
	import tuiIcon from "@/components/icon/icon"

	export default {
		components: {
			tuiAlert,
			tuiIcon
		},
		props: {},
		data() {
			return {
				// alert
				show: false,
			}
		},
		methods: {
			// alert
			showAlert() {
				this.show = true
			},
			hideAlert() {
				this.show = false
			}
		}
	}
</script>

<style>
	/*  noticeBar */
	.tui-notice-board {
		width: 100%;
		padding-right: 30rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		height: 80rpx;
		background: #fff8d5;
		display: flex;
		align-items: center;
	}

	.tui-icon-bg {
		background: #fff8d5;
		padding-left: 30rpx;
		position: relative;
		z-index: 10;
	}

	.tui-icon-class {
		margin-right: 12rpx;
	}

	.tui-scorll-view {
		flex: 1;
		line-height: 1;
		/* 可以换行 */
		/* white-space: nowrap; */
		/* overflow: hidden; */
		color: #de8c17;
	}

	.tui-notice{
		line-height: 35rpx;
	}
</style>
