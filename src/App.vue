<template>
    <div id="app">
        <message>Hello There</message>
        <message>How is it going ?</message>
    </div>
</template>

<script>

    // we need to compile everything in a file so that the web browser can understand
    // and thats why we use webpack. Take a look at webpack.config.js

    // Along the way, we are going to create a component named Message.vue in the
    // folder src/components. for that, we need to define a components field in our main .vue file
    import Message from './components/Message.vue'

    export default {
        name: 'app',

        components: { Message },

        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">

</style>
