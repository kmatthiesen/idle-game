<template>
    <button @click="setBuyAmount(1)">1x</button>
    <button @click="setBuyAmount(5)" >5x</button>
    <button @click="setBuyAmount(10)" >10x</button>
    <button @click="setBuyAmount(25)" >25x</button>
    <button @click="setBuyAmount(-1)" >Max</button>
    <br />
    <br />
</template>

<script>
    export default {
        name: "BuyButtons",
        emits: ["setBuyAmountEmit"],
        methods: {
            setBuyAmount(amount) {
                this.$emit("setBuyAmountEmit", amount);
            }
        }
    }
</script>

<style scoped>

</style>