<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	
	}
</script>

<style>
	/* 头条小程序需要把 iconfont 样式放到组件外 */
	/* @import "components/m-icon/m-icon.css"; */

	/* todo remove uni.css*/
	@import './common/uni.css';
	@import "./common/app.css";
	@import './static/style/thorui.css';
</style>
