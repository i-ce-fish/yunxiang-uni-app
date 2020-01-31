<template>
	<view class="container">

	</view>

</template>

<script>

	export default {
		components: {

		},
		data() {
			return {
				show: false,
				name: "名称:",
				fontSize: 30,
				padding: 30
			};
		},
		mounted() {
		},
		methods: {
			test() {
				this.$refs.popup.open()
			},
			add() {
				this.fontSize++
			},
			dec() {
				this.fontSize--
			},
			addP() {
				this.padding++
			},
			decP() {
				this.padding--
			}
		}
	}
</script>

<style lang="scss">
 </style>
