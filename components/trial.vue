<template>
  <v-container fluid>
    <v-row class="d-flex">
      <p class="headline ml-4" style="color: #29304d;">
        Negozio
      </p>
      <v-spacer></v-spacer>
      <v-btn
        class="mt-n1"
        color="#2573d5"
        fab
        dark
        small
        to="/categorieServizi"
      >
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </v-row>
    <search-field></search-field>
    <div >
      <v-card
        class="rounded-lg"
        elevation="5"
      >
        <v-tabs
          color="#29304d"
          centered
          grow
          slider-color="#29304d"
        >
          <v-tab class="text-capitalize">Servizi vicino a te</v-tab>
          <v-tab class="text-capitalize">Buoni acquisto</v-tab>
          <v-tab-item>
            <v-row justify="center" class="d-md-none">
              <v-btn
                color="#2573d5"
                dark
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
            <lista-servizi></lista-servizi>
          </v-tab-item>
          <v-tab-item>
            <lista-gift-cards v-for="item in categories" :key="item.id" :category="item"></lista-gift-cards>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </div>
  </v-container>
</template>


<script>

import SearchField from "@/components/SearchField";
import ListaServizi from "@/components/ListaServizi";
import ListaGiftCards from "@/components/ListaGiftCards";

export default {
  layout: 'default',
  components: {
    ListaGiftCards,
    ListaServizi,
    SearchField,

  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    categories() {
      return this.$store.getters["giftCards/getCategory"]
    },
    giftCards() {
      return this.$store.getters["giftCards/getGiftCard"]
    }
  },


}
</script>
