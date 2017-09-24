<template>
    <div id="app">
        <persona></persona>
    </div>
</template>

<script>

    import persona from './components/persona.vue'

    export default {
        name: 'app',

        components: {
            persona
        },

        // this is just a simple configuration for axios and how it
        // was imported. Also, take a look at the computed properties

        data() {
            return {
                password: 'es3Es653!*&__',
            }
        }
        }
</script>

<style lang="scss">

</style>
