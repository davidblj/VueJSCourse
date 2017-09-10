<template>
    <div id="app">

        <button @click="seleccionado = 'bio'">bio</button>
        <button @click="seleccionado = 'contacto'">contacto</button>
        <button @click="seleccionado = 'tareas'">tareas</button>

        <components :is="seleccionado"></components>
    </div>
</template>

<script>

    import tareas  from './components/tareas.vue'
    import contacto from './components/contacto.vue'
    import bio from './components/bio.vue'

    export default {
        name: 'app',

        components: {
            tareas,
            contacto,
            bio
        },

        // We can define 3 components, and display them once at a time with the directive "v-if"
        // but we would be still rendering all of them. With the directive "is", we can tell vue
        // which component to show

        data() {
            return {
                seleccionado: 'contacto'
            }
        }
        }
</script>

<style lang="scss">

</style>
