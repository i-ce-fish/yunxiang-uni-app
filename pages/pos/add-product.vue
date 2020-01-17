<template>
	<view class="container">
		<!-- todo be components -->
		<view class='tui-notice-board' @tap="showAlert">
			<view class="tui-icon-bg">
				<tui-icon name="news-fill" :size='24' color='#f54f46'></tui-icon>
			</view>
			<view class="tui-scorll-view">
				<view class="tui-notice ">会员13611605568，三级，优惠券2张，储值卡¥290，生日1994年10月20日。推荐人五级</view>
			</view>
		</view>
		<!--alert-->
		<tui-alert :show="show" @click="hideAlert" @cancel="hideAlert" :maskClosable="maskClosable" :btnColor="btnColor"
		 :color="color" :btnText="btnText">
			<!-- TODO  SLOT -->
			<view class="tui-flex tui-align-between ">
				<view>
					会员
				</view>
				<view>
					杨先生
				</view>
			</view>
			<view class="tui-flex tui-align-between ">
				<view>
					手机
				</view>
				<view>
					13611605568
				</view>
			</view>
			<view class="tui-flex tui-align-between ">
				<view>
					生日
				</view>
				<view>
					1988/08/08
				</view>
			</view>
			<view class="tui-flex tui-align-between ">
				<view>
					会员等级
				</view>
				<view style="color: #D53912;">
					三级
				</view>
			</view>
			<view class="tui-flex tui-align-between ">
				<view>
					积分
				</view>
				<view>
					123分
				</view>
			</view>
			<view class="tui-flex tui-align-between ">
				<view>
					卡券
				</view>
				<view>
					31张
				</view>
			</view>
			<view class="tui-flex tui-align-between ">
				<view>
					储值卡
				</view>
				<view>
					123456元
				</view>
			</view>


		</tui-alert>

		<searchBar></searchBar>
		<view class="tui-product-list">
			<view class="tui-product-container">
				<block v-for="item in 6" :key="item">
					<view class="tui-pro-item">
						<view class="tui-flex tui-align-between">
							<image src="https://img.alicdn.com/imgextra/i1/30266471/O1CN01FDP0yn1xflRdq5uMJ_!!0-saturn_solar.jpg_220x220.jpg_.webp"
							 class="tui-pro-img tui-col-3" mode="widthFix" />
							<view class="tui-pro-content tui-col-9">
								<view class="tui-flex tui-align-between">
									<view class="pro-brand">
										品牌
									</view>
									<view class="po-sn">
										条码: 123456{{item}}
									</view>
								</view>
								<view class="pro-name">
									商品名称
								</view>
								<view class="pro-detail tui-flex tui-align-between">
									<view class="pro-color">
										颜色
									</view>
									<view class="pro-size">
										尺码
									</view>
									<view class="pro-season">
										季节
									</view>
								</view>
							</view>
						</view>
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
				<view class="tui-total-price">合计:<text class="tui-bold">￥800</text> </view>
			</view>
			<view>
				<tui-button width="200rpx" height="70rpx" :size="30" type="danger" shape="circle" @click="go('settlement')">去结账(9)</tui-button>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBar from '../../components/y-componnents/search-bar/search-bar.vue'
	import tuiButton from "@/components/extend/button/button"
	import tuiFab from "@/components/tui-fab/tui-fab"
	import tuiIcon from "@/components/icon/icon"
	import tuiAlert from "@/components/extend/alert/alert"

	export default {
		components: {
			searchBar,
			tuiButton,
			tuiFab,
			tuiIcon,
			tuiAlert

		},
		data() {
			return {
				// alert
				show: false,
				maskClosable: false,
				btnColor: "#EB0909",
				color: "#333",
				btnText: "确定"
			};
		},
		methods: {
			// alert
			showAlert() {
				this.btnText = "确定";
				this.btnColor = "#EB0909";
				this.color = "#333";
				this.maskClosable = false;
				this.btnColor = "#000";
				this.maskClosable = true;
				this.show = true
			},
			hideAlert() {
				this.show = false
			}
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
		padding: 20rpx;
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

	.tui-pro-img {
		// height: auto;
		padding-right: 20rpx;
		padding-bottom: 20rpx;
	}

	.tui-pro-content {
		box-sizing: border-box;
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
		font-size: 24rpx;
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

	// noticeBar
	.tui-notice-board {
		width: 100%;
		padding-right: 30upx;
		box-sizing: border-box;
		font-size: 28upx;
		height: 60upx;
		background: #fff8d5;
		display: flex;
		align-items: center;
	}

	.tui-icon-bg {
		background: #fff8d5;
		padding-left: 30upx;
		position: relative;
		z-index: 10;
	}

	.tui-icon-class {
		margin-right: 12upx;
	}

	.tui-scorll-view {
		flex: 1;
		line-height: 1;
		// 可以换行
		// white-space: nowrap;
		// overflow: hidden;
		color: #f54f46;
	}
</style>
