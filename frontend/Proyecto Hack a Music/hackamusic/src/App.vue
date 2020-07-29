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
    footercomp,
  },
};
</script>

<style>
body {
  background-color: green;
}
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  color: #37053d;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
