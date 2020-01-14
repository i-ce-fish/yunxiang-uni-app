<template>
	<view class="input-label">
		<view class="uni-flex label">
			{{label}}
			<span v-if="requireStar" class="require-star">
				*
			</span>
		</view>
		<view class="uni-flex-item uni-flex value">
			<input type="text" class="uni-flex-item" />
			<span class="clear">
				X
			</span>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			label: {
				type: String
			},
			requireStar: {
				type: [String, Boolean],
				default: false
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.input-label {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.label {
		width: 200rpx;
		height: 80rpx;
		line-height: 80rpx;
		padding-right: 50rpx;
	}

	.require-star {
		color: red;
	}

	.value {
		height: 50rpx;
		border-bottom: 1px solid $uni-color-primary;
	}

	.clear {
		background-color: #b4b4b4;
		border-radius: 50%;
		color: #ececec;
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		text-align: center;
		font-size: 24rpx;
	}
</style>
