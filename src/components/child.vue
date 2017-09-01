<template>
    <div>
        <h1> {{nombre}}</h1>
        <h2> {{proxy}}</h2>
        <button @click="changeValue">Change it !</button>
    </div>
</template>

<script>
    export default {

        // we need to define a property. That property is given a value in its html.
        // this variable is not mutable. If the parent variable changes, its children value also does.
        // , hence we use the "proxy" variable

        props: ['nombre'],

        mounted() {
            // You can also access the variable "nombre" with "this"
            // this line will be printed out, only if you restart "npm run dev"
            console.log(this.nombre);
        },

        data() {
            return { proxy: this.nombre };
        },

        methods: {
            changeValue() {
                this.proxy = 'anything !';
            }
        }
    }
</script>

<style>

</style>