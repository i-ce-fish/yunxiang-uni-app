import Vue from 'vue'
import App from './App'

import store from './store'

import uniPagination from '@/components/uni-pagination/uni-pagination.vue'
import uniList from "@/components/uni-list/uni-list.vue"
import uniListItem from "@/components/uni-list-item/uni-list-item.vue"

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

Vue.component('uniPagination', uniPagination)
Vue.component('uniList', uniList)
Vue.component('uniListItem', uniListItem)

const app = new Vue({
	store,
	...App
})
app.$mount()
