<template>
	<view class="container">
<!--		搜索栏-->
		<y-search-bar ></y-search-bar>
<!--	时间筛选-->
		<tui-list-cell class="tui-flex tui-align-between"  @tap="showStartDate" >
			<view>开始日期</view>
			<view class="y-color-href">{{startDate}}</view>
		</tui-list-cell>
		<tui-list-cell class="tui-flex tui-align-between"  @tap="showEndDate" >
			<view>结束日期</view>
			<view class="y-color-href">{{endDate}}</view>
		</tui-list-cell>
<!--		小票列表-->
		<tui-list-view title="小票列表">
			<tui-list-cell @tap="go('./detail')" class="ticket-box" v-for="(item,index) in 5" :key="index" >
				<view class="tui-flex tui-align-between">
					<view>小票单号：1234567789</view>
					<view>会员：123489</view>
				</view>
				<view class="tui-flex tui-align-between">
					<view>2019/12/12 12:12:00</view>
					<view>件数: {{index}}</view>
					<view>已支付: ￥99.9</view>
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
	import tuiDatetime from "@/components/dateTime/dateTime"
	import {parseTime} from "../../utils/datetime";

	export default {
		components: {
			ySearchBar,
			tuiDatetime
		},
		data() {
			return {


				//时间弹窗组件数据
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
		methods: {
			initData(){
				let now = new Date()
				this.endDate = parseTime(now,'{y}-{m}-{d} {h}:{i}')
				//开始时间设置为前一天
				now.setTime(now.getTime()-24*60*60*1000)
				this.startDate = parseTime(now,'{y}-{m}-{d} {h}:{i}')
			},

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

<style lang="scss">


	.ticket-box{
		display: block;
	}
</style>
