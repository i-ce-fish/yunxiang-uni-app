<template>
	<view class="y-body-list">
		<view>
			<uni-segmented-control class="y-margin" active-color="#007aff" style-type="button" :current="current" :values="items" @clickItem="onClickItem"></uni-segmented-control>
			<view v-show="current === 0">
				<uni-search-bar placeholder="小票单号" @confirm="search"></uni-search-bar>
			</view>
			<view v-show="current === 1">
				<uni-search-bar placeholder="会员手机号" @confirm="search"></uni-search-bar>
			</view>
			<view v-show="current === 2">
				<uni-search-bar placeholder="商品条码" @confirm="search"></uni-search-bar>
			</view>
			<view v-show="current === 3">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							选择日期范围
						</view>
						<view class="uni-list-cell-db">
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input">{{date}}</view>
							</picker>
						</view>
						<view class="uni-list-cell-db">
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input">{{date}}</view>
							</picker>
						</view>
					</view>
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							选择时间范围
						</view>
						<view class="uni-list-cell-db">
							<picker mode="time" :value="time" start="06:00" @change="bindTimeChange">
								<view class="uni-input">{{time}}</view>
							</picker>
						</view>
						<view class="uni-list-cell-db">
							<picker mode="time" :value="time" start="06:00" @change="bindTimeChange">
								<view class="uni-input">{{time}}</view>
							</picker>
						</view>
					</view>
				</view>

			</view>




			<view>
				<uni-calendar ref="date" :insert="false" :range="true" @change="change"></uni-calendar>
			</view>
		</view>

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
							件数: 1 实付: ￥99.99
						</view>
					</view>
				</view>
			</uni-list-item>
		</uni-list>

<view class="uni-row y-center-hor y-margin-bottom" >
				 <uni-pagination :show-icon="true" :total="50" title="标题文字" />
		</view>
		

	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"

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
			uniCalendar,
			uniSearchBar,
			uniSegmentedControl
		},
		data() {
			return {
				date: getDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end'),
				time: '12:01',
				items: ['小票', '会员', '条码', '日期'],
				current: 0



			}
		},
		methods: {
			goTicketDetail() {
				uni.navigateTo({
					url: "ticket-detail"
				})
			},

			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			},

			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			}

		}
	}
</script>

<style>
	.text-right {
		text-align: right;
	}
</style>
