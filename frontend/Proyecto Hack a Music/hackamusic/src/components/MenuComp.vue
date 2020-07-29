<template>
  <div>
    <div id="nav">
      <!-- Creamos menú dinámico con :to="" -->
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name : 'About' }">About</router-link>
      <router-link :to="{ name: 'TopTracks' }">Top Tracks</router-link>
      <router-link :to="{ name: 'TopArtists' }">Top Artists</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComp",
};
</script>

<style scoped>
#nav {
  margin: 1rem;
  padding: 1rem 2rem 1rem;
  display: flex;
  flex-direction: row;
  border: 0.2rem solid;
  background-color: whitesmoke;
  width: 55%;
  margin-left: 20%;
}
a {
  margin: 1rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  color: inherit;
}
</style>