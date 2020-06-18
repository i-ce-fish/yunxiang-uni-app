<template>
	<view class="container">

		<tui-tabs :tabs="tabs" :currentTab="currentTab" @change="onTabs" itemWidth="25%"></tui-tabs>

		<y-search-bar v-if="currentTab!=3" :placeholder="'搜索'+tabs[currentTab].name"></y-search-bar>
		<view v-else>
			<tui-list-cell class="tui-flex tui-align-between"  @tap="showStartDate" >
				<view>开始日期</view>
				<view class="y-color-href">{{startDate}}</view>
			</tui-list-cell>
			<tui-list-cell class="tui-flex tui-align-between"  @tap="showEndDate" >
				<view>结束日期</view>
				<view class="y-color-href">{{endDate}}</view>
			</tui-list-cell>
		</view>

<!--		退换货列表明细-->
		<tui-list-view title="退换货列表">
			<tui-list-cell class="list-box" v-for="(item,index) in 5" :key="index" @tap="go('./ticket-detail')">

				<view class="tui-flex tui-align-between" >
					<view>小票单号：1234567789
					</view>
					<view>
						2019/12/12 12:12:00
					</view>
				</view>
				<view class="tui-flex tui-align-between" >
					<view>
						会员：1234567789
					</view>
					<view>
						件数: 1
					</view>
					<view>
						金额: ￥99.99
					</view>
				</view>
			</tui-list-cell>
		</tui-list-view>

		<!--		开始时间弹窗-->
		<tui-datetime ref="startDate" :type="1" :startYear="startYear" :endYear="endYear"
					  :setDateTime="startDate" @confirm="onStartDate"></tui-datetime>

		<!--		结束时间弹窗-->
		<tui-datetime ref="endDate" :type="1" :startYear="startYear" :endYear="endYear"
					  :setDateTime="endDate" @confirm="onEndDate"></tui-datetime>

	</view>
</template>
<script>
	import ySearchBar from "../../components/y-componnents/y-search-bar/y-search-bar.vue"
	import tuiTabs from "@/components/tui-tabs/tui-tabs"
	import tuiDatetime from "@/components/dateTime/dateTime"
	import {parseTime} from "../../utils/datetime";

	export  default {
		components:{
			tuiTabs,ySearchBar,
			tuiDatetime
		},
		data(){
			return{
				//tabs
				currentTab: 0,
				tabs: [{
					name: "小票单号",
				}, {
					name: "会员手机号",

				}, {
					name: "商品条码",
				},{
					name:"日期时间"
				}],

				//datetime
				type: 4,
				startYear: 1980,
				endYear: 2020,
				//日期格式有要求
				startDate: "2000-01-01 00:00",
				endDate: "2000-01-01 00:00"
			}
		},
		created(){
			this.initData()
		},
		methods:{
			onTabs(e) {
				this.currentTab = e.index
			},
			initData(){
				//initDatetime
				let now = new Date()
				this.endDate = parseTime(now,'{y}-{m}-{d} {h}:{i}')
				//开始时间设置为前一天
				now.setTime(now.getTime()-24*60*60*1000)
				this.startDate = parseTime(now,'{y}-{m}-{d} {h}:{i}')
			},
			//datetime
			showStartDate() {
				this.$refs.startDate.show()
			},
			showEndDate() {
				this.$refs.endDate.show()
			},
			onStartDate(e) {
				this.startDate = e.result
			},
			onEndDate(e){
				this.endDate = e.result
			}

		}

	}
</script>
<style lang="scss" scoped>

.list-box{
	display: block;
	>view{
		/*每个儿子view*/
		padding: 10rpx 0;
	}
}

</style>
