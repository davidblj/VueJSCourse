<template>
    <div id="app">
        <!--
        <contador :cantidad="cantidad"
        @aumentar="cantidad++"
        @reducir="cantidad--"></contador> -->
    <contador></contador>
    </div>
</template>
<script>
    import contador from './components/contador.vue'

    // In the last example, we saw how we can share an state. For more
    // complex escenarios, we can use vuex. Vuex will hold the state of
    // the variable 'cantidad'.

    // we define a store.js file. And we import vuex in main.js.

    export default {

        name: 'app',
        components: { contador },
        /*
        data() {
            return { cantidad: 0}
        }
        */
    }

</script>
<style lang="scss">

</style>
