<template>
	<view class="container">
		<notice-bar-member-detail></notice-bar-member-detail>

		<search-bar placeholder="扫码/输入商品编号"></search-bar>
		<view class="tui-product-list">
			<view class="tui-product-container">
				<block v-for="item in 6" :key="item">
					<view class="tui-pro-item">
						<product-img-item></product-img-item>
						<view class="tui-flex   tui-align-between">
							<view class="">
								<input type="text" value="" placeholder="导购" />
							</view>
							<view class="">
								<input type="text" value="" placeholder="折扣规则" />
							</view>
						</view>
						<view class="tui-flex tui-align-between">
							<view class=""> <input type="text" value="" placeholder="为谁买" />
							</view>
							<view class=""> <input type="text" value="" placeholder="单价" />
							</view>
						</view>
					</view>
				</block>
			</view>
		</view>
		<view class="tui-tabbar">
			<view class="tui-checkAll">
				<!-- <view class="tui-total-price">合计:<text class="tui-bold">￥800</text> </view> -->
				<view class="tui-flex">
					<view class="">合计: </view>
					<view class="y-color-red">￥</view>
					<view class="tui-price-large y-color-red">1192</view>
					<view class="y-color-red">.00</view>
				</view>
			</view>
			<view>
				<tui-button width="200rpx" height="70rpx" :size="30" type="danger" shape="circle" @click="go('settlement')">去结账(9)</tui-button>
			</view>
		</view>
	</view>
</template>

<script>
	import tuiFab from "@/components/tui-fab/tui-fab"
	import tuiIcon from "@/components/icon/icon"
	import searchBar from "../../components/y-componnents/y-search-bar/y-search-bar.vue"
	import noticeBarMemberDetail from "../../components/y-componnents/notice-bar/notice-bar-member-detail.vue"
	import ProductImgItem from "../product/com/product-img-item";
	export default {
		components: {
			ProductImgItem,
			tuiFab,
			tuiIcon,
			searchBar,
			noticeBarMemberDetail
		},
		data() {
			return {

			};
		},
		methods: {

		}

	}
</script>

<style lang="scss">
	.container {
		margin-bottom: 120rpx;
	}

	.tui-product-list {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	.tui-product-container {
		flex: 1;
		margin-right: 10rpx;
	}

	.tui-product-container:last-child {
		margin-right: 0;
	}

	.tui-pro-item {
		padding: 30rpx;
		width: 100%;
		margin-bottom: 20rpx;
		background: #fff;
		box-sizing: border-box;
		border-radius: 12rpx;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
	}

	.tui-flex-list {
		display: flex;
		margin-bottom: 1rpx !important;
	}



	// 底部栏
	.tui-tabbar {
		width: 100%;
		height: 100rpx;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		box-sizing: border-box;
		// font-size: 24rpx;
		z-index: 99999;
	}

	.tui-tabbar::before {
		content: '';
		width: 100%;
		border-top: 1rpx solid #d9d9d9;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-checkAll {
		display: flex;
		align-items: center;
	}

	.tui-checkbox-pl {
		padding-left: 12rpx;
	}

	.tui-total-price {
		font-size: 30rpx !important;
	}

	.tui-price-large {
		font-size: 34rpx;
		line-height: 32rpx;
		font-weight: 600;
	}
</style>
