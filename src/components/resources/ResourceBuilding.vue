<template>
    {{resourceName}}
    <building :name="building1.name" @buyEmit="buy" :owned="building1.owned" :baseCost="building1.baseCost" :scaling="building1.scaling" :canBuyNext="building1.canBuyNext" :nextResourceCost="building1.nextResourceCost"></building>
</template>

<script>
    // import {canBuy, nextCost} from "../../utils/cost";
    import building1 from "./attributes/building-1";
    import Building from "./Building";

    export default {
        name: "ResourceBuilding",
        components: {Building},
        props: {
            resourceName: {
                type: String,
                required: true
            },
        },
        data() {
            return {
                building1: {
                    owned: 0,
                    canBuyNext: false,
                    nextResourceCost: 10,
                    ...building1
                }
            }
        },
        methods: {
            buy() {
                if (this.canBuyNext) {
                    // this.resource -= nextCost(this.baseCost, this.scaling, this.owned);
                    // this.owned++;
                    // this.nextResourceCost = nextCost(this.baseCost, this.scaling, this.owned);
                    // this.canBuyNext = canBuy(this.resource, this.baseCost, this.scaling, this.owned);
                }
            },
        }
    }
</script>

<style scoped>

</style>