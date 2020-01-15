<template>
	<view class="y-body-list">
		<uni-search-bar placeholder="搜索小票单号" @confirm="search"></uni-search-bar>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					选择日期
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view>
		<uni-list>
			<uni-list-item v-for="i in 4" :key="i" :show-arrow="false" @tap="go('detail',i)">
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
						<view class="uni-flex-item ">
							件数: {{i}}
						</view>
						<view class="uni-flex-item text-right ">
							已支付: ￥99.9
						</view>
					</view>
				</view>
			</uni-list-item>
		</uni-list>


	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'

	function getDate(type) {
		const date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;

		return `${year}-${month}-${day}`;
	}
	export default {
		components: {
			uniSegmentedControl,
			uniSearchBar
		},
		data() {
			return {
				items: ['当日未付款订单', '当日已付款订单'],
				current: 0,
				activeColor: '#007aff',
				styleType: 'button',
				date: getDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end'),

			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			go(url, data) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
