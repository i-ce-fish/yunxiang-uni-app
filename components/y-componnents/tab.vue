<template>
	<view>
		<uni-segmented-control class="y-margin" active-color="#007aff" style-type="button" :current="current" :values="items"
		 @clickItem="onClickItem"></uni-segmented-control>
		<view v-show="current === 0">
		</view>
		<view v-show="current === 1">
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"

	export default {
		components: {
			uniSegmentedControl
		},
		data() {
			return {
				items: ['当日未付款订单', '当日已付款订单'],
				current: 0
			};
		},
		methods: {

			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
