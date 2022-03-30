<template>
    <div>
        <b>{{resource.displayName}}:</b> {{displayNumber(resource.amount)}} | {{resource.perSecond}} / sec
    </div>
</template>

<script>
    import {displayNumber} from "../../utils/number";

    export default {
        name: "ResourceDisplay",
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