<template>
  <v-container fluid>
    <v-row class="d-flex">
      <p class="headline" style="color: #232649">
        Buoni Acquisto
      </p>
    </v-row>
    <v-card
      class="rounded-lg d-flex flex-wrap justify-center"
      elevation="5"
    >
     <v-card-title>
       Gift Card {{getGiftCardItem(giftCards[0].categoryId).brand}}
     </v-card-title>
      <v-card-actions  v-for="item in giftCards" :key="item.id" class="mt-10">
            <v-dialog
              v-model="dialog"
              persistent
              max-width="290"
            >



              <template v-slot:activator="{ on, attrs }">
                <div class="d-flex flex-column text-center my-5" >
                  <v-img height="50" src="">{{}}</v-img>
                  <v-btn
                    color="#2573d5"
                    class="text-capitalize rounded-lg"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Acquista {{item.value}} €
                  </v-btn>
                </div>

              </template>
              <v-card>
                <v-card-title class="headline" style="color: #29304d">
                  Gift Card {{getGiftCardItem(giftCards[0].categoryId).brand}}
                </v-card-title>
                <v-card-text>
                  Cliccando su <strong>Procedi</strong> l'acquisto del buono del valore di {{item.value}}€ verrà confermato.
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
                    @click="dialog = false"
                    to="/trasferimentoEffettuato"
                  >
                    Procedi
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
      </v-card-actions>
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
    giftCards(){
      console.log(this.$store.getters["giftCards/getCardById"](parseInt(this.$route.params.id)))
      return this.$store.getters["giftCards/getCardById"](parseInt(this.$route.params.id))
    },
    categories(){
      return this.$store.getters["giftCards/getCategory"]
    }
  },
  methods: {
    getGiftCardItem(categoryId){
      for(let i = 0; i < this.categories.length; i++){
        if(categoryId === this.categories[i].id){
          return this.categories[i]
        }
      }
    }
  },
  mounted() {
    console.log(this.$route.params.id)
  }

}
</script>
