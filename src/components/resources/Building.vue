<template>
    {{name}}: {{owned}}
    Next Cost: {{nextResourceCost}}
    <button v-on:click="buy()" :disabled="!this.canBuyNext">Increase Amount</button>
</template>

<script>
    export default {
        name: "Building",
        emits: ["buyEmit"],
        props: {
            name: {
                type: String,
                required: true
            },
            owned: {
                type: Number,
                required: true
            },
            baseCost: {
                type: Number,
                required: true
            },
            scaling: {
                type: Number,
                required: true
            },
            canBuyNext: {
                type: Boolean,
                required: true
            },
            nextResourceCost: {
                type: Number,
                required: true
            },
        },
        methods: {
            buy() {
                if (this.canBuyNext) {
                    this.$emit("buyEmit", this.name);
                }
            },
        }
    }
</script>

<style scoped>

</style>