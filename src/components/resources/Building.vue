<template>
    <div>
        {{building.displayName}}: <NumberDisplay :number="building.owned" />
        Next Cost: <NumberDisplay :number="building.nextResourceCost" />
        <button v-on:click="buy()" :disabled="!this.canBuyNext">Buy <NumberDisplay :number="buyOrder.amount" /> (<NumberDisplay :number="buyOrder.cost" /> ) </button>
        <NumberDisplay :number="building.perSecond" /> / sec
    </div>
</template>

<script>
    import {displayNumber} from "../../utils/number";
    import NumberDisplay from "../general/NumberDisplay";
    import {createBuyOrder} from "../../utils/cost";

    export default {
        name: "Building",
        components: {NumberDisplay},
        emits: ["buyEmit"],
        props: {
            building: {
                type: Object,
                required: true
            },
            resource: {
                type: Number,
                required: true
            },
            buyAmount: {
                type: Number,
                required: true
            }
        },
        methods: {
            buy() {
                if (this.canBuyNext) {
                    this.$emit("buyEmit", this.buyOrder);
                }
            },
            displayNumber
        },
        computed: {
            canBuyNext() {
                return this.resource >= this.buyOrder.cost && this.buyOrder.amount !== 0;
            },
            buyOrder() {
                return createBuyOrder(this.building, this.resource, this.buyAmount);
            }
        }
    }
</script>

<style scoped>

</style>