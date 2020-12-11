<template>
  <v-container fluid>
    <v-row class="d-flex">
      <p class="headline" style="color: #232649">
        Buoni Acquisto
      </p>
    </v-row>
    <v-card
      v-for="card in giftCards"
      :key="card.id"
      class="rounded-lg my-2"
      elevation="5"

    >
      <v-row class="d-flex" >
        <v-col cols="3" >
          <v-avatar tile class="rounded-lg mx-2 mt-5">
            <v-img
              contain
              :src="getImageFromCategory(card.categoryId).src"
            >
            </v-img>
          </v-avatar>
        </v-col>
        <v-col cols="9">
          <v-card-title  style="color: #232649">
            Gift Card {{ getImageFromCategory(card.categoryId).brand }}
          </v-card-title>
          <v-card-subtitle>
            {{ getImageFromCategory(card.categoryId).description }}
          </v-card-subtitle>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-card-text class="text-center mt-n7 font-weight-bold" :style="getColor(card.value)">
          {{card.value}}€
        </v-card-text>
        <v-btn
          @click="$refs.dialogAcquista.open(card)"
          color="#2573d5"
          dark
          class="text-capitalize rounded-lg mb-3"

        >
          Acquista
        </v-btn>
      </v-row>
    </v-card>
    <dialog-acquista
      ref="dialogAcquista">
    </dialog-acquista>
  </v-container>
</template>

<script>

import DialogAcquista from "@/components/DialogAcquista";

export default {
  components: {DialogAcquista},
  props: {
    category: {
      type: Object
    }
  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      dialog3: false,
    }
  },
  computed: {
    giftCards() {
      return this.$store.getters["giftCards/getCardsById"](parseInt(this.$route.params.id))
    },
    categories() {
      return this.$store.getters["giftCards/getCategory"]
    }
  },
  methods: {
    getGiftCardItem(categoryId) {
      for (let i = 0; i < this.categories.length; i++) {
        if (categoryId === this.categories[i].id) {
          return this.categories[i]
        }
      }
    },
    getImageFromCategory(categoryId)  {
      const cat = this.$store.getters['giftCards/getCategoryById'](categoryId)[0]
      console.log(cat)
      return cat
    },
    getColor(value) {
      if (value < 0) {
        return "color: #f76c6c"
      } else if (value > 0) {
        return "color: #2573d5"
      }
    },

  },
}
</script>
