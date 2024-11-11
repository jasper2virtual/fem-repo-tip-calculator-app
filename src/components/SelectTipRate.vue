<template>
    <div>Select Tip %</div>
    <div class="grid grid-cols-2 grid-rows-3 gap-4">
        <label v-for="tip in [.05, .1, .15, .25, .5]" :key="tip" class="daisy-btn has-[:checked]:bg-red-200">
            <input type="radio" name="tip" :value="tip" class="hidden" v-model="selectdTip">
            {{ tip * 100 }}%
        </label>
        <input class="daisy-input" type="text" placeholder="Custom" v-model="customTip">
    </div>
</template>
<script>
export default{
    inject: ['tipRate'],
    data() {
        return {
            customTip: '',
            selectdTip:0
        }
    },
    watch: {
        selectdTip(value) {
            this.tipRate = value
        },
        customTip(value) {
            if (value === '') {
                return
            }
            this.tipRate = value / 100
        }
    }
}
</script>