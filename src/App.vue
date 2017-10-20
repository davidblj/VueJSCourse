<template>
  <section>
    <h1>Rutas con Vue Router</h1>
    <router-link to="/home" active-class="activo" tag="li">
      <a>Home</a>
    </router-link>
    <router-link to="/contacto" active-class="activo" tag=li>
      <a>Contacto</a>
    </router-link>
    <router-view></router-view>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">

  .activo a {
    font-weight: bold;
    color: #4FA26D
  }

</style>
