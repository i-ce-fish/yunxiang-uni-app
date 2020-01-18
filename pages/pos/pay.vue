<template>
	<!-- <view>
		<notice-bar-member-detail></notice-bar-member-detail>
		<view class="y-body">
			<view class="uni-row">
				<uni-list>
					<uni-list-item :noHover="noHover" :show-arrow="false">
						<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
							<view class="text">零售单号：123456789</view>
							<view class="text ">需要支付：99.99</view>
						</view>
					</uni-list-item>

					<uni-list-item v-for="i in 4" :key="i" :noHover="noHover" :show-arrow="false">
						<view class="uni-flex">

							<view class="uni-flex  uni-flex-item">
								<view class="uni-inline-item ">
									<view class="text ">支付方式：</view>
								</view>
								<view class="uni-flex-item">
									<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
										<view class="uni-input">{{array[index].name}}</view>
									</picker>
								</view>
							</view>
							<view class="uni-flex-item">
								<input type="text" value="" class="uni-input" placeholder="99.99" />
							</view>
						</view>
					</uni-list-item>
				</uni-list>
			</view>

			<view class="uni-row">
				<uni-list>
					<uni-list-item :noHover="noHover" :show-arrow="false">
						总额：123
					</uni-list-item>
					<uni-list-item :noHover="noHover" :show-arrow="false">
						优惠券/抵用券：123
					</uni-list-item>
					<uni-list-item :noHover="noHover" :show-arrow="false">
						礼品卡/会员卡：123
					</uni-list-item>
					<uni-list-item :noHover="noHover" :show-arrow="false">
						积分抵现：123
					</uni-list-item>
					<uni-list-item :noHover="noHover" :show-arrow="false">
						运费：123
					</uni-list-item>
				</uni-list>
			</view>
			<view class="uni-row uni-flex">
				<button type="primary" @tap="addOrder">结算订单</button>
				<button type="primary" @tap="goTicket">打印小票</button>
			</view>

		</view>
	</view> -->
	<view class="container">
		<notice-bar-member-detail></notice-bar-member-detail>
		<tui-list-view title="支付信息" color="#777" class="tui-list-view">
			<tui-list-cell class="tui-flex tui-align-between" :hover="false">
					<view class="">
						零售单号
					</view>
					<view class="">
						尚需支付: 123.12
					</view>
 			</tui-list-cell>
			<tui-list-cell :hover="false">
				不带箭头，无点击效果
			</tui-list-cell>
			<tui-list-cell :hover="false">
				不带箭头，无点击效果
			</tui-list-cell>
		</tui-list-view>
		<tui-list-view title="优惠信息" color="#777" class="tui-list-view">
			<tui-list-cell :hover="false">
				不带箭头，无点击效果
			</tui-list-cell>
			<tui-list-cell :hover="false">
				不带箭头，无点击效果
			</tui-list-cell>
			<tui-list-cell :hover="false">
				不带箭头，无点击效果
			</tui-list-cell>
		</tui-list-view>
	</view>
</template>

<script>
	import noticeBarMemberDetail from "../../components/y-componnents/notice-bar/notice-bar-member-detail.vue"
	export default {
		components: {
			noticeBarMemberDetail,
		},
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style lang="scss">

</style>
