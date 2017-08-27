<template>
    <div id="app">
        <img
                v-for="persona in personas"
        v-bind:src="persona.picture.thumbnail">
        <p>{{ $data }}</p>
    </div>
</template>

<script>

    // vue-resource is no longer  "officially" supported by vue
    // use axios and vue-axios instead.

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
                this.axios.get('https://randomuser.me/api/?results=500')
                    .then( (respuesta) => {
                        console.log('success');
                        // use .data instead of .body
                        this.personas = respuesta.data.results;
                    });
            }
        }
    }
</script>

<style lang="scss">

</style>
