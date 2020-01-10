 <template>
	<view class="uni-padding-wrap uni-common-mt ">
		<view class="head">
			<view class="uni-row-margin">
				<input type="text" value="" class="uni-input" placeholder="请输入会员手机" />
			</view>
			<view class="uni-row-margin">
				<input type="text" value="" class="uni-input" placeholder="请输入导购" />
			</view>
			<input @tap="openDate" class="uni-input" placeholder="请选择日期" />
			<view class="uni-row-margin">
				<button type="primary">确认</button>
			</view>
			<view>
				<uni-calendar ref="date" :insert="false" :range="true" @change="change"></uni-calendar>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'

	export default {
		components: {
			uniCalendar
		},
		data() {
			return {

			}
		},
		methods: {
			change() {},
			openDate() {
				this.$refs.date.open()
			}
		}
	}
</script>

<style>

</style>
