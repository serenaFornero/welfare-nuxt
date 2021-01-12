<template>
  <v-container fluid>
    <go-back/>
    <p class="headline" style="color: #29304d">
      Servizi vicino a te
    </p>
    <v-card
      class="rounded-lg d-flex flex-wrap" elevation="5"
    >
      <categorie v-for="value in categories" :key="value.id" :category="value"></categorie>
    </v-card>
  </v-container>
</template>
<script>

import categorie from "@/components/Categorie";
import GoBack from "@/components/GoBack";

export default {
  components: {
    GoBack,
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

