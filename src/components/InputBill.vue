<template>
    <inputNumber labelText="Bill" placeholder="0" @input="onInput">
        <template #icon>
            <img src="/src/assets/images/icon-dollar.svg" alt="" />
        </template>
    </inputNumber>
</template>
<script>
import inputNumber from './reuse/inputNumber.vue'
export default{
    components: {
        inputNumber
    },
    inject: ['billAmount'],
    methods: {
        onInput(value) {
            this.billAmount = value
        }
    }
}
</script>