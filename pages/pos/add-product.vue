<template>
	<view class="y-body uni-flex uni-column">
		<view class="uni-flex-item" >
			<scroll-view   scroll-y="true" class="scroll-Y"  >
				<search-add-procut class="scroll-view-item  "></search-add-procut>
				<single-product class="scroll-view-item  "></single-product>
			</scroll-view>
		</view>
		<view class="uni-inline-item uni-row-margin" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
			<view class="text uni-inline-item">
				合计：123
			</view>
			<view class="uni-inline-item">
				<button type="primary" @tap="goSettlement">结算</button>
			</view>
		</view>
	</view>
</template>

<script>
	import singleProduct from "@/components/y-componnents/pos/single-product.vue"
	import searchAddProcut from '../../components/y-componnents/pos/search-add-product.vue'

	export default {
		components: {
			singleProduct,
			searchAddProcut
		},
		data() {
			return {
				products: [" "],
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			};
		},
		methods: {
			addProduct() {
				this.products.push("")
			},

			goSettlement() {
				uni.navigateTo({
					url: "settlement"
				})
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			},


		}

	}
</script>

<style lang="scss">
	.scroll-Y {
		display: inline;
	}
	.scroll-view-item {
		height: 100upx;
	}
</style>
