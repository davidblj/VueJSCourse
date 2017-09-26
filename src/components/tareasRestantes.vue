<template>
    <div>
        <h1>{{tareasCompletadas}} tareas completada(s)</h1>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
        methods: {
        },
        /*
        computed: {
            tareasCompletadas() {

               // the hard way
                return this.$store.state.tareas.filter((tarea) => {
                    return tarea.completado;
                }).length;

               return this.store.getters.tareasCompletadas;
            }
        }
        */

        // this can be even much easier, importing 'mapGetters' from vuex
        computed: mapGetters(['tareasCompletadas'])
    }
</script>
<style>
</style>