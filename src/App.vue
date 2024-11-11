<template>
    <div class="min-h-screen min-w-[320px] flex flex-col bg-app-neutral-lightGrayishCyan py-4 gap-y-4 items-center">
        <main class="grow flex flex-col justify-evenly items-center container gap-4">
            <div class="flex items-center justify-center"><img src="/src/assets/images/logo.svg" alt="" />
            </div>
            <Calculater class="w-full" />
        </main>
        <footer>
            <Attribution />
        </footer>
    </div>
</template>
<script>
import Attribution from './components/Attribution.vue';
import Calculater from './components/Calculater.vue';
export default {
    components: {
        Attribution,
        Calculater
    }
}
</script>