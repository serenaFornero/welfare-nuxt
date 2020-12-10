<template>
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
        <lista-gift-cards></lista-gift-cards>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>


import ListaServizi from "@/components/listaServizi";
import ListaGiftCards from "@/components/listaGiftCards";

export default {
  layout: 'default',
  components: {
    ListaGiftCards,
    ListaServizi

  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    categories() {
      return this.$store.getters["giftCards/getCategory"]
    }
  },


}
</script>
