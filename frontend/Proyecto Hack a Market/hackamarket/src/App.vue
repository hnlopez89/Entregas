<template>
  <div id="app">
    <menucustom />
    <router-view />
    <footercustom />
  </div>
</template>

<script>
//Paso 1: importar componente
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "App",
  components: {
    menucustom,
    footercustom,
  },
};
</script>

<style scoped>
html {
  width: 500px;
}
* {
  margin: 0rem;
  padding: 0rem;

  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  max-width: 100%;
  margin: auto;
  background: rgb(32, 32, 32);
  color: beige;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
</style>
