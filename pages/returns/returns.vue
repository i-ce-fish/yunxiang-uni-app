<template>
	<view class="uni-padding-wrap uni-common-mt">
		<view class="text uni-row-margin">
			<input class="uni-input" type="text" value="" placeholder="手机/小票单号/条码" />
		</view>
		<view class="uni-row uni-flex">
			<view class="uni-flex-item">
				<button  type="primary"  @tap="openDate">选择日期区间</button>
			</view>
			<view class="uni-flex-item">
				<button  type="primary" @tap="openDate">查询</button>
			</view>
		</view>
		<view>
			<uni-calendar ref="date" :insert="false" :range="true"  @change="change"></uni-calendar>
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
					</view>

					<view class="uni-flex uni-row">
						<view class="uni-flex-item">
							数量：1
						</view>
					</view>
					<view class="uni-flex uni-row">
						<view class="uni-flex-item">
							实付:99.99
						</view>
					</view>

				</view>
			</uni-list-item>
		</uni-list>


	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'

	export default {
		components: {
			uniList,
			uniListItem,
			uniCalendar
		},
		data() {
			return {


			}
		},
		methods: {
			goTicketDetail() {
				uni.navigateTo({
					url: "ticket-detail"
				})
			},
			openDate(){
				this.$refs.date.open()
			}

		}
	}
</script>

<style>

</style>
