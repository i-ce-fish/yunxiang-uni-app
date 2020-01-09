<template>
	<view class="content">
		main
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {
			// 首页
			this.goPosStart()
		 
			// if (!this.hasLogin) {
				
			// 	uni.showModal({
			// 		title: '未登录',
			// 		content: '您未登录，需要登录后才能继续',
			// 		/**
			// 		 * 如果需要强制登录，不显示取消按钮
			// 		 */
			// 		showCancel: !this.forcedLogin,
			// 		success: (res) => {
			// 			if (res.confirm) {
			// 				/**
			// 				 * 如果需要强制登录，使用reLaunch方式
			// 				 */
			// 				if (this.forcedLogin) {
			// 					uni.reLaunch({
			// 						url: '../login/login'
			// 					});
			// 				} else {
			// 					uni.navigateTo({
			// 						url: '../login/login'
			// 					});
			// 				}
			// 			}
			// 		}
			// 	});
			// }
		},
		methods:{
			goPosStart(){
				uni.switchTab({
				// uni.navigateTo({
					
					
					
					url:"/pages/pos/guest"
				})
			}
		}
		
	}
</script>

<style>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}
</style>
