<template>
	<view class="container">

			<tui-list-view title="小票详情">
				<tui-list-cell :hover="false" class="dis-block"  >
					<view class="tui-flex tui-align-between ">
						<view class="tui-center line-padding   ">小票号：555666777</view>
						<view class="tui-center line-padding y-color-greed  ">已支付</view>
					</view>
					<view class="tui-flex tui-align-between ">
						<view class="tui-center line-padding   ">会员：13656775558</view>
						<view class="tui-center line-padding  ">2020-01-15&nbsp;&nbsp;&nbsp;15:18:30</view>
					</view>
					<view class="tui-flex tui-align-between ">
						<view class="tui-center line-padding   ">收银员：杨晴文</view>
						<view class="tui-center line-padding y-color-red">共13件&nbsp;&nbsp;实付:￥ 61630</view>
					</view>
				</tui-list-cell>
			</tui-list-view>

		<tui-list-view title="整单促销">
			<tui-list-cell :hover="false" class="dis-block">

				<view class="tui-flex tui-align-between " v-for="i in 3" :key="i">
					<view class="tui-center line-padding   ">20春20春一件正价二件9折三件8折{{i}}</view>
				</view>


			</tui-list-cell>

		</tui-list-view>


		<tui-list-view title="商品明细">

			<tui-list-cell class="dis-block" :hover="false" v-for="(item,index) in 5" :key="index">
				<view class="tui-flex">
					<view style="padding-right: 10rpx;" class="tui-center line-padding  tui-col-3">
						<image src="https://img.alicdn.com/imgextra/i1/30266471/O1CN01FDP0yn1xflRdq5uMJ_!!0-saturn_solar.jpg_220x220.jpg_.webp"
							   mode="aspectFit" style="width: 100%;height: 100%;"></image>
					</view>
					<view class="tui-center line-padding  tui-col-9">
						<view class="tui-flex tui-align-between tui-center line-padding">
							<view>美邦/MB</view>
							<view class="y-font-large">条码：22625100154</view>
						</view>
						<view class="tui-flex tui-center line-padding ellipsis">
							<view>男常年款净色V领T恤常年净色范冰冰</view>
						</view>

						<view class="tui-flex tui-align-between tui-center line-padding">
							<view>漂白</view>
							<view>XXL185/100A</view>
							<view>2019春</view>
							<view class="del-line">￥2139</view>
						</view>
					</view>
<!--					<image src="https://img.alicdn.com/imgextra/i1/30266471/O1CN01FDP0yn1xflRdq5uMJ_!!0-saturn_solar.jpg_220x220.jpg_.webp"-->
<!--						   class="tui-pro-img tui-col-3" mode="widthFix" />-->
<!--					<view class="tui-pro-content tui-col-9">-->
<!--						<view class="tui-flex tui-align-between">-->
<!--							<view class="pro-brand">-->
<!--								品牌-->
<!--							</view>-->
<!--							<view class="po-sn">-->
<!--								条码: 123456{{item}}-->
<!--							</view>-->
<!--						</view>-->
<!--						<view class="pro-name">-->
<!--							商品名称-->
<!--						</view>-->
<!--						<view class="pro-detail tui-flex tui-align-between">-->
<!--							<view class="pro-color">-->
<!--								颜色-->
<!--							</view>-->
<!--							<view class="pro-size">-->
<!--								尺码-->
<!--							</view>-->
<!--							<view class="pro-season">-->
<!--								季节-->
<!--							</view>-->
<!--						</view>-->
<!--					</view>-->

				</view>
				<view class="tui-flex tui-align-between tui-center line-padding">
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
				<view class="tui-flex tui-align-between tui-center line-padding">
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
				<view class="tui-flex tui-align-between tui-center line-padding">
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
			</tui-list-cell>

			<!--			总金额-->
			<tui-list-cell class="tui-align-right" :hover="false">
				<view>
					应付总金额:
				</view>
				<view class="y-color-red">
					￥259
				</view>
			</tui-list-cell>
		</tui-list-view>

		<tui-list-view title="费用明细">
			<tui-list-cell :hover="false" class="tui-align-between pay-info">

				<view class="left-box tui-flex-1 " >
					<view class="tui-flex tui-align-between">
						<view>
							优惠券/抵用券:
						</view>
						<view class="  ">
							-￥100.00
						</view>
					</view>
					<view class="tui-flex tui-align-between">
						<view>
							礼品卡/会员卡:
						</view>
						<view class=" ">
							-￥10.00
						</view>
					</view>
					<view class="tui-flex tui-align-between">
						<view>
							积分抵现:
						</view>
						<view class=" ">
							-￥100.00
						</view>
					</view>
					<view class="tui-flex tui-align-between">
						<view>
							运费:
						</view>
						<view class=" ">
							￥12.00
						</view>
					</view>
					<view class="tui-flex tui-align-between">
						<view>
							其他优惠:
						</view>
						<view class=" ">
							-￥12.00
						</view>
					</view>
					<view class="tui-flex tui-align-between">
						<view>
							抹零:
						</view>
						<view class=" ">
							-￥0.80
						</view>
					</view>

					<!--付款信息-->
					<view class="tui-flex tui-align-between">
						<view>
							尚需付款:
						</view>
						<view class="y-color-red">
							￥51139.00
						</view>
					</view>
					<view class="tui-flex tui-align-between">
						<view>
							微信支付:
						</view>
						<view class="y-color-red">
							￥51139.00
						</view>
					</view>

				</view>
			</tui-list-cell>
		</tui-list-view>

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
	/*@import '../../static/style/thorui.css';*/

	.dis-block{
		display: block;
	}

	/*所有文字的行间距*/
	.line-padding {
		padding: 8rpx 0;

	}

	.pay-info{
		.right-box{
			padding-left: 30rpx;
		}
	}
</style>
