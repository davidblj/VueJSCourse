<template>
    <div id="app">
        <tareas-restantes></tareas-restantes>
        <ul>
            <li v-for="tarea in tareas">{{tarea.nombre}}</li>
        </ul>
    </div>
</template>
<script>
    import tareasRestantes from './components/tareasRestantes.vue'
    import {mapState} from 'vuex'

    // getters and setters in vuex
    // wen can make calculations in a separate file (tareasRestantes.vue). But we can
    // skip this step and make a getter in store.js

    export default {

        name: 'app',
        components: { tareasRestantes },
        /*
        // alternative way to access to store
        computed: {
            tareas() {
                return this.$store.state.tareas;
            }
        }
        */

        computed: mapState(['tareas'])
    }

</script>
<style lang="scss">

</style>
