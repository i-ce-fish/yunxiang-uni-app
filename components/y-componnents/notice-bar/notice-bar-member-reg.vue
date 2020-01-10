<template>
	<view>
		<notice-bar-popup :noticeText="noticeText">
			<template slot="content">
				<view>
					会员注册
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
				noticeText: "noticeText"
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
