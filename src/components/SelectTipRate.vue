<template>
    <div class="text-app-neutral-darkGrayishCyan font-bold">Select Tip %</div>
    <div class="grid grid-cols-2 grid-rows-3 gap-4">
        <label v-for="tip in [.05, .1, .15, .25, .5]" :key="tip" class="daisy-btn text-app-neutral-white font-bold text-[calc(24rem/16)]
         bg-app-neutral-veryDarkCyan
         hover:bg-app-neutral-lightGrayishCyan hover:text-app-neutral-veryDarkCyan
         has-[:checked]:bg-app-primary-strongCyan has-[:checked]:text-app-neutral-veryDarkCyan">
            <input type="radio" name="tip" :value="tip" class="hidden" v-model="selectdTip">
            {{ tip * 100 }}%
        </label>
        <InputNumber placeholder="Custom" v-model="customTip"/>
    </div>
</template>
<script>
import InputNumber from './reuse/InputNumber.vue'
export default {
    components:{
        InputNumber
    },
    emits: ['update:modelValue'],
    props:{
        modelValue: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            selectdTip: null,
            customTip:null
        }
    },
    watch: {
        modelValue(value) {
            if (!value) {
                this.selectdTip = null
                this.customTip = null
            }
        },
        selectdTip(value) {
            if (!value) return
            this.customTip = null
            this.$emit('update:modelValue', value)
        },
        customTip(value) {
            if (!value) return
            this.selectdTip = null
            this.$emit('update:modelValue', value/100)
        }
    }
}
</script>