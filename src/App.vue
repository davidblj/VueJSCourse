<template>
    <div id="app">
            <child :nombre="autor"></child>
            <small>{{autor}}</small>
    </div>
</template>

<script>

    // we have seen how we can make child and siblings components react
    // through method invocations

    // we will see now how we can pass data between a parent and its child

    import child  from './components/child.vue'

    export default {
        name: 'app',

        components: { child },

        data() {
            return { autor: 'David jaramillo'}
        },

        methods: {
        }
    }
</script>

<style lang="scss">

</style>
