<template>
	<view class="y-body">

		<view class="uni-row-margin uni-flex">
			<view class="uni-inline-item">
				<text>商品来源：</text>
			</view>
			<view class="uni-flex-item">
				<view class="uni-flex-item uni-flex">
					<view class="uni-flex-item">
						<radio value="" style="margin-right: 10upx;" />
						<text>本店</text>
					</view>
					<view class="uni-flex-item">
						<radio value="" style="margin-right: 10upx;" />
						<text>友店</text>
					</view>
					<view class="uni-flex-item">
						<radio value="" style="margin-right: 10upx;" />
						<text>分销</text>
					</view>
					<view class="uni-flex-item">
						<radio value="" style="margin-right: 10upx;" />
						<text>线上</text>
					</view>
				</view>
			</view>
		</view>


		<view class="uni-row-margin uni-flex">
			<view class="uni-inline-item">
				<text>退货原因：</text>
			</view>
			<view class="uni-flex-item">
				<input type="text" value="" class="uni-input" />
			</view>
		</view>
		<single-select-product></single-select-product>

		<view class="uni-row-margin">
			<button type="primary" @tap="go('../pos/add-product')">确认</button>
		</view>
	</view>
</template>

<script>
	import singleSelectProduct from "@/components/y-componnents/pos/single-select-product.vue"

	export default {
		components: {
			singleSelectProduct
		},
		data() {
			return {

			};
		},
		methods: {
			go(url) {
				uni.navigateTo({
					url: url
				})
			}
		}}
</script>

<style lang="scss">

</style>
