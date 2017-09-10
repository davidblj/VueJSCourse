<template>
    <div>
        <h1><slot></slot></h1>
        <ul>
            <tarea v-for="todo in tareas" :tarea="todo"></tarea>
        </ul>
    </div>
</template>

<script>
    import tarea from './tarea.vue'

    export default {

        components: { tarea },
        data() {
            return {
                tareas: [
                    'Finalizar sección Componentes',
                    'Iniciar workflow con Vue CLI y Webpack',
                    'Terminar de estudiar la documentación de Vuex',
                    'Seguir jugando con Vue Router y grabar el primer vídeo',
                ]
            }
        }
    }
</script>

<style lang="scss">
</style>