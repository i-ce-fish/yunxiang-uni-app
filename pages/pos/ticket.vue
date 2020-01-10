<template>
	<view class="ticket">
		<view class="uni-flex" style="-webkit-justify-content: center;justify-content: center;">
			<view class="text">
				店名
			</view>
		</view>
		<view class="y-border"></view>
		<view class="uni-flex">
			<view class="uni-flex-item">
				日期:2012-12-12
			</view>
			<view class="uni-flex-item">
				时间:12:12:34
			</view>
			<view class="uni-flex-item">
				次数:12
			</view>
		</view>
		<view class="uni-flex">
			<view class="uni-flex-item">
				小票号:16546654
			</view>
			<view class="uni-flex-item">
				门店号:87410232
			</view>
			<view class="uni-flex-item">
				收银员:名称
			</view>
		</view>
		<view class="y-border"></view>
		<view class="uni-row uni-flex" >
			<view class="uni-flex-item uni-flex">
				<view class="uni-flex-item">
					商品
				</view>
			</view>
			<view class="uni-flex-item uni-flex">
				<view class="uni-flex-item">
					数量
				</view>
				<view class="uni-flex-item">
					零售价
				</view>
				<view class="uni-flex-item">
					折率
				</view>
				<view class="uni-flex-item">
					金额
				</view>
			</view>
		</view>
		<view class="">
			<view class="uni-row" v-for="i in 5" :key="i">
				<view class="uni-row">
					<view class=" ">
						森马羽绒服{{i}}
					</view>
				</view>
				<view class="uni-row uni-flex-item uni-flex">
					<view class="uni-flex-item uni-flex">
						<view class="uni-flex-item">
							12345678901
						</view>
						<view class="uni-flex-item">
							漂白
						</view>
						<view class="uni-flex-item">
							春
						</view>
					</view>
					<view class="uni-flex-item uni-flex">
						<view class="uni-flex-item">
							{{i}}
						</view>
						<view class="uni-flex-item">
							9.9
						</view>
						<view class="uni-flex-item">
							95%
						</view>
						<view class="uni-flex-item">
							9.5
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="y-border"></view>
		收款
		<view class="">
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text">抹零调整</view>
				<view class="text">0.12</view>
			</view>

		</view>
		<view class="y-border"></view>
		结尾
		<view class="y-border"></view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.ticket {
		width: 100%;
		margin: 15px;
	}
</style>
