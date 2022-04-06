<template>
    <div>
        <b>{{resource.displayName}}:</b> <NumberDisplay :number="resource.amount" /> | <NumberDisplay :number="resource.perSecond" /> / sec
    </div>
</template>

<script>
    import {displayNumber} from "../../utils/number";
    import NumberDisplay from "../general/NumberDisplay";

    export default {
        name: "ResourceDisplay",
        components: {NumberDisplay},
        props: {
            resource: {
                type: Object,
                required: true
            },
        },
        methods: {
            displayNumber
        }
    }
</script>

<style scoped>

</style>