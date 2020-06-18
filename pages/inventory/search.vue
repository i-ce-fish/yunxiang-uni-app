<template>
	<!--	<view class=" y-body-list  ">-->
	<!--		<y-drawer :showDrawer=showDrawer @close="closeDrawer"></y-drawer>-->
	<!--	 -->
	<!--		<uni-search-bar placeholder="商品编号" @confirm="search"></uni-search-bar>-->
	<!--		<view class="">-->
	<!--			<view class="uni-row">-->
	<!--				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">-->
	<!--					<view @tap="getProduct(i)" :id="i" class="scroll-view-item_H" v-for="i in 6" :key="i">-->
	<!--						<view class="uni-row">-->
	<!--							<image style="width: 81px;height: 81px;" src="../../static/img/home.png" mode=""></image>-->
	<!--						</view>-->
	<!--						<view class="uni-row">-->
	<!--							商品名称-->
	<!--						</view>-->
	<!--					</view>-->
	<!--				</scroll-view>-->
	<!--			</view>-->
	<!--		</view>-->
	<!--		<view class="uni-row-margin">-->
	<!--			<uni-list>-->
	<!--				<uni-list-item :title="'森马冬季羽绒服款(男款)'+i" :note='"款号:1234567890 品牌：美邦  2020冬" +i' v-for="i in 10" :key="i"-->
	<!--				 :show-arrow="true" @tap="go('detail')">-->
	<!--				</uni-list-item>-->
	<!--			</uni-list>-->
	<!--		</view>-->
	<!--		<view class="uni-row y-center-hor y-margin-bottom" >-->
	<!--				 <uni-pagination :show-icon="true" :total="50" title="标题文字" />-->
	<!--		</view>-->
	<!--		-->
	<!--	</view>-->
	<view class="container">
		<y-search-bar class="y-bgc search-bar" placeholder="扫码/输入商品编号"></y-search-bar>
		<!--		自顶向下的下拉框， 使用时需要为穿越过的元素设置z-index-->
		<yDropdownSelectMulti></yDropdownSelectMulti>
		<tui-list-view title="商品信息" subtitle="向左滑动进行编辑/删除">
			<tui-swipe-action v-for="o in 10" :key="o"  @click="handlerButton" :params="o">
				<template v-slot:content>
					<tui-list-cell  @click="go('detail')" :arrow="true">
						<product-item></product-item>
					</tui-list-cell>
				</template>
			</tui-swipe-action>
		</tui-list-view>
	</view>
</template>

<script>
	import ySearchBar from "../../components/y-componnents/y-search-bar/y-search-bar.vue"
	import yDropdownSelectMulti from "../../components/y-componnents/y-dropdown-select-multi/y-dropdown-select-multi"
	import productItem from '../product/com/product-item'
	import tuiSwipeAction from "@/components/swipe-action/swipe-action"

	export default {
		components: {
			ySearchBar,yDropdownSelectMulti,productItem,tuiSwipeAction
		},
		data() {
			return {
			};
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.search-bar {
		z-index: 990;
	}
</style>
