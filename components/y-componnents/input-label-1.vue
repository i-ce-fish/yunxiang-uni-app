<template>
	<view class="uni-list-cell">
		<view class="uni-list-cell-left uni-flex  ">
			<view>
				名称
			</view>
			<view class="require">
				*
			</view>
		</view>
		<view class="uni-list-cell-db uni-flex input-wrapper">
			<input type="text" class="input-value" value="" placeholder="商品" />
			<text class="icon  " :class="[!showPassword ? 'uni-eye-active' : '']" @click="changePassword">&#xe568;</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPassword: true
			};
		}
	}
</script>

<style lang="scss" scoped>
	.uni-list-cell-left {
		padding-right: 80rpx;
	}

	.input-value {
		height: 50upx;
		padding: 10upx;
		margin: 10rpx 25upx;
		line-height: 50upx;
		font-size: 28upx;
		background: #FFF;
		flex: 1;
		/* border */
		border-bottom: 1px solid $uni-color-primary;
	}

	.icon {

		height: 50upx;
		padding: 10upx;
		margin: 10rpx 0;
		margin-right: 25rpx;
		// line-height: 50upx;
		// font-size: 28upx;
		background: #FFF;

		/* border */
		// border-bottom: 1px solid $uni-color-primary;


		font-family: uniicons;
		font-size: 24px;
		font-weight: normal;
		font-style: normal;
		line-height: 24px;
		color: #999999;
	}
</style>
