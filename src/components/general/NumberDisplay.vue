<template>
    <span> {{ displayNumber(number) }} </span>
</template>

<script>
    import {displayNumber} from "../../utils/number";

    export default {
        name: "NumberDisplay",
        props: {
            number: {
                type: Number,
                required: true
            }
        },
        methods: {
            displayNumber
        }
    }
</script>

<style scoped>

</style>