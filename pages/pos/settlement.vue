<template>
	<view class="">
		<notice-bar-member-detail></notice-bar-member-detail>
		<view class="uni-padding-wrap uni-common-mt ">
			<view class="uni-row">
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view @tap="getProduct(i)" :id="i" class="scroll-view-item_H" v-for="i in 6" :key="i">
						<view class="uni-row">
							<image style="width: 81px;height: 81px;" src="../../static/img/home.png" mode=""></image>
						</view>
						<view class="uni-row">
							商品名称
						</view>
						<view class="uni-row">
							价格
						</view>
					</view>
				</scroll-view>
				<uni-popup ref="popup" type="bottom">
					<uni-card title="商品清单">
						内容主体，可自定义内容及样式
					</uni-card>
				</uni-popup>

			</view>
			<view class="uni-row">
				<uni-list>
					<uni-list-item :show-arrow="false">
						总额：123
					</uni-list-item>
					<uni-list-item @tap="showPopup('coupon')" :show-arrow="true">
						优惠券/抵用券：123
						<uni-popup ref="coupon" type="bottom">
							<uni-card title="优惠券">
								内容主体，可自定义内容及样式
							</uni-card>
						</uni-popup>
					</uni-list-item>
					<uni-list-item @tap="showPopup('giftCard')" :show-arrow="true">
						礼品卡/会员卡：123
						<uni-popup ref="giftCard" type="bottom">
							<uni-card title="礼品卡/会员卡">
								内容主体，可自定义内容及样式
							</uni-card>
						</uni-popup>
					</uni-list-item>
					<uni-list-item @tap="showPopup('integral')" :show-arrow="true">
						积分抵现：123
						<uni-popup ref="integral" type="bottom">
							<uni-card title="积分抵现">
								内容主体，可自定义内容及样式
							</uni-card>
						</uni-popup>
					</uni-list-item>
					<uni-list-item @tap="showPopup('integral')" :show-arrow="true">
						运费：123
						<uni-popup ref="integral" type="bottom">
							<uni-card title="运费">
								内容主体，可自定义内容及样式
							</uni-card>
						</uni-popup>

					</uni-list-item>
				</uni-list>
			</view>
			<view class="uni-row">
				<button type="primary" @tap="putOrder">提交订单</button>
			</view>

		</view>
	</view>
</template>

<script>
	import noticeBarMemberDetail from "../../components/y-componnents/notice-bar/notice-bar-member-detail.vue"
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import uniCard from "../../components/uni-card/uni-card.vue"
	export default {
		components: {
			noticeBarMemberDetail,
			uniList,
			uniListItem,
			uniPopup,
			uniCard
		},
		data() {
			return {
				listShowHover: true
			};
		},
		methods: {
			scroll: function(e) {
				console.log(e)
			},
			putOrder() {
				uni.navigateTo({
					url: 'pay'
				})
			},
			getProduct(e) {
				this.$refs.popup.open()
			},
			showPopup(ref){
				// this.$refs[ref].open()
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
