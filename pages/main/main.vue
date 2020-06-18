<template>

    <view class="container">

        <view class="data-box">
            营销数据
        </view>
        <tui-grid>
            <block v-for="(item,index) in dataList" :key="index">
                <!--不支持class-->
                <tui-grid-item cell="3" @click="onGrid(index)">
                    <view class="tui-grid-icon">
                        <tui-icon :name="item.name" :size="item.size" :color="item.color"></tui-icon>
                    </view>
                    <text class="tui-grid-label">{{item.label}}</text>
                </tui-grid-item>
            </block>
        </tui-grid>

    </view>
</template>

<script>
    import {
        mapState
    } from 'vuex'

    import tuiIcon from "@/components/icon/icon"
    import tuiGrid from "@/components/grid/grid"
    import tuiGridItem from '@/components/grid-item/grid-item'


    export default {
        components: {
            tuiGrid,
            tuiGridItem,
            tuiIcon
        },
        computed: mapState(['forcedLogin', 'token', 'userName']),
        onLoad() {
            // if (!this.token) {
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
        data() {
            return {
                dataList: [{
                    name: "refresh",
                    label: "会员收银",
                    size: 30
                    , url: '../pos/guest'
                }, {
                    name: "search",

                    label: "非会员收银",
                    size: 30
                    , url: '../pos/add-product'

                }, {
                    name: "ios",

                    label: "当日订单",
                    size: 30,
                    url: '../today-order/today-order'
                }, {
                    name: "android",

                    label: "商品管理",
                    size: 30,
                    url: '../product/product'
                }, {
                    name: "close",

                    label: "商品建档",
                    size: 30,
                    url: '../product/add'
                }, {
                    name: "close-fill",

                    label: "查商品",
                    size: 30,
                    url: '../product/search'
                }, {
                    name: "shut",

                    label: "库存管理",
                    size: 30,
                    url: '../inventory/inventory'
                }, {
                    name: "plus",

                    label: "查库存",
                    size: 30,
                    url: '../inventory/search'
                }, {
                    name: "plus",
                    label: "入库",
                    size: 30,
                    url: '../inventory/add'
                }, {
                    name: "star-fill",

                    label: "小票记录",
                    size: 30,
                    url: '../ticket/ticket'
                }, {
                    name: "revoke",
                    label: "退换货",
                    size: 30,
                    url: '../returns/returns'
                // },{
                //     name: "shop",
                //     label:"促销管理",
                //     size: 30,
                //     url: '促销管理'
                }, {
                    name: "like",
                    label:"批量改价",
                    size: 30,
                    url: '../modify-price/modify-price'
                }
                ]

            }
        },
        methods: {

            onGrid(index) {
                console.log(index)
                this.go(this.dataList[index].url)
            }
        }
    }
</script>

<style lang="scss">


</style>
