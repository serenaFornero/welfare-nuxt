<template>
  <v-container fluid>
    <p class="headline" style="color: #29304d">
      Categorie
    </p>
    <v-card
      class="rounded-lg d-flex flex-wrap" elevation="5"
    >
      <categorie v-for="value in categories" :key="value.id" :category="value"></categorie>
    </v-card>
  </v-container>
</template>
<script>

import categorie from "@/components/categorie";

export default {
  components: {

    categorie
  },
  data: () => ({}),
  computed: {
    categories() {
      return this.$store.getters["categories/getCategory"]
    },
  }
}

</script>

