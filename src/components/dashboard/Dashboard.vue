<template>
    <div class="wrapper">
        <ResourceDisplay :resource="getResource" />
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
            ...mapGetters("goldStore", ["getResource"])
        }
    }
</script>

<style scoped>
    .wrapper {
        border-bottom: black 15px;
    }
</style>