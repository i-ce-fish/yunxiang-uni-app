<template>
	<view class="y-body">

		<view class="uni-row">
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view @tap="getProduct(i)" :id="i" class="scroll-view-item_H" v-for="i in 4" :key="i">
					<view class="uni-row">
						<image style="width: 81px;height: 81px;" src="../../static/img/home.png" mode=""></image>
					</view>

				</view>
			</scroll-view>
		</view>

		<view class="uni-row">
			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text">商品名称</view>
				<view class="text">￥169</view>
			</view>

			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
				<view class="text">款号：123456</view>
				<view class="text">2019夏</view>
				<view class="text">￥169</view>

			</view>

			<view class="uni-flex">
				<view class="uni-column">
					库存：123
				</view>
				<view class="uni-column">
					<text style="color: #0FAEFF;" @tap="go('../inventory/search')">详情</text>
				</view>
			</view>
		</view>
		<view class="uni-row-margin">
			标签信息
		</view>
		<view class="uni-row-margin">
			<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
				<view class="">
					图文详情
				</view>
			</view>
			<view class="" v-for="i in 4" :key=i>
				<image src="../../static/img/qq.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="uni-row-margin">
			商品详细信息
			<view class="uni-row">
				品牌
			</view>
			<view class="uni-row">
				款名
			</view>
			<view class="uni-row">
				分类
			</view>
			<view class="uni-row">
				系列
			</view>
			<view class="性别">
				男款
			</view>
		</view>
		<view class="uni-row-margin">
			卖点
			<view class="">
				<textarea value="" placeholder="请描述卖点" />
			</view>
		</view>
		<view class="uni-row-margin">
			星级
		</view>
	</view>
</template>

<script>
	export default {
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
		width: 100%;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}
</style>
