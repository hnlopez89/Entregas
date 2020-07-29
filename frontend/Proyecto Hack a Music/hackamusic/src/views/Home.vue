<template>
  <div class="home">
    <vue-headful title="Welcome to Hack a music - Top Tags " />
    <!-- APLICAMOS COMPONENTE REGISTRADO -->
    <toptags :toptags="toptags" />
  </div>
</template>

<script>
//IMPORTO COMPONENTE DE TITULO DE LAS PAGINAS
import api from "@/api/index.js";
import toptags from "@/components/TopTagsComp.vue";

export default {
  name: "Home",
  // REGISTRO COMPONENTE
  components: {
    toptags,
  },
  data() {
    return {
      //VARIABLE DE TITULO DE ESTA VISTA
      toptags: [],
    };
  },
  //APLICAMOS FUNCIÓN EN EL HOOK CREATED
  created() {
    api
      .getTopTags()
      .then((response) => (this.toptags = response.data.tags.tag));
  },
};
</script>

<style scoped>
</style>