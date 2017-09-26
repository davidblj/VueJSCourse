<template>
    <div id="app">
        La cantidad es {{cantidad}}, y me dedicacion es {{dedicacion}}, pero mi habilidad
        es {{ habilidad }}
    </div>
</template>
<script>
    import contador from './components/contador.vue'
    import {mapState} from 'vuex'

    // we can use states in vuex in a simple manner with MapState.
    // Invoking mapstate in our computed properties let us access the
    // state object. We do so with an arrow function or with an array
    // containing the string variables.

    export default {

        name: 'app',
        components: { contador },
        /*
        computed: mapState({
            // inside our mapstate object, we have got access to "state"
            cantidad: (state) => state.cantidad,
            dedicacion: (state) => state.dedicacion
        })
        */
        computed: mapState(['cantidad', 'dedicacion', 'habilidad'])
    }

</script>
<style lang="scss">

</style>
