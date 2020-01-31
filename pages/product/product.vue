<template>
	<view class="container">
		<tui-list-view color="#777" class=" 	">
			<y-grid :data-list="dataList"  @click="clickIcon"></y-grid>
		</tui-list-view>
		<tui-list-view title="商品信息" >
			<tui-list-cell v-for="o in 10" :key="o" @click="go('detail')" :arrow="true">
				<product-item></product-item>
			</tui-list-cell>
		</tui-list-view>
	</view>
</template>

<script>
	import YGrid from "../../components/y-componnents/y-grid/y-grid";
	import productItem from './com/product-item'
	export default {
		components: {
			YGrid,
			productItem

		},
		data() {
			return {
				dataList: [{
					name: "添加商品",
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
				this.go(this.dataList[index].url)
			}
		}
	}
</script>

<style>
</style>
