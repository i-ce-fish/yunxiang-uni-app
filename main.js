import Vue from 'vue'
import App from './App'

import store from './store'

// import uniPagination from '@/components/uni-pagination/uni-pagination.vue'
// import uniList from "@/components/uni-list/uni-list.vue"
// import uniListItem from "@/components/uni-list-item/uni-list-item.vue"

// ThorUI
	import tuiListView from "@/components/list-view/list-view"
	import tuiListCell from "@/components/list-cell/list-cell"
Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

// todo remove
// Vue.component('uniPagination', uniPagination)
// Vue.component('uniList', uniList)
// Vue.component('uniListItem', uniListItem)

Vue.component('tuiListView', tuiListView)
Vue.component('tuiListCell', tuiListCell)

// 全局混入
Vue.mixin({
	methods: {
		// todo add data
		go(url, data) {
			uni.navigateTo({
				url: url
			})
		}
	}
})

const app = new Vue({
	store,
	...App
})
app.$mount()
