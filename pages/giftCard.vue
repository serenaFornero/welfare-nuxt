<template>
  <v-container fluid>
    <v-row class="d-flex">
      <p class="headline" style="color: #232649">
        Buoni Acquisto
      </p>
    </v-row>
    <v-card
      class="rounded-lg d-flex flex-wrap flex-column justify-center"
      elevation="5"
    >
      <v-card-text>
        <v-list v-for="values in giftCards"
                :key="values.id">
          <v-list
            class="text-center"
            v-for="child in values.type"
            :key="child.id">

            <v-list-item-content>
              <v-list-item-title
                class="font-weight-bold"
                style="color: #29304d"
              >
                Gift Card {{child.brand}}
              </v-list-item-title>

              <v-list-item
                v-for="item in child.variants"
                           :key="item.id"
              >
                <v-list-item-avatar class="rounded-lg">
                  <v-img :src="item.src"></v-img>
                </v-list-item-avatar>
                <v-btn
                  color="#2573d5"
                  dark
                  class="text-capitalize rounded-lg d-flex"
                  to="/trasferimentoEffettuato"
                >
                  Acquista {{item.value}}€
                </v-btn>
              </v-list-item>
            </v-list-item-content>
          </v-list>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,

    }
  },
  computed: {
    giftCards() {
      return this.$store.getters["giftCards/getGiftCard"]
    }
  }

}
</script>
