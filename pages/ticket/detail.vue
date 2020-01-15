<template>
	<view class="y-body ">
		<view class="uni-list ">
			<view class="uni-list-cell  y-body-padding" style="display: block;">
				<view class="uni-row uni-flex " style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class=" ">
						小票号: 456456456
					</view>
					<view class=" ">
						已支付
					</view>
				</view>
				<view class="uni-row uni-flex  " style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class=" ">
						会员: 13266897543
					</view>
					<view class=" ">
						2020-0.1-15&nbsp;&nbsp;&nbsp;&nbsp;15:18:30
					</view>
				</view>
				<view class="uni-row uni-flex  " style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class=" ">
						收银员: 杨晴文
					</view>
					<view class=" ">
						共13件&nbsp;&nbsp;&nbsp;&nbsp;实付: ￥61630
					</view>
				</view>
				<view class="uni-row  ">
					整单促销:
				</view>
				<view class="uni-row  " v-for="i in 3" :key="i">
					满300-30，满500-80:{{i}}
				</view>
			</view>
			<view class="uni-list-item y-body-padding uni-flex">
				<view class="img ">
					<image src="../../static/img/home.png" style="width: 132rpx;height: 132rpx;" mode=""></image>
				</view>
				<view class="uni-flex-item">
					<view class="uni-row uni-flex y-space-bettwen">
						<view class="uni-flex-item">
							美邦/MB
						</view>
						<view class=" ">
							条码：22625100154
						</view>
					</view>
					<view class="uni-row">
						男常年款净色V领T恤常年净色范冰冰同款色
					</view>
					<view class="uni-row uni-flex y-space-bettwen">
						<view class="uni-flex-item uni-flex y-space-bettwen">
							<view class="uni-flex-item">
								漂白
							</view>
							<view class="">
								XXL 185/100A
							</view>

						</view>
						<view class="uni-flex-item uni-flex ">
							<view class="uni-flex-item" style="text-align: center;">
								2019春
							</view>
							<view class="">
								￥2139
							</view>
						</view>
					</view>

				</view>
			

			</view>
			<view class="y-body-padding uni-row uni-flex y-space-bettwen">
				<view class="">
					导购：杨晴文
				</view>
				<view class=" ">
					<span class="">
						指定: 2.5折
					</span>
					<span class="">
						$427.80
					</span>
				</view>
			</view>
		</view>


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

</style>
