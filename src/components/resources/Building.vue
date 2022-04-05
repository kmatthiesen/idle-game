<template>
    <div>
        {{displayName}}: {{displayNumber(owned)}}
        Next Cost: {{displayNumber(nextResourceCost)}}
        <button v-on:click="buy()" :disabled="!this.canBuyNext">Buy</button>
        {{displayNumber(perSecond)}} / sec
    </div>
</template>

<script>
    import {displayNumber} from "../../utils/number";

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
            perSecond: {
                type: Number,
                required: true
            }
        },
        methods: {
            buy() {
                if (this.canBuyNext) {
                    this.$emit("buyEmit", this.buildingId);
                }
            },
            displayNumber
        }
    }
</script>

<style scoped>

</style>