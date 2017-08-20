<template>
    <div class="box">
        <p><slot></slot></p>
    </div>

</template>

<script>
    export default {

    }
</script>

<style>
    .box {
        background: darkslategray  ;
        padding: 10px;
        border: 1px solid azure;
        color: white;
    }
</style>