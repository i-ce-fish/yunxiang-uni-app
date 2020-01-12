<template>
	<view class="y-body-list">
		<y-drawer :showDrawer=showDrawer @close="closeDrawer"></y-drawer>

		<uni-search-bar placeholder="商品编号" @confirm="search"></uni-search-bar>
		<view class="uni-row-margin">
			<uni-list>
				<uni-list-item :title="'森马冬季羽绒服款(男款)'+i" :note='"款号:1234567890 品牌：美邦  2020冬" +i' v-for="i in 10" :key="i"
				 :show-arrow="true" @tap="go('detail')">
				</uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import yDrawer from '../../components/y-componnents/drawer/drawer.vue'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components: {
			uniList,
			uniListItem,
			yDrawer,
			uniSearchBar
		},
		data() {
			return {
				showDrawer: false
			};
		},
		methods: {
			go(url) {
				uni.navigateTo({
					url: url
				})
			},
			onNavigationBarButtonTap() {
				this.showDrawer = true
			},
			closeDrawer() {
				this.$emit('close')
			}
		}
	}
</script>

<style lang="scss">


</style>
