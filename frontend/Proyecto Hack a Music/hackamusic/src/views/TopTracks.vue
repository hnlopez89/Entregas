<template>
  <div class="toptracks">
    <vue-headful title="Top Tracks" />
    <!-- APLICAMOS COMPONENTE REGISTRADO -->
    <toptracks :toptracks="toptracks" />
  </div>
</template>

<script>
//IMPORTO COMPONENTE DE TITULO DE LAS PAGINAS
import api from "@/api/index.js";
import toptracks from "@/components/TopTracksComp.vue";

export default {
  name: "TopTracks",
  // REGISTRO COMPONENTE
  components: {
    toptracks,
  },
  data() {
    return {
      //VARIABLE DE TITULO DE ESTA VISTA
      toptracks: [],
    };
  },
  //APLICAMOS FUNCIÓN EN EL HOOK CREATED
  created() {
    api
      .getTopTracks()
      .then((response) => (this.toptracks = response.data.tracks.track));
  },
};
</script>
<style scoped>
</style>