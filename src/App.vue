<template>
    <div id="app">
        <elemento></elemento>
        <ul>
            <li>Outer list item</li>
        </ul>
    </div>
</template>

<script>

    import elemento from './components/elemento.vue'

    export default {
        name: 'app',

        components: {
            elemento
        },

        // we can define global style rules inside components that only affects the DOM
        // inside him. For that, we add the "scoped" keyword next to the <style> tag declaration

        }
</script>

<style lang="scss">

</style>
