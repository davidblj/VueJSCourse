<template>
    <div id="app">
       <h1 :class="[$style.rojo]">Hello world</h1>
        <h1 :class="{[$style.subrayado]: subrayado}">Hello world</h1>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                subrayado: true     // you can down the road, change the value of this variable
                                    // for dynamic style rules
            }
        }

        // like scoped variables, we can define local rules. These rules are unique within
        // the component because webpack assign them a coded name. You can inspect the generated HTML.

        }
</script>

<style module lang="scss">

    .subrayado {
        text-decoration: underline;
    }
    .rojo {
        color: red
    }
</style>
