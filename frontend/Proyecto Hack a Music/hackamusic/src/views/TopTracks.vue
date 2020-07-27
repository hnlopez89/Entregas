<template>
  <div class="toptracks">
    <vue-headful title="Top Tracks" />
    <toptracks :toptracks="toptracks" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import toptracks from "@/components/TopTracksComp.vue";

export default {
  name: "TopTracks",
  components: {
    toptracks,
  },
  data() {
    return {
      toptracks: [],
    };
  },
  created() {
    api
      .getTopTracks()
      .then((response) => (this.toptracks = response.data.tracks.track));
  },
};
</script>
<style scoped>
</style>