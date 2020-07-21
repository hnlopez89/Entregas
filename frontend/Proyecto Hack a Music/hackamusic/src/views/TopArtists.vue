<template>
  <div class="topartits">
    <topartists :artists="artists" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import topartists from "@/components/TopArtistsComp.vue";

export default {
  name: "TopArtists",
  components: {
    topartists
  },
  data() {
    return {
      artists: []
    };
  },
  created() {
    api
      .getArtists()
      .then(response => (this.artists = response.data.topartists.artist));
  }
};
</script>
<style scoped>
</style>