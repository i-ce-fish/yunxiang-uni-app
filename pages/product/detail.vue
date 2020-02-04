<!--	<view class="y-body">-->

<!--		<view class="uni-row">-->
<!--			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">-->
<!--				<view @tap="getProduct(i)" :id="i" class="scroll-view-item_H" v-for="i in 4" :key="i">-->
<!--					<view class="uni-row">-->
<!--						<image style="width: 81px;height: 81px;" src="../../static/img/home.png" mode=""></image>-->
<!--					</view>-->

<!--				</view>-->
<!--			</scroll-view>-->
<!--		</view>-->

<!--		<view class="uni-row">-->
<!--			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">-->
<!--				<view class="text">商品名称</view>-->
<!--				<view class="text">￥169</view>-->
<!--			</view>-->

<!--			<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">-->
<!--				<view class="text">款号：123456</view>-->
<!--				<view class="text">2019夏</view>-->
<!--				<view class="text">￥169</view>-->

<!--			</view>-->

<!--			<view class="uni-flex">-->
<!--				<view class="uni-column">-->
<!--					库存：123-->
<!--				</view>-->
<!--				<view class="uni-column">-->
<!--					<text style="color: #0FAEFF;" @tap="go('../inventory/search')">详情</text>-->
<!--				</view>-->
<!--			</view>-->
<!--		</view>-->
<!--		<view class="uni-row-margin">-->
<!--			标签信息-->
<!--		</view>-->
<!--		<view class="uni-row-margin">-->
<!--			<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">-->
<!--				<view class="">-->
<!--					图文详情-->
<!--				</view>-->
<!--			</view>-->
<!--			<view class="" v-for="i in 4" :key=i>-->
<!--				<image src="../../static/img/qq.png" mode="aspectFit"></image>-->
<!--			</view>-->
<!--		</view>-->
<!--		<view class="uni-row-margin">-->
<!--			商品详细信息-->
<!--			<view class="uni-row">-->
<!--				品牌-->
<!--			</view>-->
<!--			<view class="uni-row">-->
<!--				款名-->
<!--			</view>-->
<!--			<view class="uni-row">-->
<!--				分类-->
<!--			</view>-->
<!--			<view class="uni-row">-->
<!--				系列-->
<!--			</view>-->
<!--			<view class="性别">-->
<!--				男款-->
<!--			</view>-->
<!--		</view>-->
<!--		<view class="uni-row-margin">-->
<!--			卖点-->
<!--			<view class="">-->
<!--				<textarea value="" placeholder="请描述卖点" />-->
<!--			</view>-->
<!--		</view>-->
<!--		<view class="uni-row-margin">-->
<!--			星级-->
<!--		</view>-->
<!--	</view>-->
<template>
	<view class="container ">
		<!--banner-->
		<y-swiper :height="scrollH"></y-swiper>
		<!--banner-->
		<view class="tui-pro-detail">
			<view class="tui-product-title tui-border-radius">

				<view class="tui-pro-titbox">
					<view class="pro-title">谈判官明星同款耳坠韩国气质简约显脸瘦的耳环女百搭个性长款耳钉 个性水滴耳环【A2】</view>
				</view>
				<view class="y-padding">
					<view class="tui-sale-info tui-size y-gray">
						<view>快递：0.00</view>
						<view>月销2000</view>
						<view>浙江杭州</view>
					</view>
				</view>
			</view>

			<view class="tui-cmt-box tui-mtop tui-radius-all">
				<view class="tui-list-cell tui-last tui-between">
					<view class="tui-bold  tui-col-12">详细信息</view>

				</view>
				<view class="more-info-box">
					<view class="tui-flex tui-align-between item">
						<view>名称</view>
						<view>name</view>
					</view>
					<view class="tui-flex tui-align-between item">
						<view>name</view>
						<view>name</view>
					</view>
					<view class="tui-flex tui-align-between item">
						<view>name</view>
						<view>name</view>
					</view>
				</view>
			</view>

			<view class="tui-nomore-box">
				<tui-nomore text="图片详情" :visible="true" bgcolor="#f7f7f7"></tui-nomore>
			</view>
			<view class="tui-product-img tui-radius-all">
				<image :src="'https://www.thorui.cn/img/detail/'+(index+1)+'.jpg'" v-for="(img,index) in 20" :key="index" mode="widthFix"></image>
			</view>
			<tui-nomore text="已经到最底了" :visible="true" bgcolor="#f7f7f7"></tui-nomore>
			<view class="tui-safearea-bottom"></view>
		</view>

	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiNomore from "@/components/nomore/nomore"
	import YSwiper from "../../components/y-componnents/y-swiper/y-swiper";
	export default {
		components: {
			YSwiper,
			tuiIcon,
			tuiNomore,
		},
		data() {
			return {
				height: 64, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,

				topMenu: [{
					icon: "message",
					text: "消息",
					size: 26,
					badge: 3
				}, {
					icon: "home",
					text: "首页",
					size: 23,
					badge: 0
				}, {
					icon: "people",
					text: "我的",
					size: 26,
					badge: 0
				}, {
					icon: "cart",
					text: "购物车",
					size: 23,
					badge: 2
				}, {
					icon: "kefu",
					text: "客服小蜜",
					size: 26,
					badge: 0
				}, {
					icon: "feedback",
					text: "我要反馈",
					size: 23,
					badge: 0
				}, {
					icon: "share",
					text: "分享",
					size: 26,
					badge: 0
				}],
				menuShow: false,
				popupShow: false,
				value: 1,
				collected: false
			}
		},
		onLoad: function(options) {
			let obj = {};
			// #ifdef MP-WEIXIN
			obj = wx.getMenuButtonBoundingClientRect();
			// #endif
			setTimeout(() => {
				uni.getSystemInfo({
					success: (res) => {
						// this.width = obj.left || res.windowWidth;
						// this.height = obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44);
						// this.top = obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6);
						this.scrollH = res.windowWidth
					}
				})
			}, 50)
		},
		methods: {



			change: function(e) {
				this.value = e.value
			},
			//收藏
			collecting: function() {
				this.collected = !this.collected
			},

		}
	}
