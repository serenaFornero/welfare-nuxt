<template>
  <v-card class="mt-2">
    <v-row>
      <v-col class="d-flex flex-wrap justify-center">
        <div class="d-flex flex-column" v-for="cardAssistenza in cardsAssistenza" :key="cardAssistenza.id">
          <v-card
            class="my-5 mx-5 pa-5"
            height="100"
            width="100"
            outlined
            rounded
            elevation="2"
            hover
          >
            <v-img
              contain
              height="60"
              width="60" :src="cardAssistenza.src"></v-img>

            <dialog-assistenza></dialog-assistenza>
          </v-card>
          <p class="text-center font-weight-bold " style="color: #29304d">{{cardAssistenza.description}}</p>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import dialogAssistenza from "@/components/DialogAssistenza";

export default {
  components: {
    dialogAssistenza
  },

  data: () => ({
    trans:{
      shop: "Market"
    },
    cardsAssistenza: [
      {
        id:1,
        src: "log-in.png",
        description: "Login"
      },
      {
        id:2,
        src: "profile.png",
        description: "Profilo personale"
      },
      {
        id:3,
        src: "wallet.png",
        description: "Trasferimenti"
      },
      {
        id:4,
        src: "shop.png",
        description: "Servizi"
      },
      {
        id:5,
        src: "credit-card.png",
        description: "Crediti"
      },
      {
        id:6,
        src: "location-pin.png",
        description: "Localizzazione"
      },

    ]
  }),

}
</script>

