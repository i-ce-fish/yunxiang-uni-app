<template>
	<view class="container">
		<tui-list-view color="#777" class=" 	">
			<tui-grid>
				<!--不支持class-->
				<tui-grid-item v-for="(item,index) in gridList" :key="index" cell="4" @click="clickIcon(index)">
					<view class="tui-grid-icon">
						<tui-icon :name="item.icon" :size="item.size" :color="item.color"></tui-icon>
					</view>
					<text class="tui-grid-label">{{item.name}}</text>
				</tui-grid-item>
			</tui-grid>
		</tui-list-view>
		<tui-list-view title="库存信息" subtitle="向左滑动进行编辑/删除" >
			<tui-swipe-action v-for="(item,index) in gridList" :key="index"  @click="handlerButton" :params="item">
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
	import productItem from '../product/com/product-item'
	import tuiSwipeAction from "@/components/swipe-action/swipe-action"
	import tuiGrid from "@/components/grid/grid"
	import tuiGridItem from '@/components/grid-item/grid-item'
	import tuiIcon from "@/components/icon/icon"
	export default {
		components: {
			tuiIcon,
			tuiGrid,
			tuiGridItem,
			productItem,
			tuiSwipeAction

		},
		data() {
			return {
				gridList: [{
					name: "添加库存",
					size: 30,
					icon:"plus",
					url:'add'
				}, {
					name: "搜索",
					size: 30,
					icon:"search",
					url: 'search'

				}, {
					name: "待定",
					size: 30,
					icon:"more",

				}, {
					name: "待定",
					size: 30,
					icon:"more"
				}]

			};
		},
		methods: {
			clickIcon(index) {
				this.go(this.gridList[index].url)
			}
		}
	}
</script>

<style>
</style>
