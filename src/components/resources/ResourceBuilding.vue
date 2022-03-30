<template>
    <div>
        <building v-for="building in this.buildingIds" :key="[building].id" :displayName="[building].displayName" :buildingId="[building].id" @buyEmit="buy" :owned="[building].owned" :canBuyNext="canBuyNextBuilding([building])" :nextResourceCost="displayNumber(this[building].nextResourceCost)" :perSecond="[building].perSecond"/>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    import Building from "./Building";
    import {displayNumber} from "../../utils/number";
    import {buildGetters} from "../../utils/store-util";

    export default {
        name: "ResourceBuilding",
        components: {Building},
        props: {
            buildingIds: {
                type: Object,
                required: true
            }
        },
        created() {
            buildGetters(this, this.buildingIds, this.getBuilding);
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

            displayNumber,
        },
        computed: {
            ...mapGetters("goldStore", ["getGold", "getBuilding"]),
        }
    }
</script>

<style scoped>

</style>