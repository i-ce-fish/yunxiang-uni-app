<template>
	<view class="y-body">
			<uni-search-bar placeholder="商品编号" @confirm="search"></uni-search-bar>
		<view class="uni-flex uni-row-margin">

			<view class="uni-inline-item">
				<button type="primary" @tap="go('detail')">确认</button>
			</view>

		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components:{
			uniSearchBar
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
		}
	}
</script>

<style lang="scss">

</style>
