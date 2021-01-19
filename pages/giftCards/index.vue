<template>
  <v-container fluid>
    <v-row class="d-flex">
      <p class="headline ml-4" style="color: #29304d;">
        Buoni Acquisto
      </p>
    </v-row>
    <search-field></search-field>
    <div >
      <v-card
        class="rounded-lg"
        elevation="5"
      >
            <giftCardsList v-for="item in categories" :key="item.id" :category="item"></giftCardsList>
      </v-card>
    </div>
  </v-container>
</template>


<script>

import SearchField from "@/components/SearchField";
import giftCardsList from "@/components/GiftCardsList";

export default {
  layout: 'default',
  components: {
      giftCardsList,
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
