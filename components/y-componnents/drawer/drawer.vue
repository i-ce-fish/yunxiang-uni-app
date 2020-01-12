<template>
	<uni-drawer :visible="showDrawer" mode="right" @close="closeDrawer">
		<view style="padding:30rpx;">
			<view class="uni-title">筛选条件</view>
			<view class="uni-row-margin">
				<input type="text" value="" class="uni-input" />
			</view>
			<view class="uni-row-margin">
				<button type="primary">确定</button>
			</view>
			<slot></slot>
		</view>
	</uni-drawer>
</template>

<script>
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'

	export default {
		props: {
			showDrawer: [String, Boolean]
		},
		components: {
			uniDrawer
		},
		data() {
			return {

			};
		},
		methods: {
		
			closeDrawer() {
				this.$emit('close')
			}
		}
	}
</script>

<style lang="scss">

</style>
