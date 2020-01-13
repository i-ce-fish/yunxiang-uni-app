<template>
	<view class="y-body-list">
		<uni-segmented-control class="y-margin" active-color="#007aff" style-type="button" :current="current" :values="items"
		 @clickItem="onClickItem"></uni-segmented-control>
		<view class="">
			<view v-show="current === 0">
				<uni-list>
					<uni-list-item v-for="i in 4" :key="i" :show-arrow="false" @tap="goTicketDetail">
						<view class="uni-row-margin">
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text">
									小票单号：1234567789
								</view>
								<view class="text">
									2019/12/12 12:12:00
								</view>
							</view>
							<view class="uni-flex uni-row">
								<view class="uni-flex-item">
									会员：1234567789
								</view>
								<view class="uni-flex-item text-right ">
									件数: 1 未付: ￥99.99
								</view>
							</view>
						</view>
					</uni-list-item>
				</uni-list>
			</view>
			<view v-show="current === 1">
				<uni-list>
					<uni-list-item v-for="i in 4" :key="i" :show-arrow="false" @tap="goTicketDetail">
						<view class="uni-row-margin">
							<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
								<view class="text">
									小票单号：1234567789
								</view>
								<view class="text">
									2019/12/12 12:12:00
								</view>
							</view>
							<view class="uni-flex uni-row">
								<view class="uni-flex-item">
									会员：123489
								</view>
								<view class="uni-flex-item text-right ">
									件数: 1 已支付: ￥99.9
								</view>
							</view>
						</view>
					</uni-list-item>
				</uni-list>
			</view>

		</view>

		<view class="uni-row y-center-hor y-margin-bottom">
			<uni-pagination :show-icon="true" :total="50" title="标题文字" />
		</view>

	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"

	export default {
		components: {
			uniSegmentedControl
		},
		data() {
			return {
				items: ['当日未付款订单', '当日已付款订单'],
				current: 0
			};
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
