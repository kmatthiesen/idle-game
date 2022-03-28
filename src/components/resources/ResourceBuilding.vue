<template>
    <div>
        <h4>{{resourceName}}</h4>
        <building :name="getBuilding1.name" @buyEmit="buy" :owned="getBuilding1.owned" :baseCost="getBuilding1.baseCost" :scaling="getBuilding1.scaling" :canBuyNext="getBuilding1.canBuyNext" :nextResourceCost="getBuilding1.nextResourceCost"></building>
    </div>
</template>

<script>
    // import {canBuy, nextCost} from "../../utils/cost";
    import {mapActions, mapGetters} from "vuex";
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
        methods: {
            buy() {
                if (this.getBuilding1.canBuyNext) {
                    this.buyBuilding1();
                    // this.resource -= nextCost(this.baseCost, this.scaling, this.owned);
                    // this.owned++;
                    // this.nextResourceCost = nextCost(this.baseCost, this.scaling, this.owned);
                    // this.canBuyNext = canBuy(this.resource, this.baseCost, this.scaling, this.owned);
                }
            },
            ...mapActions("resource1Store", ["buyBuilding1"]),
        },
        computed: {
            ...mapGetters("resource1Store", ["getBuilding1"]),
        }
    }
</script>

<style scoped>

</style>