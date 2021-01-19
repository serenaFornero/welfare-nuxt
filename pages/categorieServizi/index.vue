<template>
  <v-container fluid>
    <go-back/>
    <v-row>
      <p class="headline" style="color: #29304d">
        Servizi vicino a te
      </p>
      <v-spacer></v-spacer>
    </v-row>
    <v-card
      class="rounded-lg d-flex flex-wrap" hover
    >
      <CategoriesServices v-for="value in categories" :key="value.id" :category="value"></CategoriesServices>
    </v-card>
    <v-row justify="center" class="d-md-none">
      <v-btn
        color="#2573d5"
        class="white--text"
        fixed
        style="margin-top: 550px;"
        top
        fab
        small
        to="/mappa"
      >
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>

import CategoriesServices from "@/components/CategoriesServices";
import GoBack from "@/components/GoBack";

export default {
  components: {
    GoBack,
      CategoriesServices
  },
  data: () => ({}),
  computed: {
    categories() {
      return this.$store.getters["categories/getCategory"]
    },
  }
}

</script>

