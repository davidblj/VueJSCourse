
<!--
    <header v-if="tipo == 'footer'>
        <slot></slot>
    </header>
    <nav v-if="tipo == 'nav'>
        <slot></slot>
    </nav>
    <footer v-if="tipo == 'footer'>
        <slot></slot>
    </footer>
    <contentA v-if="tipo == 'contentA'>
        <slot></slot>
    </contentA>

-->
<script>
    export default {

        props: ['tipo'],
        methods: {
        },
        render(createElement) {
            return createElement(
                this.tipo,              // a tag name, that is displayed in the dom
                this.$slots.default     // content specified in the slot to be displayed
            )
        }
    }
</script>
<style>
</style>