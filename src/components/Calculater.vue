<template>
    <div class="rounded-2xl bg-app-neutral-white p-6">
        <div class="input">
            <InputBill />
            <SelectTipRate />
            <InputPeopleCount />
        </div>
        <div class="output">
            <div class="person-tip-amount"></div>
            <div class="person-total"></div>
            <button class="daisy-btn btn-reset">RESET</button>
        </div>
    </div>
</template>
<script>
import InputBill from './InputBill.vue'
import SelectTipRate from './SelectTipRate.vue'
import InputPeopleCount from './InputPeopleCount.vue'
import { ref } from 'vue'
export default {
    components: {
        InputBill,
        SelectTipRate,
        InputPeopleCount
    },
    provide() {
        return {
            billAmount: ref(0),
            tipRate: ref(0),
            peopleCount: ref(0)
        }
    }
}
</script>