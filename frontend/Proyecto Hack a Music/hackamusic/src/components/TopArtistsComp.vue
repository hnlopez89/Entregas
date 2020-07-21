<template>
  <div>
    <input type="search" v-model="search" placeholder="Find your artist" />
    <ul v-for="artist in filtered" :key="artist.id">
      <li>
        <img :src="artist.image[2]['#text']" />
      </li>
      <li>ARTIST: {{artist.name}}</li>
      <li>LISTENERS: {{ artist.listeners}}</li>
      <br />
      <button>
        <a :href="artist.url">More info</a>
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopArtistsComp",
  props: {
    artists: Array
  },
  data() {
    return {
      search: ""
    };
  },

  computed: {
    filtered() {
      if (!this.search) {
        return this.artists;
      }
      return this.artists.filter(artist =>
        artist.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
</style>