<template>
    {{displayName}}: {{owned}}
    Next Cost: {{nextResourceCost}}
    <button v-on:click="buy()" :disabled="!this.canBuyNext">Increase Amount</button>
</template>

<script>
    export default {
        name: "Building",
        emits: ["buyEmit"],
        props: {
            buildingId: {
                type: String,
                required: true
            },
            displayName: {
                type: String,
                required: true
            },
            owned: {
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
                    this.$emit("buyEmit", this.buildingId);
                }
            },
        }
    }
</script>

<style scoped>

</style>