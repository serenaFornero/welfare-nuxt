<template>
  <v-container fluid>
    <go-back/>
    <p class="headline" style="color: #29304d">
      Assistenza
    </p>
    <v-card class="rounded-lg d-flex flex-wrap" hover>
      <CategoriesSupport v-for="value in categories" :key="value.id" :category="value"></CategoriesSupport>
    </v-card>
  </v-container>
</template>
<script>

import CategoriesSupport from "@/components/CategoriesSupport"
import GoBack from "@/components/GoBack";

export default {
  components: {
    GoBack,
      CategoriesSupport
  },
  data: () => ({}),
  computed: {
    categories() {
      return this.$store.getters["faq/getCategory"]
    },
  }
}

</script>
