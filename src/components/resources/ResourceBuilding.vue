<template>
    <div>
        <h4>{{getGold.displayName}}: {{getGold.amount}}</h4>
        <building :displayName="getBuilding1.displayName" :buildingId="getBuilding1.id" @buyEmit="buy" :owned="getBuilding1.owned" :canBuyNext="canBuyNextBuilding1()" :nextResourceCost="getBuilding1.nextResourceCost"></building>
    </div>
</template>

<script>
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
            buy(buildingId) {
                if (buildingId === this.getBuilding1.id && this.canBuyNextBuilding1()) {
                    this.buyBuilding1();
                }
            },
            canBuyNextBuilding1() {
                return this.getGold.amount >= this.getBuilding1.nextResourceCost;
            },
            ...mapActions("goldStore", ["buyBuilding1"]),
        },
        computed: {
            ...mapGetters("goldStore", ["getBuilding1", "getGold"]),
        }
    }
</script>

<style scoped>

</style>