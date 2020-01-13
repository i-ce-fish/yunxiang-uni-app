<template>
	<uni-search-bar style="background-color: transparent;" class="search-bar y-form-item" placeholder="商品编号" @confirm="search"></uni-search-bar>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components: {
			uniSearchBar
		},
		data() {
			return {

			};
		},
		methods: {
			serach(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	.search-bar {
		background-color: transparent;
	}
</style>
