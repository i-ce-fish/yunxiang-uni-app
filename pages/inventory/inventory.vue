<template>
	<view class=" y-body-list ">
		<view class="uni-flex">

			<uni-grid :column="4" :showBorder="false">
				<uni-grid-item>
					<view @tap="go('add')" class="icon-item">
						<uni-icons type="plus" size="30"></uni-icons>
						<text class="icon-item-text" >添加</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view @tap="go('search')" class="icon-item">
						<uni-icons type="search" size="30"></uni-icons>
						<text class="icon-item-text" >搜索</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="icon-item">
						<uni-icons type="more" size="30"></uni-icons>
						<text class="icon-item-text">待定</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="icon-item">
						<uni-icons type="more" size="30"></uni-icons>
						<text class="icon-item-text">待定</text>
					</view>
				</uni-grid-item>
			</uni-grid>

		</view>
		<view class="uni-row-margin">
			<uni-list>
				<uni-list-item :title="'森马冬季羽绒服'+i" :note='"条码:1234567890 颜色：红 尺码：M 数量：23 价格：99" +i' v-for="i in 10" :key="i"
				 :show-arrow="true" @tap="go('edit')">
				</uni-list-item>
			</uni-list>
		</view>
	</view>
</template>
<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniGrid,
			uniGridItem,
			uniList,
			uniListItem,
			uniIcons
		},
		data() {
			return {};
		},
		methods: {
			go(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	};
</script>

<style lang="scss">
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}


	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}

	.icon-item {
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		width: 180rpx;
		padding: 30rpx 10rpx;
		text-align: center;
		flex-direction: column;
	}

	.icon-item-text {
		font-size: 24rpx;
		text-align: center;
	}
</style>
