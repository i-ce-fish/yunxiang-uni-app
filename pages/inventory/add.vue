<!--<template>-->
<!--	<view class="y-body">-->


<!--		<view class="uni-row-margin">-->
<!--			<input type="text" value="" class="uni-input" placeholder="款号" />-->
<!--		</view>-->
<!--		<view class="uni-row-margin">-->
<!--			<input type="text" value="" class="uni-input" placeholder="颜色" />-->
<!--		</view>-->
<!--		<view class="uni-row-margin">-->
<!--			<input type="text" value="" class="uni-input" placeholder="尺码" />-->
<!--		</view>-->
<!--		<view class="uni-row-margin">-->
<!--			<input type="text" value="" class="uni-input" placeholder="吊牌价" />-->
<!--		</view>-->
<!--		<view class="uni-row-margin">-->
<!--			<input type="text" value="" class="uni-input" placeholder="条码" />-->
<!--		</view>-->
<!--		<view class="uni-row-margin">-->
<!--			<input type="text" value="" class="uni-input" placeholder="原条码" />-->
<!--		</view>-->

<!--		<view class="uni-row-margin">-->
<!--			<button type="primary"> 确认入库</button>-->
<!--		</view>-->


<!--	</view>-->
<!--</template>-->

<template>
	<view class="container">
		<view class="form">
			<form>
				<tui-list-view title="库存基本信息">
					<tui-list-cell class="overflow-visable" :hover="false">
						<view class="y-form-item    ">
							<view class="label">款号</view>
							<y-dropdown-list class="dropdown-list" :listData="brandList"></y-dropdown-list>
						</view>
					</tui-list-cell>
					<tui-list-cell  class="overflow-visable" :hover="false">
						<view class="y-form-item">
							<view class="label">颜色</view>
							<y-dropdown-list class="dropdown-list" :listData="brandList"></y-dropdown-list>
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">尺码</view>
							<y-radio :data="[{label:'男',value:'0'},{label:'女',value:'1'}]"></y-radio>

						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">吊牌价</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">条码</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">原条码</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
				</tui-list-view>

				<view class="tui-btn-box">
					<tui-button type="blue" shape="circle" @click="add">确认入库</tui-button>
				</view>

			</form>
		</view>
	</view>
</template>

<script>
	import yDropdownList from '../../components/y-componnents/y-dropdown-list/y-dropdown-list.vue'
	import yRadio from '../../components/y-componnents/y-radio/y-radio.vue'
	import yPicker from '../../components/y-componnents/y-picker/y-picker'
	export default {
		components: {
			yDropdownList,
			yRadio,
			yPicker
		},
		data() {
			return {
				brandList: [{
					label: "现金支付",
					icon: "wechat",
					color: "#80D640",
					size: 30
				}, {
					label: "微信支付",
					icon: "wechat",
					color: "#80D640",
					size: 30
				}, {
					label: "支付宝支付",
					icon: "alipay",
					color: "#00AAEE",
					size: 30
				}, {
					label: "银行卡支付",
					icon: "bankcard-fill",
					color: "#ff7900",
					size: 30
				}]
			}
		},
		methods: {

			add() {
				this.toast('未完善的功能')
			}
		}
	}
</script>

<style>
	.overflow-visable {
		/*下拉框越界要显示*/
		overflow: visible;
	}

	.dropdown-list {
		/*居左还是居右*/
		/*text-align: right*/

	}
</style>


