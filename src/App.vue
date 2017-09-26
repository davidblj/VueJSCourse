<template>
    <div id="app">
        <contador></contador>
    </div>
</template>
<script>
    import contador from './components/contador.vue'

    // getters and setters in vuex
    // if we need to change an state, and the way it is done is in an asynchronous manner
    // we need Actions. Take a look at store.js and contador.vue files

    export default {

        name: 'app',
        components: { contador },
    }

</script>
<style lang="scss">

</style>
