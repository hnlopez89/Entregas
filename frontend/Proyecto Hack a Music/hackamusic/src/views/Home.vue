<template>
  <div class="home">
    <toptags :toptags="toptags" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import toptags from "@/components/TopTagsComp.vue";

export default {
  name: "Home",
  components: {
    toptags
  },
  data() {
    return {
      toptags: []
    };
  },
  created() {
    api.getTopTags().then(response => (this.toptags = response.data.tags.tag));
  }
};
</script>

<style scoped>
</style>