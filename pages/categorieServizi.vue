<template>
  <v-container fluid>
    <v-row class="d-flex">
      <p class="headline" style="color: #29304d">
        Alimentari
      </p>
    </v-row>
    <search-field></search-field>

    <v-card
      class="rounded-lg"
      elevation="5"
    >

      <v-list>
        <v-list-item v-for="values in services" :key="values.id">
          <v-list-item-avatar>
            <v-icon :color="getIcon(values.categoryId).color">{{ getIcon(values.categoryId).icon }}</v-icon>
          </v-list-item-avatar>
          <nuxt-link to="/trasferimentoEffettuato" style="text-decoration: none">
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold" style="color: #29304d">{{ values.name }}</v-list-item-title>
              <v-list-item-action-text class="font-weight-light">{{ values.address }}</v-list-item-action-text>
              <v-list-item-subtitle class="grey--text text--darken-1">{{ values.description }}</v-list-item-subtitle>
              <v-list-item-action-text class="grey--text text--darken-1 mt-2">{{ values.rating }}/5
              </v-list-item-action-text>
              <v-list-item-content>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>


<script>
import SearchField from "@/components/searchField";
import dialogOrdini from "@/components/dialogOrdini";

export default {
  layout: 'default',
  components: {
    SearchField,
    dialogOrdini
  },
  data() {
    return {}
  },
  computed: {
    services() {
      return this.$store.getters["services/getServices"]
    },
    categories() {
      return this.$store.getters["categories/getCategory"]
    },
  },
  methods: {
    getIcon(categoryId) {
      for (let i = 0; i < this.categories.length; i++) {
        if (categoryId === this.categories[i].id) {
          return this.categories[i]
        }
      }
    },
  },
}


</script>
