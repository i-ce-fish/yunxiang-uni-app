<template>
	<uni-list>
		<uni-list-item v-for="i in 4" :key="i" :show-arrow="false"  :show-switch="true" >
			<view class="uni-row-margin uni-flex">
				<view class="" style="width: 100px;">
					<image style="width: 100px;height: 100px;" src="../../static/img/homeHL.png" mode=""></image>
				</view>
				<view class="uni-row-margin  uni-flex-item flex">
					<view class="uni-flex" style="-webkit-justify-content: space-between;justify-content: space-between;">
						<view class="">
							品牌
						</view>
						<view class="">
							条码：123456456
						</view>
					</view>
					<view>
						<view class="uni-flex">
							商品名称
						</view>
					</view>
					<view class="uni-flex">
						<view class="uni-flex-item">
							颜色
						</view>
						<view class="uni-flex-item">
							尺码
						</view>
						<view class="uni-flex-item">
							季节
						</view>
					</view>
				</view>
			</view>
			<view class="uni-flex">
				<view class="uni-flex-item">

					<input class="uni-input" type="text" value="" placeholder="导购" />
				</view>
				<view class="uni-flex-item">
					<input class="uni-input" type="text" value="" placeholder="折扣规则" />
				</view>
			</view>
			<view class="uni-flex">
				<view class="uni-flex-item uni-row-margin">
					<input class="uni-input" type="text" value="" placeholder="为谁买" />
				</view>
				<view class="uni-flex-item uni-row-margin">
					<input class="uni-input" type="text" value="" placeholder="单价" />
				</view>
			</view>
		</uni-list-item>
	</uni-list>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"

	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>
