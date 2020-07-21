<template>
  <div>
    <input type="search" v-model="search" placeholder="Find your tag" />
    <ul v-for="tag in filtered" :key="tag.id">
      <li>Tag: {{tag.name}}</li>
      <li>Reach: {{tag.reach}}</li>
      <li>Taggings: {{tag.taggings}}</li>
      <li>URL: {{tag.url}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopTagsComp",
  props: {
    toptags: Array
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filtered() {
      if (!this.search) {
        return this.toptags;
      }
      return this.toptags.filter(tag =>
        tag.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
</style>