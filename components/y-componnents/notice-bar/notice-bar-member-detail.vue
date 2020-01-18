<template>
	<view>
		<notice-bar>
			<template>
				<view class="tui-flex tui-align-between ">
					<view>
						会员
					</view>
					<view>
						杨先生
					</view>
				</view>
				<view class="tui-flex tui-align-between ">
					<view>
						手机
					</view>
					<view>
						13611605568
					</view>
				</view>
				<view class="tui-flex tui-align-between ">
					<view>
						生日
					</view>
					<view>
						1988/08/08
					</view>
				</view>
				<view class="tui-flex tui-align-between ">
					<view>
						会员等级
					</view>
					<view style="color: #D53912;">
						三级
					</view>
				</view>
				<view class="tui-flex tui-align-between ">
					<view>
						积分
					</view>
					<view>
						123分
					</view>
				</view>
				<view class="tui-flex tui-align-between ">
					<view>
						卡券
					</view>
					<view>
						31张
					</view>
				</view>
				<view class="tui-flex tui-align-between ">
					<view>
						储值卡
					</view>
					<view>
						123456元
					</view>
				</view>
				<tui-divider></tui-divider>
				<view class="tui-flex tui-align-between ">
					<view>
						分享人
					</view>
					<view>
						王先生
					</view>
				</view>
				<view class="tui-flex tui-align-between ">
					<view>
						手机
					</view>
					<view>
						13266897543
					</view>
				</view>

				<view class="tui-flex tui-align-between ">
					<view>
						会员等级
					</view>
					<view style="color: #D53912;">
						三级
					</view>
				</view>
				<view class="tui-flex tui-align-between ">
					<view>
						卡券
					</view>
					<view>
						31张
					</view>
				</view>
				<view class="tui-flex tui-align-between ">
					<view>
						分享券
					</view>
					<view>
						12张
					</view>
				</view>
			</template>
		</notice-bar>
	</view>
</template>

<script>
	import tuiDivider from "@/components/divider/divider"
	import noticeBar from './notice-bar.vue'

	export default {
		components: {
			noticeBar,
			tuiDivider
		},
		props: {},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
