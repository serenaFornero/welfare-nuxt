<template>
  <v-container fluid>
    <p class="headline" style="color: #29304d">
      Assistenza
    </p>
    <v-card
      class="rounded-lg d-flex flex-wrap" elevation="5"
    >
      <categorie-assistenza v-for="value in categories" :key="value.id" :category="value"></categorie-assistenza>

    </v-card>
  </v-container>
</template>
<script>

import CategorieAssistenza from "@/components/CategorieAssistenza"

export default {
  components: {
   CategorieAssistenza
  },
  data: () => ({}),
  computed: {
    categories() {
      return this.$store.getters["faq/getCategory"]
    },
  }
}

</script>
