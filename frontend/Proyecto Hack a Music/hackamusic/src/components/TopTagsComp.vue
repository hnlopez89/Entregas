<template>
  <div>
    <h1>Hackamusic! Lo más hot del momento</h1>
    <!-- Aplicamos v-model para el filtrado de datos -->
    <input type="search" v-model="search" placeholder="Find your tag" />
    <ul>
      <!-- Aplicamos v-for para escoger cada dato del array -->
      <li v-for="tag in filtered" :key="tag.id">
        <p>
          <b>Tag</b>
          {{tag.name}}
        </p>
        <p>
          <b>Reach:</b>
          {{tag.reach}}
        </p>
        <p>
          <b>Taggings:</b>
          {{tag.taggings}}
        </p>
        <p>
          <b>URL:</b>
          {{tag.url}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //Exportamos el componente e indicamos el tipo de dato
  name: "TopTagsComp",
  props: {
    toptags: Array,
  },
  data() {
    return {
      //Devolvemos los datos filtrados si hemos hecho busqueda
      search: "",
    };
  },
  computed: {
    filtered() {
      //Aplicamos filtro mediante la función
      if (!this.search) {
        return this.toptags;
      }
      return this.toptags.filter((tag) =>
        tag.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 4rem;
  text-align: center;
  font-size: 2.5rem;
}

input {
  margin: 2rem 0;
  text-align: center;
  padding: 0.5rem;
}

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
}
li {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  border: solid 0.1rem beige;
  border-radius: 10%;
  margin: 1rem;
  width: 400px;
}
li > p {
  text-align: center;
}

button {
  padding: 0.5rem;
  margin: 0.5rem 3rem;
  font-size: 1rem;
  font-weight: bold;
}
</style>