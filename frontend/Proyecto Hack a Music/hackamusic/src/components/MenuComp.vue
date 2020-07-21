<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name : 'About' }">|About</router-link>
      <router-link :to="{ name: 'TopTracks' }">|Top Tracks</router-link>
      <router-link :to="{ name: 'TopArtists' }">|Top Artists</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComp"
};
</script>

<style scoped>
</style>