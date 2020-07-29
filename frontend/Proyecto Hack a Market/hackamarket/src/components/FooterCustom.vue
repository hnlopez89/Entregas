<template>
  <!-- Creamos footer básico -->
  <div>
    <p>Hack a Market (c) 2020 by Hugo Nogueira</p>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style scoped>
div > p {
  background-color: white;
  color: black;
  padding: 1rem 5rem;
  border: solid 0.5rem grey;
  border-radius: 100%;
}
</style>