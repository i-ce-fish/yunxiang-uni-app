<template>
	<view class="y-body-bg">
		<search></search>
		<input-label></input-label>
		<picker-label></picker-label>
		<picker-date></picker-date>
		<pickerDateInterval></pickerDateInterval>
		<cheackbox></cheackbox>
		<y-radio></y-radio>
		<y-time></y-time>
		<y-time-interval></y-time-interval>
	</view>
</template>

<script>
	import inputLabel from '../../components/y-componnents/input-label.vue'
	import pickerLabel from '../../components/y-componnents/picker-label.vue'
	import pickerDate from '../../components/y-componnents/picker-date.vue'
	import pickerDateInterval from '../../components/y-componnents/picker-date-interval.vue'
	import search from '../../components/y-componnents/search-bar.vue'
	import cheackbox from '../../components/y-componnents/checkbox.vue'
	import yRadio from '../../components/y-componnents/radio.vue'
	import yTime from '../../components/y-componnents/picker-time.vue'
	import yTimeInterval from '../../components/y-componnents/picker-time-interval.vue'
	export default {
		components:{
			pickerLabel,
			inputLabel,
			pickerDate,
			pickerDateInterval,
			search,
			cheackbox,
			yRadio,yTime,yTimeInterval
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
