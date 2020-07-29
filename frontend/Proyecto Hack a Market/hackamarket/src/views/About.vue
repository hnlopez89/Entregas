<template>
  <div class="About">
    <vue-headful title="About" />
    <h1>Hugo Nogueira López</h1>
    <p>About me</p>
    <ul>
      <li>Experto en el sector hotelero</li>
      <li>Fan de la tecnología</li>
      <li>Sin Internet ni tecnología no hay paraíso</li>
    </ul>
    <section>
      <p>Tecnologías usadas para este proyecto:</p>
      <ul>
        <li>Libreria AXIOS</li>
        <li>SweetAlert</li>
        <li>Vue-headful</li>
      </ul>
    </section>
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
* {
  text-align: center;
  list-style: none;
}
h1 {
  margin-top: 4rem;
}
p {
  font-size: 1.5rem;
  text-decoration: underline;
}
ul {
  margin: 2rem 0 4rem;
}
</style>