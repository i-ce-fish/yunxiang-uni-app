<template>
    <tui-grid>
            <!--不支持class-->
            <tui-grid-item v-for="(item,index) in dataList" :key="index" :cell="cell" @click="click(index)">
                <view class="tui-grid-icon">
                    <tui-icon :name="item.icon" :size="item.size" :color="item.color"></tui-icon>
                </view>
                <text class="tui-grid-label">{{item.name}}</text>
            </tui-grid-item>
    </tui-grid>
</template>
<script>
    import tuiIcon from "@/components/icon/icon"
    import tuiGrid from "@/components/grid/grid"
    import tuiGridItem from '@/components/grid-item/grid-item'
    export default {
        components: {
            tuiGrid,
            tuiGridItem,
            tuiIcon
        },
        props:{dataList:{type:Array,default:[]}},
        data() {
            return {
                cell:4,
            }
        },
        methods: {
            detail: function(e) {
                this.toast("未完成的功能~");
            },
            click(index) {
                console.log(index)
                this.$emit('click',index)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tui-grid-icon {
        width: 64rpx;
        height: 64rpx;
        margin: 0 auto;
        text-align: center;
        vertical-align: middle;
    }

</style>
