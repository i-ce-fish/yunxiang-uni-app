<template>
	<view class="uni-list">
		<uni-list>
			<uni-list-item v-for="i in 4" :key="i" :show-arrow="false">
				<view class="uni-row-margin">
					<view class="text">
						小票单号：1234567789
					</view>
					<view class="text">
						2019/12/12 12:12:00
					</view>
				</view>

			</uni-list-item>
		</uni-list>
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
