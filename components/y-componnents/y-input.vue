<template>
	<view class="uni-list-cell">
		<view class="uni-list-cell-left uni-flex">
			<view class="uni-flex-item">
				名称
			</view>
		 
		</view>
		<view class="uni-list-cell-db">
			<input class="y-input" type="text" value="" placeholder="商品" />
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
	.uni-list-cell {
		.require {
			color: red;
		}

		.y-input {
			/* single-input */
			height: 50upx;
			padding: 10upx;
			margin: 10rpx 25upx;
			line-height: 50upx;
			/* font-size: 28upx; */
			background: #FFF;
			flex: 1;

			/* border */
			border-bottom: 1px solid #007AFF;
			/* double-input */

			/* selected */
		}
	}
</style>
