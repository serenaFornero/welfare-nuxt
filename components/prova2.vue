<template>
  <v-row>
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex flex-column text-center my-5">
        <v-img height="50" src="">{{}}</v-img>
        <!--   <p>{{ getGiftCardItem(giftCard[0].categoryId).description }}</p>-->
        <p>Valore: {{ giftCard.value }} €</p>
        <p>Nome: {{giftCard.name}}</p>
        <v-btn
          color="#2573d5"
          class="text-capitalize rounded-lg"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Acquista
        </v-btn>
      </div>

    </template>
    <v-card>
      <div>
        <v-card-title class="headline" style="color: #29304d">
          Gift Card {{giftCard.name}}
        </v-card-title>
        <v-card-text>
          Cliccando su <strong>Procedi</strong> l'acquisto del buono acquisto <strong>
          {{giftCard.name}} </strong> verrà confermato.
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="#2573d5"
            class="text-capitalize rounded-lg"
            text
            to="/negozio"
          >
            Indietro
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="#2573d5"
            class="text-capitalize rounded-lg"
            dark
            to="/trasferimentoEffettuato"
          >
            Procedi
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data:() => ({
    dialog: false,

  }),
  props: {
    giftCard:{
      type: Object
    }
  },
  computed:{
    categories() {
      return this.$store.getters["giftCards/getCategory"]
    },

  },
  methods:{
    getGiftCardItem(categoryId) {
      for (let i = 0; i < this.categories.length; i++) {
        if (categoryId === this.categories[i].id) {
          return this.categories[i]
        }
      }
    },
  }
}
</script>
