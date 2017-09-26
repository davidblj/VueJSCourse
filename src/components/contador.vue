<template>
    <div>
        <h1>Contador: {{cantidad}}</h1>
        <!-- note that we are now using an additional parameter value; an object containing
         the quantity to be added or substract -->
        <button @click="aumentarAsync({cantidad: 2})">Sumar</button>
        <button @click="reducirAsync({cantidad: 3})">Restar</button>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {

        computed: mapState(['cantidad']),

        /*
        // the hard way
        methods: {
            aumentar() {
                this.$store.dispatch('aumentarAsync');
            },
            reducir() {
                this.$store.dispatch('reducirAsync')
            }
        },
        */

        methods: mapActions(['aumentarAsync', 'reducirAsync'])
    }
</script>
<style>
</style>