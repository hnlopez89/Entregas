<template>
  <div class="topartits">
    <vue-headful title="Top Artists" />
    <!-- APLICAMOS COMPONENTE REGISTRADO -->
    <topartists :artists="artists" />
  </div>
</template>

<script>
//IMPORTO COMPONENTE DE TITULO DE LAS PAGINAS
import api from "@/api/index.js";
import topartists from "@/components/TopArtistsComp.vue";

export default {
  name: "TopArtists",
  // REGISTRO COMPONENTE

  components: {
    topartists,
  },
  data() {
    return {
      //VARIABLE DE TITULO DE ESTA VISTA
      artists: [],
    };
  },
  //APLICAMOS FUNCIÓN EN EL HOOK CREATED
  created() {
    api
      .getArtists()
      .then((response) => (this.artists = response.data.topartists.artist));
  },
};
</script>


<style scoped>
</style>