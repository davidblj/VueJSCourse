<template>
    <div id="app">
        <contador></contador>
    </div>
</template>
<script>
    import contador from './components/contador.vue'
    import {mapState} from 'vuex'

    // getters and setters in vuex
    // we can modify values directly from this file. But it will turn out to be something
    // cumbersome. We define setters or mutations. Take a look at contador.vue file


    export default {

        name: 'app',
        components: { contador },
        computed: mapState(['tareas'])
    }

</script>
<style lang="scss">

</style>
