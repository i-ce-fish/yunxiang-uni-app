<template>
	<view class="container">
		<notice-bar-member-detail></notice-bar-member-detail>
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
			<view>
				<block v-for="(item,index) in dataList" :key="index">
					<tui-collapse :index="index" :current="item.current" :disabled="item.disabled" @click="change">
						<template v-slot:title>
							<tui-list-cell :hover="!item.disabled" class="collapse-title tui-flex tui-align-between ">
								<view class="label">
									{{item.label}}
								</view>
								<view class="value">
									{{item.value}}
								</view>
							</tui-list-cell>
						</template>
						<template v-slot:content>
							<view class="tui-content">{{item.intro}}</view>
						</template>
					</tui-collapse>
				</block>
			</view>
			<!--alert-->
		</tui-list-view>
		<view class="tui-btn-box">
			<tui-button type="blue" shape="circle" @click="go('pay')">提交订单</tui-button>
		</view>
	</view>
</template>

<script>
	import noticeBarMemberDetail from "../../components/y-componnents/notice-bar/notice-bar-member-detail.vue"
	import tuiCollapse from "@/components/tui-collapse/tui-collapse"

	export default {
		components: {
			tuiCollapse,
			noticeBarMemberDetail
		},
		data() {
			return {
				tabbar: ["热门", "娱乐", "体育", "国内", "汽车"],
				dataList: [{
						label: "总金额",
						value: '123',
						intro: "总金额详情",
						current: 0,
						disabled: false
					},
					{
						label: "优惠券/抵用券",
						value: '123',
						intro: "优惠券/抵用券详情",
						current: 0,
						disabled: false
					},
					{
						label: "礼品卡/会员卡",
						value: '123',
						intro: "礼品卡/会员卡详情",
						current: 0,
						disabled: false
					}, {
						label: "积分抵现",
						value: '123',
						intro: "积分抵现详情",
						current: 0,
						disabled: false
					}, {
						label: "运费",
						value: '12',
						intro: "运费详情",
						current: 0,
						disabled: false
					},
				],
			};
		},
		methods: {
			change(e) {
				let index = e.index;
				let item = this.dataList[index];
				item.current = item.current == index ? -1 : index
			},
		}
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
			padding: 0 50rpx;
		}
	}


	.tui-content {
		padding: 20rpx 30rpx;
		background: #fafafa;
		color: #555;
		font-size: 26rpx;
	}
</style>
