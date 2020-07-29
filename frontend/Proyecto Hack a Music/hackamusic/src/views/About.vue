<template>
  <div class="About">
    <vue-headful title="About" />
    <h1>Hugo Nogueira López</h1>
    <h3>About me:</h3>
    <ul>
      <li>Odio CSS</li>
      <li>Odio CSS</li>
      <li>Y... odio CSS</li>
    </ul>

    <ul>
      <b>Tecnologías usadas para este proyecto:</b>
      <li>La Api de Lastfm</li>
      <li>Libreria AXIOS</li>
      <li>SweetAlert</li>
      <li>Vue-headful</li>
    </ul>
  </div>
</template>

<script >
export default {
  name: "About",

  data() {
    return {};
  },
};
</script>


<style scoped>
h3 {
  padding-top: 2rem;
  font-size: 1.5rem;
}
ul {
  margin: 2rem;
}
li {
  list-style: none;
}
</style>