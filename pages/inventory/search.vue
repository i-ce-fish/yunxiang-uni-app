<template>
	<view class="y-body-list">
			<view class="y-margin ">
				<input type="text" value="" class="uni-input" placeholder="商品编号" />
			</view>
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
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	

</style>
