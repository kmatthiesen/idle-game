<template>
    <div class="wrapper">
        <ResourceDisplay :resource="getGold" />
        <br />
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    import ResourceDisplay from "./ResourceDisplay";

    export default {
        name: "Dashboard",
        components: {ResourceDisplay},
        computed: {
            ...mapGetters("goldStore", ["getGold"])
        }
    }
</script>

<style scoped>
    .wrapper {
        border-bottom: black 15px;
    }
</style>