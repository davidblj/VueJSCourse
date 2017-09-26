<template>
    <div>
        <h1>Contador: {{cantidad}}</h1>
        <button @click="aumentar">Sumar</button>
        <button @click="reducir">Restar</button>
    </div>
</template>
<script>
    import {mapState, mapMutations} from 'vuex'

    export default {

        computed: mapState(['cantidad']),

        // there are two ways to access our mutations
        // through this.$store
        /*
        methods: {
            aumentar() {
                this.$store.commit('aumentar');
            },
            reducir() {
                this.$store.commit('reducir')
            }
        },
        */

        // or through mapMutations
        // mutations must be synchronous. Now, keep in mind that i can also pass
        // values and objects as a second parameter

        methods: mapMutations(['aumentar', 'reducir'])
    }
</script>
<style>
</style>