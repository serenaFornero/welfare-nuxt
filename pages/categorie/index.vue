<template>
  <v-container fluid>
    <p class="headline" style="color: #29304d">
      Categorie
    </p>
    <search-field></search-field>
    <v-card
      class="rounded-lg d-flex flex-wrap" elevation="5"
    >
      <categorie v-for="values in categories" :key="values.id" :category="values"></categorie>
    </v-card>
  </v-container>
</template>
<script>
import SearchField from "@/components/searchField";
import categorie from "@/components/categorie";

export default {
  components: {
    SearchField,
    categorie
  },
  data: () => ({}),
  computed: {
    categories() {
      return this.$store.getters["categories/getCategory"]
    },
    services(){
      return this.$store.getters["services/getServices"]
    }

  }
}

</script>

