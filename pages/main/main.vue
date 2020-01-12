<template>
	<view class="content">

		<!-- 		<uni-grid :column="4" :show-border="false">
		    <uni-grid-item class="text">
				<view class="grid-item-box" @tap="clickTest">
					<uni-icons type="chatboxes" size="50"></uni-icons>
					<text class="text">logo 1</text>
				</view>
		    </uni-grid-item>
		    <uni-grid-item class="text">
				<view class="grid-item-box">
					<uni-icons type="phone" size="50"></uni-icons>
					<text class="text">logo 2</text>
				</view>
		    </uni-grid-item>
		    <uni-grid-item class="text">
				<view class="grid-item-box">
					<uni-icons type="person" size="50"></uni-icons>
					<text class="text">logo 3</text>
				</view>
		    </uni-grid-item>
			<uni-grid-item class="text">
				<view class="grid-item-box">
					<uni-icons type="chatbubble" size="50"></uni-icons>
					<text class="text">logo 4</text>
				</view>
			</uni-grid-item>
			
			<uni-grid-item class="text">
				<view class="grid-item-box">
					<uni-icons type="paperclip" size="50"></uni-icons>
					<text class="text">logo 5</text>
				</view>
			</uni-grid-item>
			<uni-grid-item class="text">
				<view class="grid-item-box">
					<uni-icons type="gear" size="50"></uni-icons>
					<text class="text">logo 6</text>
				</view>
			</uni-grid-item>
			<uni-grid-item class="text">
				<view class="grid-item-box">
					<uni-icons type="flag" size="50"></uni-icons>
					<text class="text">logo 7</text>
				</view>
			</uni-grid-item>
			<uni-grid-item class="text">
				<view class="grid-item-box">
					<uni-icons type="star" size="50"></uni-icons>
					<text class="text">logo 8</text>
				</view>
			</uni-grid-item>
		</uni-grid> -->

		<view class="pic">营销数据</view>

		<view class="uni-flex uni-row" style="margin-bottom: 14px;">
			<view class="text" style="-webkit-flex: 1;flex: 1; margin-right: 14rpx;">
				<button type="default" @tap="go('../pos/guest')">会员收银</button>
			</view>
			<view class="text" style="-webkit-flex: 1;flex: 1; margin-right: 14rpx;">
				<button type="default" @tap="go('../pos/add-product')">非会员收银 </button> </view>
			<view class="text" style="-webkit-flex: 1;flex: 1;">
				<button type="default" @tap="go('../today-order/today-order')">当日订单</button>
			</view>
		</view>
		<view class="uni-flex uni-row" style="margin-bottom: 14px;">
			<view class="text" style="-webkit-flex: 1;flex: 1; margin-right: 14rpx;">
				<button type="default" plain="true" @tap="goTab('../product/product')">商品管理</button>
			</view>
			<view class="text" style="-webkit-flex: 1;flex: 1; margin-right: 14rpx;">
				<button type="default" plain="true" @tap="go('../product/add')">商品建档</button>
			</view>
			<view class="text" style="-webkit-flex: 1;flex: 1;">
				<button type="default" plain="true" @tap="go('../product/search')">查商品</button>
			</view>
		</view>
		<view class="uni-flex uni-row" style="margin-bottom: 14px;">

			<view class="text" style="-webkit-flex: 1;flex: 1; margin-right: 14rpx;">
				<button type="default" plain="true" @tap="goTab('../inventory/inventory')">库存管理</button>
			</view>

			<view class="text" style="-webkit-flex: 1;flex: 1; margin-right: 14rpx;">
				<button type="default" plain="true" @tap="go('../inventory/add')">新入库</button>
			</view>
			<view class="text" style="-webkit-flex: 1;flex: 1 ">
				<button type="default" plain="true" @tap="go('../inventory/search')">查库存</button>
			</view>

		</view>
		<view class="uni-flex uni-row" style="margin-bottom: 14px;">
			<view class="text" style="-webkit-flex: 1;flex: 1; margin-right: 14rpx;">
				<button type="default" @tap="go('../ticket/ticket')">小票记录</button>
			</view>
			<view class="text" style="-webkit-flex: 1;flex: 1; margin-right: 14rpx;">
				<button type="default" @tap="goTab('../returns/returns')">退换货</button>
			</view>
			<view class="text" style="-webkit-flex: 1;flex: 1;">

			</view>
		</view>
		<view class="uni-flex uni-row" style="margin-bottom: 14px;">
			<view class="text" style="-webkit-flex: 1;flex: 1; margin-right: 14rpx;">
				<button type="default" plain="true">促销管理</button>
			</view>
			<view class="text" style="-webkit-flex: 1;flex: 1; margin-right: 14rpx;">

			</view>
			<view class="text" style="-webkit-flex: 1;flex: 1;">

			</view>
		</view>



	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"

	export default {
		components: {
			uniGrid,
			uniGridItem,
			uniIcons
		},
		computed: mapState(['forcedLogin', 'token', 'userName']),
		onLoad() {
			// if (!this.token) {
			// 	uni.showModal({
			// 		title: '未登录',
			// 		content: '您未登录，需要登录后才能继续',
			// 		/**
			// 		 * 如果需要强制登录，不显示取消按钮
			// 		 */
			// 		showCancel: !this.forcedLogin,
			// 		success: (res) => {
			// 			if (res.confirm) {
			// 				/**
			// 				 * 如果需要强制登录，使用reLaunch方式
			// 				 */
			// 				if (this.forcedLogin) {
			// 					uni.reLaunch({
			// 						url: '../login/login'
			// 					});
			// 				} else {
			// 					uni.navigateTo({
			// 						url: '../login/login'
			// 					});
			// 				}
			// 			}
			// 		}
			// 	});
			// }
		},
		methods: {
			clickTest: function(e) {
				uni.navigateTo({
					url: '../pos/index',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			go(url) {
				uni.navigateTo({
					url: url
				})
			},
			goTab(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style>
	.pic {
		height: 240rpx;
		text-align: center;
		background-color: #FFFFFF;
		margin-bottom: 14rpx;
		justify-content: center;
	}

	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}

	.text {
		font-size: 26rpx;
	}

	.grid-dynamic-box {
		margin-bottom: 15px;
	}

	.grid-item-box {
		flex: 1;
		/* position: relative; */
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}
</style>
