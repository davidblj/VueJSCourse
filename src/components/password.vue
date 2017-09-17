<template>
    <div>
        <!-- ref stands out for an id to this component -->
        <input :value="password" @input="verifyPassword($event.target.value)" ref="pass">
    </div>
</template>
<script>
    export default {

        props: ['password'],

        methods: {
            verifyPassword(password) {

                if(this.notValid.includes(password)){
                    this.$refs.pass.value = password = '';
                }

                // why is this line not necessary ?

                this.$emit('input', password)
            }
        },

        data() {
            return {
                notValid: ['abc', 'admin', '123456', 'root'],
            }
        }
    }
</script>
<style>
</style>