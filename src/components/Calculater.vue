<template>
    <div class="rounded-2xl bg-app-neutral-white p-6 flex flex-col gap-8 laptop:flex-row  max-w-[920px]">
        <div class="flex flex-col gap-8 laptop:flex-1">
            <inputNumber labelText="Bill" placeholder="0" v-model="billAmount">
                <template #icon> <img src="/src/assets/images/icon-dollar.svg" alt="" /> </template>
            </inputNumber>
            <SelectTipRate v-model="tipRate" />
            <inputNumber labelText="Number of people" placeholder="0" v-model="peopleCount" pattern="[0-9]+">
                <template #icon> <img src="/src/assets/images/icon-person.svg" alt="" /> </template>
            </inputNumber>
        </div>

        <div class="bg-app-neutral-veryDarkCyan p-8 rounded-xl flex flex-col gap-8 justify-between laptop:flex-1">
            <div class="flex flex-col gap-8">
            <OutputNumber labelText="Tip Amount" :figure="tipPerPerson" />
            <OutputNumber labelText="Total" :figure="totalPerPerson" />
            </div>
            <button class="daisy-btn bg-app-primary-strongCyan text-app-neutral-veryDarkCyan w-full hover:bg-app-neutral-lightGrayishCyan justify-self-end"
                :disabled="!(tipPerPerson && totalPerPerson)"
                @click="reset">RESET</button>
        </div>
    </div>
</template>
<script>
import SelectTipRate from './SelectTipRate.vue'
import InputNumber from './reuse/InputNumber.vue'
import OutputNumber from './reuse/OutputNumber.vue'
export default {
    components: {
        SelectTipRate,
        InputNumber,
        OutputNumber
    },
    data() {
        return {
            billAmount: null,
            peopleCount: null,
            tipRate: null,
        }
    },
    computed: {
        totalTip() {
            return this.billAmount * this.tipRate
        },
        totalAmount() {
            return this.billAmount + this.totalTip
        },
        tipPerPerson() {
            const output=this.totalTip / this.peopleCount
            if (isNaN(output) || !isFinite(output)) return null
            return output            
        },
        totalPerPerson() {
            const output=this.totalAmount / this.peopleCount
            if (isNaN(output) || !isFinite(output)) return null
            return output            
        }
    },
    methods: {
        reset() {
            this.billAmount = null
            this.peopleCount = null
            this.tipRate = null
        }
    }
}
</script>