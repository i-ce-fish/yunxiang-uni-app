<template>
    <view class="product-item">
        <view class="tui-flex tui-col-12 tui-align-between ">
            <view >森马冬季羽绒服</view>
            <view >条码:123456</view>
        </view>

        <view class="tui-flex tui-col-12 tui-align-between  detail  ">
            <view class="item">颜色:红色</view>
            <view class="item">尺码:M</view>
            <view class="item">数量:1</view>
            <view class="item">价格:99.99</view>
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
    .product-item{
        width: 100%;
        padding-right: 30rpx;
    }
    .detail {
        padding: 10rpx 0;
        color: #999999;
        font-size: small;


    }
</style>
