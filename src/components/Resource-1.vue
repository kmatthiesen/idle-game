<template>
    Amount: {{this.owned}}
    Resource: {{this.resource}}
    Next Cost: {{this.nextResourceCost}}
    <button v-on:click="buy()" :disabled="!this.canBuyNext">Increase Amount</button>
</template>

<script>
    import {sleep, TIME} from "../utils/time";
    import {canBuy, nextCost} from "../utils/cost";

    export default {
        name: "Resource-1",
        data() {
            return {
                owned: 0,
                resource: 10,
                isLooping:false,
                baseCost: 10,
                scaling: 1.1,
                canBuyNext: true,
                nextResourceCost: 0,
            }
        },
        methods: {
            buy() {
                if (this.canBuyNext) {
                    this.resource -= nextCost(this.baseCost, this.scaling, this.owned);
                    this.owned++;
                    this.nextResourceCost = nextCost(this.baseCost, this.scaling, this.owned);
                    this.canBuyNext = canBuy(this.resource, this.baseCost, this.scaling, this.owned);
                    if (!this.isLooping) {
                        this.loop();
                        this.isLooping = true;
                    }
                }
            },
            async loop() {
                this.resource += (this.owned * 1.5);
                this.canBuyNext = canBuy(this.resource, this.baseCost, this.scaling, this.owned);
                await sleep(TIME.SECOND);
                this.loop();
            },

        }
    }
</script>

<style scoped>

</style>