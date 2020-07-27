<template>
  <div>
    <input type="search" v-model="search" placeholder="Find your track" />
    <ul v-for="track in filtered" :key="track.id">
      <li>Track: {{track.name}}</li>
      <li>Artist: {{track.artist.name}}</li>
      <li>Listened: {{track.listeners}} times</li>
      <br />
      <button>
        <a :href="track.url">Play</a>
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopTrackComp",
  props: {
    toptracks: Array,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filtered() {
      if (!this.search) {
        return this.toptracks;
      }
      return this.toptracks.filter((track) =>
        track.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
</style>