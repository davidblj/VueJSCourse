<template>
    <div id="app">
        <tareas :listado="tareas">
            <template slot="tarea" scope="datos">
                <li> <h1>{{ datos.title }}</h1></li>
            </template>
        </tareas>

        <tareas :listado="tareas">
            <template slot="tarea" scope="datos">
                <li>{{ datos.title }}</li>
            </template>
        </tareas>

        <tareas :listado="tareas">
            <template slot="tarea" scope="datos">
                <li>🐱{{ datos.title }}</li>
            </template>
        </tareas>
    </div>
</template>

<script>

    // we will dive deeper in to named slots and properties. Scoped slots gives a
    // great advantage

    import tareas  from './components/tareas.vue'

    export default {
        name: 'app',

        components: { tareas },

        // we will access each item (title) in "tareas.vue". For that, we define a scope (datos).
        // that variable can now access the property "title". That means that datos.title will
        // generate a new entry in our html depending of the quantity of items in :title.

        // datos can access any property in a similar manner. it doesnt have to reference a variable
        // inside a v-for. And it also might change depending on the slot name

        // We can now have an instance on this component with different styles that ARE NOT defined in
        // the original component

        data() {
            return { tareas: [
                { titulo: 'Salir a correr'},
                { titulo: 'Recoger la casa'},
                { titulo: 'Aprender Vue.js'},
                { titulo: 'Ir al gimnasio'},
                { titulo: 'Leer cada día'},
            ]}
        }

        }
</script>

<style lang="scss">

</style>
