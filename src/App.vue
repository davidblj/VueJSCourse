<template>
    <div id="app">
        <elemento tipo="header">Hello header</elemento>
        <elemento tipo="nav">Hello nav</elemento>
        <elemento tipo="footer">Hello footer</elemento>
    </div>
</template>

<script>

    import elemento from './components/elemento.vue'

    export default {
        name: 'app',

        components: {
            elemento
        },

        // say that a component is in charge of displaying different components based
        // on what the parent requests.  We can display them by the directive v-if. But
        // that is quite ineffective. Instead we use the render function.  Go to element.vue
        // file
        }
</script>

<style lang="scss">

</style>
