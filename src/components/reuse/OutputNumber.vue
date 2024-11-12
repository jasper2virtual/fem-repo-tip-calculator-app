<template>
<div class="grid grid-cols-[auto_1fr] grid-rows-2 grid-flow-col">
    <span class=" text-app-neutral-white font-bold">{{ labelText }}</span>
    <span class=" font-bold text-[calc(13rem/16)] text-app-neutral-grayishCyan">/ person</span>
    <span class=" row-span-2 self-center justify-self-end text-app-primary-strongCyan font-bold text-[calc(32rem/16)]">${{ toCurrency }}</span>
</div>
</template>
<script>
export default{
    props:{
        labelText:String,
        figure:Number
    },
    computed:{
        toCurrency() {
            if (this.figure === null) return 0;
            return this.figure.toFixed(2);
        }
    }
}
</script>