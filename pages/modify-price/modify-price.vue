<template>
    <view class="container">
        <!--        navbar-->
        <notice-bar-member-detail></notice-bar-member-detail>

        <!--        搜索栏-->

        <y-search-bar class="y-bgc search-bar" placeholder="扫码/输入商品编号"></y-search-bar>

        <!--        设置-->
        <tui-list-view title="设置方式">
            <tui-list-cell :hover="false">
                <radio-group class="tui-flex tui-align-between tui-col-12"
                             @change="onSettingType">
                    <radio value="single" :checked="true" class="tui-flex-1">
                        单独设置
                    </radio>
                    <radio value="batch" class="tui-flex-1">
                        统一设置
                    </radio>
                </radio-group>
            </tui-list-cell>
        </tui-list-view>

        <!--        商品列表-->
        <tui-list-view title="商品列表">
            <tui-list-cell
                    class=" dis-block"
                    v-for="(o,i) of dataList" :key="i"
                    :hover="false">
                <product-img-item></product-img-item>

                <!--单独改价-->
                <view v-show="settingType === 'single'">
                    <!--                改价设置-->
                    <tui-list-cell class="setting-box dis-block" :hover="false">
                        <view>
                            改价方式
                            <tui-icon class="icon" name="explain" :size="17"></tui-icon>
                        </view>
                        <view>
                            <radio-group class="tui-flex">
                                <radio class="tui-flex-1">
                                    按款改价
                                </radio>
                                <radio class="tui-flex-1">
                                    按色改价
                                </radio>
                                <radio class="tui-flex-1">
                                    按色码改价
                                </radio>
                            </radio-group>
                        </view>
                    </tui-list-cell>
                    <tui-list-cell class="price-box dis-block" :hover="false">
                        <view class="tui-flex tui-align-between">
                            <view>
                                价格设置
                                <tui-icon class="icon" name="explain" :size="17"></tui-icon>
                            </view>
                            <view>
                                吊牌价：￥123.00
                            </view>
                        </view>

                        <view class="tui-flex tui-align-between">
                            <view class="tui-flex tui-align-between">
                                <view class="tui-col-6">指定价</view>
                                <input placeholder-class="phcolor" class="tui-input tui-col-6" name="name"
                                       placeholder="请输入" maxlength="50" type="text"/>
                            </view>

                            <view class="tui-flex tui-align-between">

                                <view class="tui-col-6">指定折率</view>
                                <input placeholder-class="phcolor" class="tui-input tui-col-6" name="name"
                                       placeholder="请输入" maxlength="50" type="text"/>

                            </view>
                        </view>

                    </tui-list-cell>

                    <!--               单独设置  更多设置  折叠面板-->
                    <tui-collapse :index="o.index" :current="o.current" @click="onMoreSettingSingle">
                        <template v-slot:title>
                            <tui-list-cell class="tui-flex tui-align-center"  :hover="false">
                                <view class="label y-color-href ">
                                    更多设置
                                </view>
                            </tui-list-cell>
                        </template>
                        <template v-slot:content>
                            <tui-list-cell :hover="false" class="dis-block">
                                <view class="tui-flex tui-align-between">
                                    <view class="tui-col-4">价格区间</view>
                                    <input placeholder-class="phcolor" class="tui-input tui-col-4" name="name"
                                           placeholder="请输入"
                                           maxlength="50" type="text"/>
                                    <input placeholder-class="phcolor" class="tui-input tui-col-4" name="name"
                                           placeholder="请输入"
                                           maxlength="50" type="text"/>
                                </view>
                                <view class="tui-flex tui-align-between">
                                    <view class="tui-col-4">折率区间</view>
                                    <input placeholder-class="phcolor" class="tui-input tui-col-4" name="name"
                                           placeholder="请输入"
                                           maxlength="50" type="text"/>
                                    <input placeholder-class="phcolor" class="tui-input tui-col-4" name="name"
                                           placeholder="请输入"
                                           maxlength="50" type="text"/>
                                </view>
                                <view class="tui-flex tui-align-between">
                                    <view class="tui-col-4">优惠期限</view>
                                    <input placeholder-class="phcolor" class="tui-input tui-col-4" name="name"
                                           placeholder="请输入"
                                           maxlength="50" type="text"/>
                                    <input placeholder-class="phcolor" class="tui-input tui-col-4" name="name"
                                           placeholder="请输入"
                                           maxlength="50" type="text"/>
                                </view>
                            </tui-list-cell>
                        </template>
                    </tui-collapse>

                </view>

                <!--                批量改价-->
                <view v-show="settingType === 'batch'">

                    <!--                    价格-->
                    <tui-list-cell class="price-box  tui-align-between" :hover="false">
                        <view>
                            吊牌价:￥12.00
                        </view>
                        <view>
                            折后价:￥12.00
                        </view>
                        <view>
                            折率:￥12.00
                        </view>

                    </tui-list-cell>

                </view>

            </tui-list-cell>


        </tui-list-view>

        <!--        批量改价设置-->
        <tui-list-view title="批量设置" v-show="settingType === 'batch'">

            <!--                改价设置-->
            <tui-list-cell class="setting-box dis-block" :hover="false">
                <view>
                    改价方式
                    <tui-icon class="icon" name="explain" :size="17"></tui-icon>
                </view>
                <view>
                    <radio-group class="tui-flex">
                        <radio class="tui-flex-1">
                            按款改价
                        </radio>
                        <radio class="tui-flex-1">
                            按色改价
                        </radio>
                        <radio class="tui-flex-1">
                            按色码改价
                        </radio>
                    </radio-group>
                </view>
            </tui-list-cell>
            <tui-list-cell class="price-box dis-block" :hover="false">
                <view class="tui-flex tui-align-between">
                    <view>
                        价格设置
                        <tui-icon class="icon" name="explain" :size="17"></tui-icon>
                    </view>
                    <view>
                        吊牌价：￥123.00
                    </view>
                </view>

                <view class="tui-flex tui-align-between">
                    <view class="tui-flex tui-align-between">
                        <view class="tui-col-6">指定价</view>
                        <input placeholder-class="phcolor" class="tui-input tui-col-6" name="name" placeholder="请输入"
                               maxlength="50" type="text"/>
                    </view>

                    <view class="tui-flex tui-align-between">

                        <view class="tui-col-6">指定折率</view>
                        <input placeholder-class="phcolor" class="tui-input tui-col-6" name="name" placeholder="请输入"
                               maxlength="50" type="text"/>

                    </view>
                </view>

            </tui-list-cell>

            <!--                更多设置  折叠面板-->
            <tui-collapse :index="batchSetting.index" :current="batchSetting.current" @click="onMoreSettingBatch">
                <template v-slot:title>
                    <tui-list-cell class="tui-flex tui-align-center" :hover="false">
                        <view class="label y-color-href ">
                            更多设置
                        </view>
                    </tui-list-cell>
                </template>
                <template v-slot:content>
                    <tui-list-cell :hover="false" class="dis-block">
                        <view class="tui-flex tui-align-between">
                            <view class="tui-col-4">价格区间</view>
                            <input placeholder-class="phcolor" class="tui-input tui-col-4" name="name" placeholder="请输入"
                                   maxlength="50" type="text"/>
                            <input placeholder-class="phcolor" class="tui-input tui-col-4" name="name" placeholder="请输入"
                                   maxlength="50" type="text"/>
                        </view>
                        <view class="tui-flex tui-align-between">
                            <view class="tui-col-4">折率区间</view>
                            <input placeholder-class="phcolor" class="tui-input tui-col-4" name="name" placeholder="请输入"
                                   maxlength="50" type="text"/>
                            <input placeholder-class="phcolor" class="tui-input tui-col-4" name="name" placeholder="请输入"
                                   maxlength="50" type="text"/>
                        </view>
                        <view class="tui-flex tui-align-between">
                            <view class="tui-col-4">优惠期限</view>
                            <input placeholder-class="phcolor" class="tui-input tui-col-4" name="name" placeholder="请输入"
                                   maxlength="50" type="text"/>
                            <input placeholder-class="phcolor" class="tui-input tui-col-4" name="name" placeholder="请输入"
                                   maxlength="50" type="text"/>
                        </view>
                    </tui-list-cell>
                </template>
            </tui-collapse>

        </tui-list-view>

        <!--        按钮-->
        <tui-list-view title="操作">
            <tui-list-cell :hover="false" class="tui-align-between">
                <tui-button class="y-mr" type="blue" shape="circle">打标签</tui-button>
                <tui-button type="blue" shape="circle">确认改价</tui-button>
            </tui-list-cell>
        </tui-list-view>

    </view>
