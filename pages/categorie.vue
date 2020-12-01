<template>
  <v-container fluid>
        <p class="headline" style="color: #29304d">
         Categorie
        </p>
    <search-field></search-field>
    <v-card
      class="rounded-lg" elevation="5"
    >
      <v-row>
        <v-col class="d-flex flex-wrap justify-center" v-for="values in categories" :key="values.id">
          <div class="d-flex flex-column">
            <v-card
              class="my-5 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to="/categorieServizi"><v-img :src="values.src"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold" style="color: #29304d">{{values.name}}</p>
          </div>
        </v-col>
      </v-row>
        </v-card>
  </v-container>
</template>
<script>
import SearchField from "@/components/searchField";


export default {
  components: {
    SearchField
  },
  data: () => ({}),
  computed: {
    categories() {
      return this.$store.getters["categories/getCategory"]
    }
  }
}

</script>

