<template>
    <div id="app">
        <tareas :tareas="tareas">
            Tareas que necesito finalizar ya!
        </tareas>
        <pre>{{ $data }}</pre>
    </div>
</template>

<script>

    // we will dive deeper in to named slots and properties. Scoped slots gives a
    // great advantage

    import tareas  from './components/tareas.vue'

    export default {
        name: 'app',

        components: {
            tareas,
        },

       // in this example, a component is stored inside a component. All the data came from the
        // parent component. This is done through the properties.

        data() {
            return { tareas: [
                'Finalizar sección Componentes',
                'Iniciar workflow con Vue CLI y Webpack',
                'Terminar de estudiar la documentación de Vuex',
                'Seguir jugando con Vue Router y grabar el primer vídeo',
            ]}
        }
        }
</script>

<style lang="scss">

</style>
