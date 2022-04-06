<template>
    <div class="hello">
        <dashboard/>
        <resource-building v-for="storeResource in this.storeResourceMap" :key="storeResource.id" :buildingIds="storeResource.buildingIds" :storeId="storeResource.id" />

    </div>
</template>

<script>
    import {mapActions} from "vuex";

    import ResourceBuilding from "./resources/ResourceBuilding";
    import Dashboard from "./dashboard/Dashboard";
    import {STORE_RESOURCE_MAP} from "../utils/id-values";

    export default {
        name: 'Main',
        components: {Dashboard, ResourceBuilding},
        data() {
            return {
                storeResourceMap: {...STORE_RESOURCE_MAP},
            }
        },
        mounted() {
            window.requestAnimationFrame(this.loop);
        },
        methods: {
            /**
             * Main game loop function. Runs based on the requestAnimationFrame functionality. Sends an action to the store to generate resources.
             */
            loop(timestamp) {
                this.nextTick(timestamp);
                window.requestAnimationFrame(this.loop);
            },
            ...mapActions(["nextTick"])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

