<template>
    <label>
        <div>{{ labelText }}</div>
        <div class="daisy-input flex items-center gap-2">
            <slot name="icon"></slot>
            <input type="text" class="grow text-right" :placeholder
            v-model="value"
            />
        </div>
    </label>
</template>
<script>
export default {
    emits: ['input'],
    props: {
        labelText: String,
        placeholder: String,
    },
    data() {
        return {
            value: ''
        }
    },
    watch: {
        value(newValue) {
            this.$emit('input', newValue)
        }
    }
}
</script>