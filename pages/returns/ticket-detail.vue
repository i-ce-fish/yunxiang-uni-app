<template>
<!--	<view class="y-body">-->

<!--		<view class="uni-row-margin uni-flex">-->
<!--			<view class="uni-inline-item">-->
<!--				<text>商品来源：</text>-->
<!--			</view>-->
<!--			<view class="uni-flex-item">-->
<!--				<view class="uni-flex-item uni-flex">-->
<!--					<view class="uni-flex-item">-->
<!--						<radio value="" style="margin-right: 10upx;" />-->
<!--						<text>本店</text>-->
<!--					</view>-->
<!--					<view class="uni-flex-item">-->
<!--						<radio value="" style="margin-right: 10upx;" />-->
<!--						<text>友店</text>-->
<!--					</view>-->
<!--					<view class="uni-flex-item">-->
<!--						<radio value="" style="margin-right: 10upx;" />-->
<!--						<text>分销</text>-->
<!--					</view>-->
<!--					<view class="uni-flex-item">-->
<!--						<radio value="" style="margin-right: 10upx;" />-->
<!--						<text>线上</text>-->
<!--					</view>-->
<!--				</view>-->
<!--			</view>-->
<!--		</view>-->

<!--		<view class="uni-row-margin uni-flex">-->
<!--			<view class="uni-inline-item">-->
<!--				<text>退货原因：</text>-->
<!--			</view>-->
<!--			<view class="uni-flex-item">-->
<!--				<input type="text" value="" class="uni-input" />-->
<!--			</view>-->
<!--		</view>-->
<!--		<single-select-product></single-select-product>-->

<!--		<view class="uni-row-margin">-->
<!--			<button type="primary" @tap="go('../pos/add-product')">确认</button>-->
<!--		</view>-->
<!--	</view>-->

	<view class="container">

<!--		商品来源-->
		<tui-list-view title="商品来源">
				<radio-group @change="onFrom">
					<tui-list-cell :hover="false" class="tui-flex tui-align-between">
						<radio  value="0" style="margin-right: 10upx;" >本店</radio>
						<radio value="1" style="margin-right: 10upx;" >友店</radio>
						<radio value="2" style="margin-right: 10upx;" >分销</radio>
						<radio value="3" style="margin-right: 10upx;" >线上</radio>
					</tui-list-cell>
				</radio-group>
		</tui-list-view>

		<tui-list-view title="商品明细">
			<checkbox-group>
			<tui-list-cell :hover="false" v-for="(item,index) in 5" :key="index">
				<checkbox value="cb" />
<!--					<image src="https://img.alicdn.com/imgextra/i1/30266471/O1CN01FDP0yn1xflRdq5uMJ_!!0-saturn_solar.jpg_220x220.jpg_.webp"-->
<!--						   class="tui-pro-img tui-col-3" mode="widthFix" />-->
<!--					<view class="tui-pro-content tui-col-9">-->
<!--						<view class="tui-flex tui-align-between">-->
<!--							<view class="pro-brand">-->
<!--								品牌-->
<!--							</view>-->
<!--							<view class="po-sn">-->
<!--								条码: 123456{{item}}-->
<!--							</view>-->
<!--						</view>-->
<!--						<view class="pro-name">-->
<!--							商品名称-->
<!--						</view>-->
<!--						<view class="pro-detail tui-flex tui-align-between">-->
<!--							<view class="pro-color">-->
<!--								颜色-->
<!--							</view>-->
<!--							<view class="pro-size">-->
<!--								尺码-->
<!--							</view>-->
<!--							<view class="pro-season">-->
<!--								季节-->
<!--							</view>-->
<!--						</view>-->
<!--					</view>-->
				<product-img-item ></product-img-item>
				</tui-list-cell>
			</checkbox-group>
		</tui-list-view>

		<view class="btn-box">
			<view class="tui-col-12">
				<tui-button type="blue" shape="circle" @tap="go('../pos/add-product')">确认</tui-button>
			</view>
		</view>


	</view>
</template>

<script>

	import ProductImgItem from "../product/com/product-img-item";
	export default {
		components: {
			ProductImgItem

		},
		data() {
			return {
				productFrom : ''
			};
		},
		methods: {

			onFrom(e) {
				console.log(e.detail.value)
					this.productFrom = e.detail.value
				}
		}
	}
</script>

<style lang="scss">

	.tui-pro-img {
		// height: auto;
		padding-right: 20rpx;
		padding-bottom: 20rpx;
	}

	.btn-box{
		margin:40rpx 50rpx;
	}

</style>
