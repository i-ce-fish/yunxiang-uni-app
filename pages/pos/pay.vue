<template>
	<view class="container">
		<notice-bar-member-detail></notice-bar-member-detail>
		<tui-list-view title="支付信息" color="#777" class="tui-list-view">
			<view v-for="(o,i) in payList" :key="i">
				<tui-list-cell class="pay-type-cell tui-flex tui-align-between" :hover="false">
					<view>
						支付方式
					</view>
					<view class="tui-drop-input-box  tui-col-8 ">
						<tui-dropdown-list :show="o.dropdownShow" :top="94" :height="500">
							<template v-slot:selectionbox>
								<view class="y-color-href" @tap="dropDownList(i)">
									{{o.label}}
									<view class="tui-animation" :class="[o.dropdownShow?'tui-animation-show':'']">
										<tui-icon name="turningdown" :size="20"></tui-icon>
									</view>
								</view>
							</template>
							<template v-slot:dropdownbox>
								<view class="tui-selected-list">
									<scroll-view scroll-y class="tui-dropdown-scroll">
										<block v-for="(item,index) in dropdownlistData" :key="index">
											<tui-list-cell @click="selectPayType(index,i)" :last="dropdownlistData.length-1==index">
												<tui-icon :name="item.icon" :size="item.size" :color="item.color"></tui-icon>
												<text class=" tui-ml-20">{{item.name}}</text>
											</tui-list-cell>
										</block>
									</scroll-view>
								</view>
							</template>
						</tui-dropdown-list>
					</view>
				</tui-list-cell>
				<tui-list-cell class="tui-flex tui-align-between" :hover="false">
					<view class="">
						{{o.label}}
					</view>
					<view class="">
						<input placeholder-class="phcolor" class="tui-input input-pay" name="name" placeholder="请输入金额" maxlength="50"
						 type="text" />
					</view>
				</tui-list-cell>
			</view>
			<tui-list-cell class="tui-flex tui-align-between " :hover="false">
				<view class="y-color-href" @tap="cutPayType">
					-取消组合
				</view>
				<view class="y-color-href" @tap="addPayType">
					+组合收款
				</view>
			</tui-list-cell>
			<tui-list-cell class="tui-flex tui-align-between" :hover="false">
				<view class="">
					总额
				</view>
				<view class="">
					123.12
				</view>
			</tui-list-cell>

		</tui-list-view>
		<tui-list-view title="优惠信息" color="#777" class="tui-list-view">

				 	<tui-list-cell class="tui-flex tui-align-between" :hover="false">
				<view class="">
					优惠券/抵用券
				</view>
				<view class="">
					123.12
				</view>
			</tui-list-cell>	<tui-list-cell class="tui-flex tui-align-between" :hover="false">
				<view class="">
					礼品卡/会员卡
				</view>
				<view class="">
					123.12
				</view>
			</tui-list-cell>	<tui-list-cell class="tui-flex tui-align-between" :hover="false">
				<view class="">
					积分抵现
				</view>
				<view class="">
					123.12
				</view>
			</tui-list-cell>
			<tui-list-cell class="tui-flex tui-align-between" :hover="false">
				<view class="">
					运费
				</view>
				<view class="">
					123.12
				</view>
			</tui-list-cell>
		</tui-list-view>
				<tui-list-view title="  " color="#777" class="tui-list-view">
<!--					<tui-list-cell class="tui-flex tui-align-between" :hover="false">-->
			<view class="tui-flex tui-align-between btn-wrapper">
				<view class="tui-col-5">
					<tui-button type="blue" shape="circle" @click="go('/')">结算订单</tui-button>
				</view>
				<view class="tui-col-5">
					<tui-button class="btn-gray" type="gray" shape="circle" @click="go('ticket')">打印小票</tui-button>

				</view>
				</view>
<!--			</tui-list-cell>-->
</tui-list-view>
	</view>
</template>

<script>
	import noticeBarMemberDetail from "../../components/y-componnents/notice-bar/notice-bar-member-detail.vue"
	import tuiIcon from "@/components/icon/icon"
	import tuiDropdownList from "@/components/dropdown-list/dropdown-list"

	export default {
		components: {
			noticeBarMemberDetail,
			tuiDropdownList,
			tuiIcon
		},
		data() {
			return {
				selectedPayType: "选择支付方式",
				payList: [{
					label: "现金支付",
					value: "cash",
					money: 0.00,
					dropdownShow: false
				}],
				dropdownlistData: [{
					name: "现金支付",
					icon: "wechat",
					color: "#80D640",
					size: 30
				}, {
					name: "微信支付",
					icon: "wechat",
					color: "#80D640",
					size: 30
				}, {
					name: "支付宝支付",
					icon: "alipay",
					color: "#00AAEE",
					size: 30
				}, {
					name: "银行卡支付",
					icon: "bankcard-fill",
					color: "#ff7900",
					size: 30
				}],

			}
		},
		methods: {
			dropDownList(index) {
				this.payList[index].dropdownShow = !this.payList[index].dropdownShow
			},
			selectPayType(payTypeIndex, payListIndex) {
				this.payList[payListIndex].label = this.dropdownlistData[payTypeIndex].name
				this.payList[payListIndex].dropdownShow = !this.payList[payListIndex].dropdownShow
			},
			cutPayType() {
				if (this.payList.length > 1) {
					this.payList.pop()
				}
			},
			addPayType() {
				//注意此处是浅拷贝，不是深拷贝
				this.payList.push({ ...this.payList[0]
				})

			}
		}
	}
</script>

<style lang="scss">
	.pay-type-cell {
		overflow: visible;
	}

	.tui-drop-input-box {
		box-sizing: border-box;

		text-align: right
	}

	.tui-animation {
		display: inline-block;
		transform: rotate(0deg);
		transition: all 0.2s;
	}

	.tui-animation-show {
		transform: rotate(180deg);
	}

	.tui-selected-list {
		background: #fff;
		border-radius: 20upx;
		overflow: hidden;
		transform: translateZ(0);
	}

	.tui-dropdown-scroll {}

	.tui-input {
		font-size: 32rpx;
		color: #333;
	}

	.input-pay {
		text-align: right;
	}
	.btn-wrapper{
		padding: 0 30rpx;
	}
</style>
