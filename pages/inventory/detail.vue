<template>
	<view class="y-body-bg">
		<view class="uni-list ">
			<uni-search-bar placeholder="商品编号" @confirm="search"></uni-search-bar>
		</view>
		<view class="uni-list ">
			<view class="y-form-item uni-list-cell uni-flex uni-row">
				<view class="uni-flex-item">
					商品名称
				</view>
				<view class="uni-flex-item">
					款号
				</view>
			</view>
			<view class="y-form-item uni-list-cell uni-flex uni-row">
				<view class="uni-flex-item">
					年份
				</view>
				<view class="uni-flex-item">
					季节
				</view>
				<view class="uni-flex-item">
					销量
				</view>
				<view class="uni-flex-item">
					库存
				</view>
			</view>
		</view>
		<view class="y-row-split">
		</view>
		<view class="uni-list">
			<view class="uni-row">
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view @tap="getProduct(i)" :id="i" class="scroll-view-item_H" v-for="i in 6" :key="i">
						<view class="uni-row">
							<image style="width: 81px;height: 81px;" src="../../static/img/home.png" mode=""></image>
						</view>
						<view class="uni-row">
							红{{i}}
						</view>
						<view class="uni-row">
							库存: 5
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

		<view class="uni-flex y-form-item" style="text-align: center; font-weight: bold;">
			<view class="uni-flex-item">
				商品编码
			</view>
			<view class="uni-flex-item">
				颜色
			</view>
			<view class="uni-flex-item">
				尺码
			</view>
			<view class="uni-flex-item">
				数量
			</view>

		</view>
		<view class="uni-list">
			<view class="uni-list-cell y-form-item uni-flex" style="text-align: center" v-for="i in 10" :key="i">
				<view class="uni-flex-item">
					123456{{i}}
				</view>
				<view class="uni-flex-item">
					红1
				</view>
				<view class="uni-flex-item">
					M
				</view>
				<view class="uni-flex-item">
					{{i}}
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components: {
			uniSearchBar
		},
		data() {
			return {

			};
		},
		methods: {
			go(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss">
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 30%;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}
</style>
