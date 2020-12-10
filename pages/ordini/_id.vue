<template>
  <v-container>
    <v-row class="d-flex">
      <div>
        <p class="headline" style="color: #29304d">
{{}}
        </p>
        <v-card
          class="rounded-lg d-flex flex-wrap flex-column justify-center"
          elevation="5"
        >
          <v-list
            two-line
            subheader
          >
            <v-alert border="top"
                     colored-border
                     type="info"
                     elevation="2"
                     class="mx-3 mt-5 subtitle-2 grey--text text--darken-1"
                     max-width="500"

            >
              I voucher potranno essere attivati cliccando sul pulsante "attiva". I voucher, dopo essere stati attivati,
              dovranno essere utilizzati entro 30 minuti.
            </v-alert>
            <v-list-item v-for="item in ordersById" :key="item.id">
              <v-list-item-content>
                <v-img src="" class="my-5" contain width="200" height="150">{{}}</v-img>
                <v-list-item-subtitle class="text-center">Buono Regalo valido per l’acquisto di prodotti <br>
                  disponibili su <strong>{{getGiftCardItem(item.categoryId).webSite}}</strong> del vaore di <strong>{{item.value}} €</strong>
                </v-list-item-subtitle>
                <v-row justify="center" class="mt-3">
                  <dialog-attiva v-for="item in ordersById" :key="item.id" :orders="item" ></dialog-attiva>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import dialogAttiva from "@/components/dialogAttiva";

export default {
  components: {
    dialogAttiva

  },
  data() {
    return {
      dialog: false,
    }
  },

  computed: {
    ordersById() {
      console.log(this.$store.getters["orders/getOrdersById"](parseInt(this.$route.params.id)))
      return this.$store.getters["orders/getOrdersById"](parseInt(this.$route.params.id))
    },

    giftCards(){
      return this.$store.getters['giftCards/getCategory']
    }

  },
  methods: {
    getGiftCardItem(categoryId){
      for (let i = 0; i < this.giftCards.length; i++){
        if (categoryId === this.giftCards[i].id){
          return this.giftCards[i]
        }
      }
    },

  }
}
</script>
