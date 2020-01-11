<template>
	<view class="y-body">
		<view class="uni-flex uni-row-margin">
			<view class="uni-flex-item">
				<input type="text" value="" class="uni-input" placeholder="商品编号" />
			</view>

			<view class="uni-inline-item">
				<button type="primary" @tap="go('detail')">确认</button>
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
			go(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