</script>

<style lang="scss">
	/* icon 也可以使用组件*/

	.tui-banner-swiper {
		position: relative;
	}

	.tui-banner-swiper .tui-tag-class {
		position: absolute;
		color: #fff;
		bottom: 30rpx;
		right: 0;
	}

	.tui-slide-image {
		width: 100%;
		display: block;
	}

	/*顶部菜单*/

	/*内容 部分*/
	.tui-size {
		font-size: 24rpx;
		line-height: 24rpx;
	}

	.tui-border-radius {
		border-bottom-left-radius: 24rpx;
		border-bottom-right-radius: 24rpx;
		overflow: hidden;
	}

	.tui-radius-all {
		border-radius: 24rpx;
		overflow: hidden;
	}

	.tui-mtop {
		margin-top: 26rpx;
	}

	.tui-pro-detail {
		box-sizing: border-box;
		color: #333;
	}

	.tui-product-title {
		background: #fff;
		padding: 30rpx 0;
	}

	.tui-pro-titbox {
		font-size: 32rpx;
		font-weight: 500;
		position: relative;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.tui-sub-title {
		padding: 20rpx 0;
	}

	.tui-sale-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 30rpx;
	}

	.tui-list-cell {
		position: relative;
		display: flex;
		align-items: center;
		font-size: 26rpx;
		line-height: 26rpx;
		padding: 36rpx 30rpx;
		box-sizing: border-box;
	}

	.tui-bold {
		font-weight: bold;
	}

	.tui-list-cell::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 126rpx;
	}

	.tui-last::after {
		border-bottom: 0 !important;
	}

	.tui-cmt-box {
		background: #fff;
	}

	.tui-between {
		justify-content: space-between !important;
	}

	.tui-nomore-box {
		padding-top: 10rpx;
	}

	.tui-product-img {
		transform: translateZ(0);
	}

	.tui-product-img image {
		width: 100%;
		display: block;
	}

	.tui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}

	/*	详细信息*/
	.more-info-box {
		padding: 0rpx 30rpx 30rpx 30rpx;

		.item {
			padding: 10rpx 0rpx;
		}
	}
</style>
