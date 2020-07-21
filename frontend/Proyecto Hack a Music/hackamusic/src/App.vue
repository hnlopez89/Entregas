<template>
  <div id="app">
    <menucomp />
    <router-view />
    <footercomp />
  </div>
</template>

<script>
//Paso 1: importar componente
import menucomp from "@/components/MenuComp.vue";
import footercomp from "@/components/FooterComp.vue";

export default {
  name: "App",
  components: {
    menucomp,
    footercomp
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
