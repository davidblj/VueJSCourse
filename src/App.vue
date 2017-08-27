<template>
    <div id="app">
        <img
                v-for="persona in personas"
        v-bind:src="persona.picture.thumbnail">
        <p>{{ $data }}</p>
    </div>
</template>

<script>

    // we are going to use Vue-resource to make http calls.
    // for this exercise, we are consuming a service that
    // generates random users:  https://randomuser.me/documentation

    // VueResource is imported in main.js as a library we downloaded with
    // npm install vue-resource

    export default {
        name: 'app',

        mounted() {

            console.log('mounted');
            this.cargarPersonas();
        },

        data() {
            return { personas: [] }
        },

        methods: {

            cargarPersonas() {
                this.$http.get('https://randomuser.me/api/?results=500')
                    .then( (respuesta) => {
                        console.log(respuesta);
                        this.personas = respuesta.body.results;
                    })
            }
        }
    }
</script>

<style lang="scss">

</style>
