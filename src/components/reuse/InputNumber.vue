<template>
    <label>
        <div v-if="labelText" class="text-app-neutral-darkGrayishCyan font-bold">{{ labelText }}</div>
        <div :class="['daisy-input flex items-center gap-2 bg-app-neutral-veryLightGrayishCyan hover:border-app-primary-strongCyan',inputError && 'daisy-input-error']">
            <slot name="icon"></slot>
            <input :placeholder type="text"
             :value="modelValue"
            class="grow text-right w-full font-bold text-[calc(24rem/16)]" 
            @input="onInputValue" :pattern="pattern ?? '[0-9]+[\.][0-9]+|[0-9]+\.?'" inputmode="numeric"
            @invalid="e => inputError = e.target.validationMessage"
            />
        </div>
        <div class="daisy-toast daisy-toast-top daisy-toast-right" v-if="inputError">
            <div class="daisy-alert daisy-alert-error">
                <span>{{ inputError }}</span>
            </div>
        </div>
    </label>
</template>
<script>
export default {
    emits: ['update:modelValue'],
    props: {
        labelText: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        pattern:{
            type: String,
            default: null
        },
        modelValue: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            inputError:null
        }
    },
    methods:{
        onInputValue(e) {
            this.inputError = null;
            if (e.target.checkValidity()) {
                const output=parseFloat(e.target.value)
                this.$emit('update:modelValue', output)
            }
        },
    }
}
</script>