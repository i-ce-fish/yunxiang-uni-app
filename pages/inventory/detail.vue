<template>
	<view class="container">
		<y-search-bar class="y-bgc search-bar" placeholder="扫码/输入商品编号"></y-search-bar>
        <tui-list-view title="商品信息">
			<tui-collapse :index="0" :current="0"  :arrow="false">
				<template v-slot:title>
					<tui-list-cell class="tui-flex tui-align-between" :hover="false" >
						<view>羽绒服</view>
						<view>款号:123456</view>
					</tui-list-cell>
				</template>
				<template v-slot:content>
					<view class="tui-content">
						<view class="tui-flex tui-align-between">
							<view>2018年</view>
							<view>夏季</view>
							<view>总销量：555</view>
							<view>总库存：100</view>
						</view>
					</view>
				</template>
			</tui-collapse>
        </tui-list-view>

		<view class="scroll-box">
			<scroll-view scroll-x scroll-with-animation class="tab-view">
				<view v-for="(item,index) in inventoryList" :key="index" class="tab-bar-item " :data-current="index" @tap.stop="swichNav">
					<view>
						<image src="../../static/img/dress.webp" style="width: 320rpx;height: 320rpx;" mode="aspectFit"></image>
					</view>
					<view style="width: 320rpx;">
						<view class="tab-bar-title tui-center">{{item.color}}</view>
<!--						<view class="tab-bar-title tui-center">价格: ￥{{item.price}}</view>-->
						<view class="tab-bar-title tui-center">库存: {{item.count}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view  class="table-box">

			<tui-list-view title="库存明细">
				<tui-list-cell class="tui-flex"  :hover="false"
							   v-for="(item,index) in inventoryList" :key="index">
						<view class="tui-col-4 ">{{item.no}}</view>
						<view class="tui-col-4 tui-center" >{{item.color}}</view>
						<view class="tui-col-4 tui-center">{{item.size}}</view>
						<view class="tui-col-4 tui-center">{{item.count}}</view>
				</tui-list-cell>
			</tui-list-view>

		</view>
	</view>
</template>
<script>

	import ySearchBar from "../../components/y-componnents/y-search-bar/y-search-bar.vue"
	import TuiCollapse from "../../components/tui-collapse/tui-collapse";

	export default {
		components:{
			TuiCollapse,
			ySearchBar
		},
		data(){
			return{
                inventoryList:[
                    {price:"价格",color:"颜色",count:"库存",no:"款号",size:"尺码"},
                    {price:123,color:"绿色",count:3,no:456,size:"M"},
                    {price:123,color:"蓝色",count:4,no:1236,size:"M"},
                    {price:123,color:"黑色",count:5,no:123456,size:"M"},
                    {price:123,color:"黄色",count:2,no:121233456,size:"M"},
                ],

			}
		},
		methods:{

		}
	}
</script>
<style lang="scss" scoped>
    .tab-view {
        width: 100%;
        height: 480upx;
        padding: 30rpx 0;
        overflow: hidden;
        box-sizing: border-box;
        /* #ifdef H5 */
        // top: 44px;
        /* #endif */
        z-index: 99;
        background: #fff;
        white-space: nowrap;
    }

    .tab-bar-item {
        margin: 0 28upx;
        display: inline-block;
        text-align: center;
        box-sizing: border-box;
    }

	.tui-content {
		padding: 20rpx 30rpx;
		background: #fafafa;
		color: #555;
		font-size: 26rpx;
	}

	.table-box{
		margin-bottom: 50rpx;
	}

	/*.tui-list-title{*/
		/*padding: 0 ;*/
	/*}*/

</style>
