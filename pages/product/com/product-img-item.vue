<template>
        <view class="tui-flex tui-align-between tui-col-12">
            <image
                   class="tui-pro-img tui-col-3"
                   src="https://img.alicdn.com/imgextra/i1/30266471/O1CN01FDP0yn1xflRdq5uMJ_!!0-saturn_solar.jpg_220x220.jpg_.webp"
                   mode="widthFix"
            />
            <view class="tui-pro-content tui-col-9">
                <view class="tui-flex tui-align-between">
                    <view class="pro-brand">
                        品牌
                    </view>
                    <view class="po-sn">
                        条码: 123456
                    </view>
                </view>
                <view class="pro-name">
                    商品名称
                </view>
                <view class="pro-detail tui-flex tui-align-between">
                    <view class="pro-color">
                        颜色
                    </view>
                    <view class="pro-size">
                        尺码
                    </view>
                    <view class="pro-season">
                        季节
                    </view>
                </view>
            </view>
        </view>
</template>
<script>
    export default {
        components: {},
        data() {
            return {}
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped lang="scss">

    .tui-pro-img {
        // height: auto;
        padding-right: 20rpx;
        /*padding-bottom: 20rpx;*/
    }

    .tui-pro-content>view {
        padding:8rpx 0;
    }
</style>
