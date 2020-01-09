<template>
	<view class="uni-padding-wrap uni-common-mt">
	 
	 
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
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			go() {
				uni.navigateBack({})
			}
		}
	}
</script>

<style lang="scss">

</style>
