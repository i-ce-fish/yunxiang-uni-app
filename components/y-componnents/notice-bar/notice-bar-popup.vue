<template>
	<view>
		<notice-bar @getMore="getMore" :text="noticeText"></notice-bar>
		<uni-popup ref="popup" type="top">
			<uni-card :title="cardTitle">
				<slot name="content"></slot>
			</uni-card>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import uniCard from '@/components/uni-card/uni-card.vue'
	import noticeBar from './notice-bar.vue'

	export default {
		components: {
			uniPopup,
			uniCard,
			noticeBar
		},
		props: {
			cardTitle: {
				String,
				default: null
			},
			noticeText:{
				String,
				default:""
			}
		},
		data() {
			return {
			}
		},
		methods: {
			getMore() {	
				this.$refs.popup.open()
			}
		}
	}
</script>

<style>

</style>
