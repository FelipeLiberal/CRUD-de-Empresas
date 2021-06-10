<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Visualizar Empresas</router-link> |
      <router-link to="/create">Cadastrar Empresa</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
.form-wrapper {
  width: 500px;
  margin: 0 auto;
}
</style>