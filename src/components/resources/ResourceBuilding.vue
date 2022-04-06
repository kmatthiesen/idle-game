<template>
    <div>
        <BuyButtons @setBuyAmountEmit="setBuyAmount" />
        <building v-for="building in this.buildingIds" :key="[building].id" @buyEmit="buy" :building="this[building]"  :resource="getResource(this.storeId).amount" :buyAmount="buyAmount" />
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    import Building from "./Building";
    import {displayNumber} from "../../utils/number";
    import {buildGetters} from "../../utils/store-util";
    import BuyButtons from "./BuyButtons";

    export default {
        name: "ResourceBuilding",
        components: {BuyButtons, Building},
        props: {
            buildingIds: {
                type: Object,
                required: true
            },
            storeId: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                buyAmount: 1
            }
        },
        created() {
            buildGetters(this, this.storeId, this.buildingIds, this.getBuilding);
        },
        methods: {

            buy(buyOrder) {
                buyOrder.store = this.storeId;
                this.buyBuilding(buyOrder);
            },

            setBuyAmount(amount) {
                this.buyAmount = amount;
            },

            ...mapActions(["buyBuilding"]),

            displayNumber,
        },
        computed: {
            ...mapGetters(["getResource", "getBuilding"]),
        }
    }
</script>

<style scoped>

</style>