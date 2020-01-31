<template>
	<view class="container">
		<view class="form">
			<form>
				<tui-list-view title="商品基本信息">
				<tui-list-cell :hover="false">
					<view class="y-form-item">
						<view class="label">品牌</view>
<!--						drow down-->
					</view>
				</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">商品性别</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入会员手机" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">品类</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入会员手机" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">商品名称</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入会员手机" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">款号</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入会员手机" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">采购模式</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入会员手机" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">商品年份</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入会员手机" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">经典常年</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入会员手机" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">商品季</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入会员手机" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">面料</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入会员手机" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
				</tui-list-view>

				<tui-list-view title="商品详细信息">
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">原款号</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入会员手机" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false">
						<view class="y-form-item">
							<view class="label">备注</view>
							<input placeholder-class="phcolor" class="" name="name" placeholder="请输入会员手机" maxlength="50" type="text" />
						</view>
					</tui-list-cell>
				</tui-list-view>
				<view class="tui-btn-box">
					<tui-button type="blue" shape="circle" @click="go('')">添加</tui-button>
				</view>

			</form>
		</view>
	</view>
</template>

<script>
	export default {
		components:{ },
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
