<template>
    <div>
        <h1>Contador: {{cantidad}}</h1>
        <button @click="aumentar">Sumar</button>
        <button @click="reducir">Restar</button>
    </div>
</template>
<script>
    export default {
        // props: [ 'cantidad' ],
        methods: {
            aumentar() {
                // this.$emit('aumentar');
                this.$store.state.cantidad++;
            },
            reducir() {
                // this.$emit('reducir');
                this.$store.state.cantidad--;
            }
        },
        computed: {
            /*
            // comment this method in case you are trying to use Vuex,  since properties and methods
            // can't share the same name
            */
            cantidad() {
                return this.$store.state.cantidad;
            }

        }
    }
</script>
<style>
</style>