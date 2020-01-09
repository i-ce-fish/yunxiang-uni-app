<template>
	<view class="">

		<uni-notice-bar showIcon="true" showGetMore="true" @click="getMore" @getmore="getMore" single="true" text="会员卡券:1张,积分:999,储值卡99元"></uni-notice-bar>
		<uni-popup ref="popup" type="top">
			<uni-card title="会员详情">
				会员卡券:1张,积分:999,储值卡99元
			</uni-card>
		</uni-popup>
		<view class="uni-padding-wrap uni-common-mt ">
			商品9件
		</view>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import uniCard from '@/components/uni-card/uni-card.vue'


	export default {
		components: {
			uniNoticeBar,
			uniPopup,
			uniCard
		},
		data() {
			return {

			};
		},
		methods: {
			getMore() {
				this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="scss">

</style>
