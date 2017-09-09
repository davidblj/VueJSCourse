<template>
    <div>
        <blockquote>
            <img :src="imagen" align="right">
            <h1> {{ nombre }} </h1>
            <h2> {{ correoe }}</h2>
            <hr>
        </blockquote>
    </div>
</template>

<script>
    export default {

        // we can validate properties. Try deleting some of this values on
        // the html and see what happens

        props:  {
            nombre: {
                type: [String, Array], //  for any type use:  null = *
                required: true,
            },
            correoe: {
                type: String,
                default: 'davidblj@gmail.com'      // a default value
            },
            imagen: String
        }
    }
</script>

<style>

</style>