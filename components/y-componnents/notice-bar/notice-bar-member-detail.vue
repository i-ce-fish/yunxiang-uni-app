<template>
	<view>
		<notice-bar-popup :noticeText="noticeText">
			<template slot="content">
				<view>
					会员详情
				</view>
			</template>
		</notice-bar-popup>
	</view>
</template>

<script>
	import noticeBarPopup from "./notice-bar-popup.vue"

	export default {
		components: {
			noticeBarPopup
		},
		props: {},
		data() {
			return {
				noticeText: "会员信息：卡券、积分、储值卡"
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
