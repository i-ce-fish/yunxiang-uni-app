<template>
	<view class="uni-flex">
		<view class="uni-inline-item y-form-item">
			默认样式:
		</view>
		<view class="uni-flex-item  y-form-item">
			<checkbox-group>
				<label class="uni-flex-item">
					<checkbox value="cb" checked="true" />选中
				</label>
				<label class="uni-flex-item">
					<checkbox value="cb" />未选中
				</label>
			</checkbox-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>
