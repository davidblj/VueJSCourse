<template>
    <div id="app">
        <candidato v-for="candidato in candidatos"
                   :nombre="candidato.name.first"
                   :correoe="candidato.email"
                   :imagen="candidato.picture.thumbnail"
        >
        </candidato>
    </div>
</template>

<script>

    // we will see now how we can pass data between a parent and its child through props

    // todo: Fix axios request. In order for this to work, you need to make a change to reload our app.

    import candidato  from './components/candidato.vue'

    export default {
        name: 'app',

        components: { candidato },

        mounted() {
            this.obtenerCandidatos();
        },

        data() {
            return { candidatos: []}
        },

        methods: {
            obtenerCandidatos() {
                axios.get('https://randomuser.me/api/?results=100')
                    .then((respuesta) => {
                        this.candidatos = respuesta.data.results;
                    });
            }
        }

        }
</script>

<style lang="scss">

</style>
