<template>
  <div id="nav">
    <!-- Creamos menú dinámico con :to="" -->
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Productos' }">Hoteles</router-link>
      <router-link :to="{ name: 'Clientes' }">Clientes</router-link>
      <router-link :to="{ name: 'Registrar' }">Registrar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComp",
};
</script>

<style scoped>
#nav {
  margin: 1rem;
  padding: 1rem 2rem 1rem;
  box-sizing: border-box;
  display: flex;
  border: 0.2rem solid;
  background-color: grey;
}
a {
  margin: 1rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  color: inherit;
}
</style>