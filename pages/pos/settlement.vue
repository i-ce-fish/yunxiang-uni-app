<template>
	<!-- <view class="">
		<notice-bar-member-detail></notice-bar-member-detail>
		<view class="y-body">
			<view class="uni-row">
				<scroll-view class="scroll-view_H" scroll-x  @scroll="scroll" scroll-left="120">
					<view @tap="getProduct(i)" :id="i" class="scroll-view-item_H" v-for="i in 6" :key="i">
						<view class="uni-row">
							<image style="width: 81px;height: 81px;" src="../../static/img/home.png" mode=""></image>
						</view>
						<view class="uni-row">
							商品名称
						</view>
						<view class="uni-row">
							价格
						</view>
					</view>
				</scroll-view>
				<uni-popup ref="popup" type="bottom">
					<uni-card title="商品清单">
						内容主体，可自定义内容及样式
					</uni-card>
				</uni-popup>

			</view>
			<view class="uni-row">
				<uni-list>
					<uni-list-item :show-arrow="false">
						总额：123
					</uni-list-item>
					<uni-list-item @tap="showPopup('coupon')" :show-arrow="true">
						优惠券/抵用券：123
						<uni-popup ref="coupon" type="bottom">
							<uni-card title="优惠券">
								内容主体，可自定义内容及样式
							</uni-card>
						</uni-popup>
					</uni-list-item>
					<uni-list-item @tap="showPopup('giftCard')" :show-arrow="true">
						礼品卡/会员卡：123
						<uni-popup ref="giftCard" type="bottom">
							<uni-card title="礼品卡/会员卡">
								内容主体，可自定义内容及样式
							</uni-card>
						</uni-popup>
					</uni-list-item>
					<uni-list-item @tap="showPopup('integral')" :show-arrow="true">
						积分抵现：123
						<uni-popup ref="integral" type="bottom">
							<uni-card title="积分抵现">
								内容主体，可自定义内容及样式
							</uni-card>
						</uni-popup>
					</uni-list-item>
					<uni-list-item @tap="showPopup('integral')" :show-arrow="true">
						运费：123
						<uni-popup ref="integral" type="bottom">
							<uni-card title="运费">
								内容主体，可自定义内容及样式
							</uni-card>
						</uni-popup>

					</uni-list-item>
				</uni-list>
			</view>
			<view class="uni-row">
				<button type="primary" @tap="putOrder">提交订单</button>
			</view>

		</view>
	</view> -->
	<view class="container">
		<scroll-view scroll-x scroll-with-animation class="tab-view">
			<view v-for="(item,index) in tabbar" :key="index" class="tab-bar-item " :data-current="index" @tap.stop="swichNav">
				<view>
					<image src="../../static/img/dress.webp" style="width: 320rpx;height: 320rpx;" mode="aspectFit"></image>
				</view>
				<view style="width: 320rpx;">
					<view class="tab-bar-title tui-center">商品名称</view>
					<view class="tab-bar-title tui-center">价格: ￥10.00</view>
				</view>
			</view>
		</scroll-view>
		<tui-list-view title=" " class="tui-list-view">
			<tui-list-cell class="tui-flex tui-align-between" @click="detail" :arrow="true">
				<view class="label">
					总金额
				</view>
				<view class="value">
					123
				</view>
			</tui-list-cell>
			<tui-list-cell class="tui-flex tui-align-between" @click="detail" :arrow="true">
				<view class="label">
					优惠券/抵用券
				</view>
				<view class="value">
					123
				</view>
			</tui-list-cell>
			<tui-list-cell class="tui-flex tui-align-between" @click="detail" :arrow="true">
				<view class="label">
					礼品卡/会员卡
				</view>
				<view class="value">
					123
				</view>
			</tui-list-cell>
			<tui-list-cell class="tui-flex tui-align-between" @click="detail" :arrow="true">
				<view class="label">
					积分抵现
				</view>
				<view class="value">
					123
				</view>
			</tui-list-cell>
			<tui-list-cell class="tui-flex tui-align-between" @click="detail" :arrow="true">
				<view class="label">
					运费
				</view>
				<view class="value">
					123
				</view>
			</tui-list-cell>
		</tui-list-view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				tabbar: ["热门", "娱乐", "体育", "国内", "汽车"],

			};
		},
		methods: {}
	}
</script>

<style lang="scss">
	// .tab-view::before {
	// 	content: '';
	// 	position: absolute;
	// 	border-bottom: 1upx solid #eaeef1;
	// 	-webkit-transform: scaleY(0.5);
	// 	transform: scaleY(0.5);
	// 	bottom: 0;
	// 	right: 0;
	// 	left: 0;
	// }

	.tab-view {
		width: 100%;
		height: 480upx;
		padding: 30rpx 0;
		overflow: hidden;
		box-sizing: border-box;
		/* #ifdef H5 */
		// top: 44px;
		/* #endif */
		z-index: 99;
		background: #fff;
		white-space: nowrap;
	}

	.tab-bar-item {
		margin: 0 28upx;
		display: inline-block;
		text-align: center;
		box-sizing: border-box;
	}

	.tui-list-view {
		.value {
			padding: 0 30rpx;
		}
	}
</style>
