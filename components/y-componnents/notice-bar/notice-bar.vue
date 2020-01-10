<template>
	<uni-notice-bar showIcon="true" showGetMore="true" @tap="getMore" @getmore="getMore" single="true" :text="text"></uni-notice-bar>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	export default {
		props: {
			text: String
		},
		components: {
			uniNoticeBar
		},
		data() {
			return {

			}
		},
		methods: {
			getMore() {
				this.$emit('getMore')
			}
		}
	}
</script>

<style>

</style>
