<template>
	<view class="container">
		<view class="tui-flex-box tui-white">
			<view class="tui-flex tui-align-between ">
				<view class="tui-center   ">小票号：555666777</view>
				<view class="tui-center y-color-greed  ">已支付</view>
			</view>
			<view class="tui-flex tui-align-between ">
				<view class="tui-center   ">会员：13656775558</view>
				<view class="tui-center  ">2020-01-15&nbsp;&nbsp;&nbsp;15:18:30</view>
			</view>
			<view class="tui-flex tui-align-between ">
				<view class="tui-center   ">收银员：杨晴文</view>
				<view class="tui-center y-color-red">共13件&nbsp;&nbsp;实付:￥ 61630</view>
			</view>
			<tui-divider height="20"></tui-divider>
			<view class="tui-flex tui-align-between ">
				<view class="tui-center y-font-large  ">整单促销：</view>
			</view>
			<view class="tui-flex tui-align-between " v-for="i in 3" :key="i">
				<view class="tui-center   ">20春20春一件正价二件9折三件8折{{i}}</view>
			</view>
			<tui-divider height="50" dividerColor="#1d1d1d"></tui-divider>
			<view class="" v-for="i in 4 " :key="i">
				<view class="tui-flex">
					<view style="padding-right: 10rpx;" class="tui-center  tui-col-3">
						<image src="https://img.alicdn.com/imgextra/i1/30266471/O1CN01FDP0yn1xflRdq5uMJ_!!0-saturn_solar.jpg_220x220.jpg_.webp"
						 mode="aspectFit" style="width: 100%;height: 100%;"></image>
					</view>
					<view class="tui-center  tui-col-9">
						<view class="tui-flex tui-align-between tui-center">
							<view>美邦/MB</view>
							<view class="y-font-large">条码：22625100154</view>
						</view>
						<view class="tui-flex tui-center ellipsis">
							<view>男常年款净色V领T恤常年净色范冰冰</view>
						</view>
						
						<view class="tui-flex tui-align-between tui-center">
							<view>漂白</view>
							<view>XXL185/100A</view>
							<view>2019春</view>
							<view class="del-line">￥2139</view>
						</view>
					</view>
				</view>
				<view class="tui-flex tui-align-between tui-center">
					<view>
						导购：杨晴文
					</view>
					<view class="tui-flex tui-align-between tui-col-5">
						<view>
							指定: 2.5折
						</view>
						<view class="del-line">
							￥427.80
						</view>
					</view>
				</view>
				<view class="tui-flex tui-align-between tui-center">
					<view>
						谁穿：自己
					</view>
					<view class=" tui-flex tui-align-between tui-col-5">
						<view>
							整单再减：
						</view>
						<view>
							-￥39
						</view>
					</view>
				</view>
				<view class="tui-flex tui-align-between tui-center">
					<view>
						备注：不允许退换货
					</view>
					<view class=" tui-flex tui-align-between tui-col-5">
						<view>
							应付金额:
						</view>
						<view class="y-color-red">
							￥259
						</view>
					</view>
				</view>
				<tui-divider height="50" dividerColor="#1d1d1d"></tui-divider>
			</view>
			<view class="bottom">
				<view class="tui-flex tui-center tui-align-right tui-center">
					应付总金额:
					<view class="y-color-red">
						￥52339.80
					</view>
				</view>
				<view class="tui-flex tui-center tui-align-between tui-col-6">
					<view>
						优惠券/抵用券:
					</view>
					<view class="y-color-red">
						-￥100.00
					</view>
				</view>
				<view class="tui-flex tui-center tui-align-between tui-col-6">
					<view>
						礼品卡/会员卡:
					</view>
					<view class="y-color-red">
						-￥10.00
					</view>
				</view>
				<view class="tui-flex tui-center tui-align-between tui-col-6">
					<view>
						积分抵现:
					</view>
					<view class="y-color-red">
						-￥100.00
					</view>
				</view>
				<view class="tui-flex tui-center tui-align-between tui-col-6">
					<view>
						运费:
					</view>
					<view class="y-color-red">
						￥12.00
					</view>
				</view>
				<view class="tui-flex tui-center tui-align-between tui-col-6">
					<view>
						其他优惠:
					</view>
					<view class="y-color-red">
						-￥12.00
					</view>
				</view>
				<view class="tui-flex tui-center tui-align-between tui-col-6">
					<view>
						抹零:
					</view>
					<view class="y-color-red">
						-￥0.80
					</view>
				</view>
				<view class="tui-flex tui-align-right">
					<view class="tui-flex   tui-col-6 tui-align-between">
						<view>
							尚需付款:
						</view>
						<view class="">
							￥51139.00
						</view>
					</view>
				</view>
				<view class="tui-flex tui-align-right">

					<view class="tui-flex   tui-col-6 tui-align-between">
						<view>
							微信支付:
						</view>
						<view class="">
							￥51139.00
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import tuiListView from "@/components/list-view/list-view"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiDivider from "@/components/divider/divider"
	export default {
		components: {
			tuiListView,
			tuiDivider,
			tuiListCell,
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	@import '../../static/style/thorui.css';

	.tui-center {
		padding: 7upx 0;
		// margin-bottom: 12upx;
	}

	.tui-flex-box {
		padding: 0 30upx 30upx 30upx;
		box-sizing: border-box;
		// font-size: 28rpx;
	}

	.del-line {
		text-decoration: line-through
	}
</style>
