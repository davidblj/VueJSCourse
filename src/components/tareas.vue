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
        props: ['tareas']
    }
</script>

<style lang="scss">
</style>