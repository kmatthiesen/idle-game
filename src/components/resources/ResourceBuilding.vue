<template>
    <div>
        <h4 style="width: 200px">{{getGold.displayName}}: {{displayNumber(getGold.amount)}} | {{getGold.perSecond}} / sec</h4>
        <building :displayName="building1.displayName" :buildingId="building1.id" @buyEmit="buy" :owned="building1.owned" :canBuyNext="canBuyNextBuilding(building1)" :nextResourceCost="displayNumber(building1.nextResourceCost)" :perSecond="building1.perSecond"></building>
        <building :displayName="building2.displayName" :buildingId="building2.id" @buyEmit="buy" :owned="building2.owned" :canBuyNext="canBuyNextBuilding(building2)" :nextResourceCost="displayNumber(building2.nextResourceCost)" :perSecond="building2.perSecond"></building>
        <building :displayName="building3.displayName" :buildingId="building3.id" @buyEmit="buy" :owned="building3.owned" :canBuyNext="canBuyNextBuilding(building3)" :nextResourceCost="displayNumber(building3.nextResourceCost)" :perSecond="building3.perSecond"></building>
        <building :displayName="building4.displayName" :buildingId="building4.id" @buyEmit="buy" :owned="building4.owned" :canBuyNext="canBuyNextBuilding(building4)" :nextResourceCost="displayNumber(building4.nextResourceCost)" :perSecond="building4.perSecond"></building>
        <building :displayName="building5.displayName" :buildingId="building5.id" @buyEmit="buy" :owned="building5.owned" :canBuyNext="canBuyNextBuilding(building5)" :nextResourceCost="displayNumber(building5.nextResourceCost)" :perSecond="building5.perSecond"></building>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import { displayNumber } from "../../utils/number";
    import Building from "./Building";
    import {BUILDING_ID} from "../../utils/id-values";
    import {buildGetters} from "../../utils/store-util";

    export default {
        name: "ResourceBuilding",
        components: {Building},
        created() {
            buildGetters(this, BUILDING_ID);
        },
        methods: {
            buy(buildingId) {
                if (this.canBuyNextBuilding(this[buildingId])) {
                    this.buyBuilding(buildingId);
                }
            },
            canBuyNextBuilding(building) {
                return this.getGold.amount >= building.nextResourceCost;
            },
            ...mapActions("goldStore", ["buyBuilding"]),
            displayNumber
        },
        computed: {
            ...mapGetters("goldStore", ["getGold", "getBuilding"]),
        }
    }
</script>

<style scoped>

</style>