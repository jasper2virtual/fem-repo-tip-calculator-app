<template>
    <inputNumber labelText="Number of People" placeholder="0" @input="onInput">
        <template #icon>
            <img src="/src/assets/images/icon-person.svg" alt="" />
        </template>
    </inputNumber>
</template>
<script>
import inputNumber from './reuse/inputNumber.vue'
export default {
    inject: ['peopleCount'],
    components: {
        inputNumber
    },
    methods: {
        onInput(value) {
            this.peopleCount = value
        }
    }
}

</script>