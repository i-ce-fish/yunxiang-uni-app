<template>
	<view>
		首页
		<button @tap="goPosStart">开始收银</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goPosStart(){
				uni.navigateTo({
					url:"guest"
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
