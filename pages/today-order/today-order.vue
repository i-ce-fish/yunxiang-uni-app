<template>
	<view class="container">
		<tui-tabs :tabs="tabs" :currentTab="currentTab" @change="onTabs" itemWidth="50%"></tui-tabs>
<!--未付款订单-->
		<view v-show="currentTab == 0" >
			<tui-list-view>
				<tui-list-cell class="list-box" :hover="false" v-for="(o,i) of 5">
					<view class="tui-flex tui-align-between tui-col-12">
						<view>小票单号：1234567789</view>
						<view style="text-align: right" >2019/12/12 12:12:00</view>
					</view>
					<view class="tui-flex tui-align-between tui-col-12">
						<view>会员：123489</view>
						<view >件数: 1</view>
						<view style="text-align: right" >未支付: ￥99.9</view>
					</view>
				</tui-list-cell>
			</tui-list-view>
		</view>
<!--		已付款订单-->
		<view v-show="currentTab == 1" >
			<tui-list-view>
				<tui-list-cell class="list-box" :hover="false" v-for="(o,i) of 5">
					<view class="tui-flex tui-align-between tui-col-12">
						<view>小票单号：1234567789</view>
						<view style="text-align: right" >2019/12/12 12:12:00</view>
					</view>
					<view class="tui-flex tui-align-between tui-col-12">
						<view>会员：123489</view>
						<view >件数: 1</view>
						<view style="text-align: right" >已支付: ￥99.9</view>
					</view>
				</tui-list-cell>
			</tui-list-view>
		</view>
	</view>
</template>

<script>
	import tuiTabs from "@/components/tui-tabs/tui-tabs"

	export default {
		components: {
			tuiTabs
		},
		data() {
			return {
				currentTab: 0,
				tabs: [{
					name: "当日未付款订单",
				}, {
					name: "当日已付款订单",
				}],
			};
		},
		methods: {
			onTabs(e) {
				this.currentTab = e.index
			},
		}
	}
</script>

<style lang="scss">

	.list-box{
		display: block;
		>view{
			padding:10rpx 0 ;
		}
	}
</style>
