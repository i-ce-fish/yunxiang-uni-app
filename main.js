import Vue from 'vue'
import App from './App'

import store from './store'



// ThorUI
	import tuiListView from "@/components/list-view/list-view"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiButton from "@/components/extend/button/button"
Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

// todo remove
import uniList from "@/components/uni-list/uni-list.vue"
import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
Vue.component('uniList', uniList)
Vue.component('uniListItem', uniListItem)

Vue.component('tuiListView', tuiListView)
Vue.component('tuiListCell', tuiListCell)
Vue.component('tuiButton', tuiButton)

// 全局混入
Vue.mixin({
	methods: {
		// todo add data
		go(url, data) {
			uni.navigateTo({
				url: url
			})
		},
		toast: function(text, duration, success) {
			uni.showToast({
				title: text,
				icon: success ? 'success' : 'none',
				duration: duration || 2000
			})
		},
		px: function(num) {
			return uni.upx2px(num) + 'px';
		}
	}
})


const app = new Vue({
	store,
	...App
})
app.$mount()