</template>
<script>
    import ySearchBar from "../../components/y-componnents/y-search-bar/y-search-bar.vue"
    import noticeBarMemberDetail from "../../components/y-componnents/notice-bar/notice-bar-member-detail.vue"
    import ProductImgItem from "../product/com/product-img-item";
    import YRadio from "../../components/y-componnents/y-radio/y-radio";
    import tuiIcon from "@/components/icon/icon"
    import tuiCollapse from "@/components/tui-collapse/tui-collapse"


    export default {
        components: {
            YRadio,
            tuiIcon,
            ProductImgItem,
            ySearchBar,
            noticeBarMemberDetail,
            tuiCollapse
        },
        data() {
            return {
                settingType: `single`,

                batchSetting: {
                    index: 1,
                    current: -1
                },
                dataList: [
                    {
                        index: 1,
                        current: -1
                    }, {
                        index: 2,
                        current: -1
                    }, {
                        index: 3,
                        current: -1
                    },
                ]
            }
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
        },
        methods: {
            onSettingType(e) {
                this.settingType = e.detail.value
                console.log(this.settingType)
            },
            onMoreSettingBatch(e) {
                this.batchSetting.current = this.batchSetting.current === 1 ? -1 : 1

            },
            onMoreSettingSingle(e) {
                let index = e.index;
                let item = this.dataList[index-1];
                item.current = item.current == index ? -1 : index
            }
        }
    }
</script>

<style scoped lang="scss">
    .container {
    }

    .list-box {
    }

    .setting-box, .price-box {
        .icon {
            padding-left: 10 rpx;
        }
    }

    .dis-block {
        display: block;
    }

    .y-mr {
        margin-right: 30rpx;
    }
</style>
