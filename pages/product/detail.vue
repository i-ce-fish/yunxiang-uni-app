<template>
	<view class="container ">
		<!--banner-->
		<y-swiper :height="scrollH"></y-swiper>
		<!--banner-->
		<view class="tui-pro-detail">
			<view class="tui-product-title tui-border-radius">

				<view class="tui-pro-titbox tui-flex ">
					<view class="pro-title tui-col-10">谈判官明星同款耳坠韩国气质简约显脸瘦的耳环女百搭个性长款耳钉</view>
					<view class="pro-price tui-align-center ">￥99.99</view>
				</view>
				<view class="y-padding">
					<view class="tui-sale-info  y-font-s  y-color-gray">
							<view class="text">款号：123456</view>
							<view class="text">2019夏</view>
<!--						todo -->
							<view class="text y-color-href" @tap="go()">库存: 123</view>
					</view>
					<view class="pro-label">
						<view class="item"  v-for="(o,i) of 5">
<!--							todo random color-->
<!--							todo  新增编辑标签-->
							<tui-tag size="small" :plain="true" type="high-green" shape="circle" >标签{{i}}</tui-tag>
						</view>
					</view>
				</view>
			</view>

			<view class="tui-cmt-box tui-mtop tui-radius-all">
				<view class="tui-list-cell tui-last tui-between">
					<view class="tui-bold  tui-col-12">详细信息</view>
				</view>
				<view class="more-info-box y-font-xs">
					<view class="tui-flex tui-align-between item">
						<view>品牌</view>
						<view>森马</view>
					</view>
					<view class="tui-flex tui-align-between item">
						<view>款名</view>
						<view>潮流范冰冰同款</view>
					</view>
					<view class="tui-flex tui-align-between item">
						<view>分类</view>
						<view>羽绒</view>
					</view>
					<view class="tui-flex tui-align-between item">
						<view>系列</view>
						<view>系列</view>
					</view>
					<view class="tui-flex tui-align-between item">
						<view>性别</view>
						<view>男款</view>
					</view>
				</view>
			</view>
			<view class="tui-cmt-box tui-mtop tui-radius-all">
				<view class="tui-list-cell tui-last tui-between">
					<view class="tui-bold  tui-col-12">卖点</view>
				</view>

				<view class="sell-point-box  y-padding">
					<view class="item">
					<view class="">
<!--						todo 头像图片-->
						<view>用户名:1235631</view>
					</view>
					<view class="item">卖点内容卖点内容卖点内容卖点内容卖点内容卖点内容卖点内容卖点内容卖</view>
					</view>
				</view>
<!--				todo 新增编辑  卖点-->
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
	import tuiTag from "@/components/tag/tag"
	import YSwiper from "../../components/y-componnents/y-swiper/y-swiper";
	export default {
		components: {
			YSwiper,
			tuiIcon,
			tuiNomore,tuiTag
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

	.tui-bold {
		font-weight: bold;
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



	/*信息*/
	.pro-label{
		padding-top:10rpx;
		.item{
			padding-right: 10rpx;
			display: inline-block;
		}
	}

	/*	详细信息*/
	/*卖点信息*/
	.more-info-box, .sell-point-box {
		padding: 0rpx 30rpx 30rpx 30rpx;
		.item {
			padding: 10rpx 0rpx;
		}
	}

</style>
