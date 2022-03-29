<template>
    <div>
        <h4 style="width: 200px">{{getGold.displayName}}: {{displayNumber(getGold.amount)}}</h4>
        <building :displayName="building1.displayName" :buildingId="building1.id" @buyEmit="buy" :owned="building1.owned" :canBuyNext="canBuyNextBuilding(building1)" :nextResourceCost="displayNumber(building1.nextResourceCost)"></building>
        <building :displayName="building2.displayName" :buildingId="building2.id" @buyEmit="buy" :owned="building2.owned" :canBuyNext="canBuyNextBuilding(building2)" :nextResourceCost="displayNumber(building2.nextResourceCost)"></building>
<!--        <Building/>-->
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
                if (this.canBuyNextBuilding(this.getBuilding(buildingId))) {
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