<template>
    <div id="app">
        <password v-model="password"></password>
        <p>{{data.password}}</p>
    </div>
</template>

<script>

    import password from './components/password.vue'

    export default {
        name: 'app',

        components: {
            password
        },

        // we will mutate "password" in our parent component. Its child will process the logic
        // and then he will emit an input event every time an invalid password has been typed.
        // v-

        data() {
            return {
                password: 'es3Es653!*&__',
            }
        }
        }
</script>

<style lang="scss">

</style>
