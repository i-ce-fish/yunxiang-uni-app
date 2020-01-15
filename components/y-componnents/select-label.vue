<template>
	<view class="uni-list-cell">
		<view class="uni-list-cell-left">
			名称
		</view>
		<view class="uni-list-cell-db uni-flex input-wrapper">
			<view class="value">
				{{value}}
			</view>
			<view class="icon"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPassword: true,
				value:"placeholder"
			};
		}
	}
</script>

<style lang="scss" scoped>
	.uni-list-cell-left {
		padding-right: 80rpx;
	}

	.input-wrapper {
		position: relative;
	}

	.value {
		/* single-input */
		// height: 50upx;
		// padding: 10upx 25upx;
		// margin: 10rpx 0;
		// line-height: 50upx;
		// font-size: 28upx;
		// background: #FFF;
		// flex: 1;

		/* border */
		/* double-input */

		/* selected */
	}

	.icon {

		position: absolute;
		right: 30rpx;
		bottom: 10rpx;
		width: 0;
		height: 0;
		border-width: 6px;
		border-style: solid;
		border-color: transparent $uni-color-primary $uni-color-primary  transparent;
	}
</style>
