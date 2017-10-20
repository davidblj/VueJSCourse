<template>
  <div>
    <hr>
    <h2>Contacto</h2>
    <button @click="goBack()">go back</button>
  </div>
  </div>

</template>

<script>
export default {

  methods: {
    goBack() {
      this.$router.push({path: '/home'}, () => console.log('funcione!')); // home
    }
  }
}
</script>

<style>
</style>
