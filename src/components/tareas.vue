<template>
    <div>
     <ul>
         <ul>
             <slot name="tarea" v-for="tarea in listado" :title="tarea.titulo"></slot>
             <!--        <li v-for="tarea in listado">
                         {{ tarea.titulo }}
                     </li>-->
         </ul>
     </ul>
    </div>
</template>

<script>
    export default {

        props: ['listado']
    }
</script>

<style lang="scss">
</style>