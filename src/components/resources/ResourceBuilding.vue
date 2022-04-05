<template>
    <div>
        <building v-for="building in this.buildingIds" :key="[building].id" :displayName="this[building].displayName" :buildingId="this[building].id" @buyEmit="buy"
                  :owned="this[building].owned" :canBuyNext="canBuyNextBuilding(this[building])" :nextResourceCost="this[building].nextResourceCost" :perSecond="this[building].perSecond"/>
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
                    this.buyBuilding(buildingId, -1);
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