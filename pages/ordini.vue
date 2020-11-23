<template>
  <v-container fluid>
    <v-row class="d-flex">
      <p class="headline" style="color: #29304d">
        Ordini
      </p>

    </v-row>
    <v-card
      class="rounded-lg d-flex flex-wrap" hover
    >
      <v-card-title style="color: #29304d">
       I miei ordini
      </v-card-title>
      <v-card-text class="mt-n5">
        <v-list>
          <v-list-item v-for="giftCard in giftCards" :key="giftCard.id">
            <v-icon color="#29304d">mdi-shopping</v-icon>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>{{ giftCard.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ giftCard.description }}</v-list-item-subtitle>
                <v-list-item-action><dialog-utilizza></dialog-utilizza></v-list-item-action>
              </v-list-item-content>
            </v-list-item>
            <p class="mt-3 font-weight-bold" :style="getColor(giftCard.price)"> {{giftCard.price}}€</p>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script>
import CardCredito from "@/components/cardCredito";
import dialogUtilizza from "@/components/dialogUtilizza";
import Avatar from "@/components/avatar";
export default {
  layout: 'default',
  components: {
    Avatar,
    CardCredito,
    dialogUtilizza
  },
  data: () =>  ({
    giftCards: [
      {
        id:1,
        title: "Gift Card Amazon",
        description: "Lorem ipsum dolor sit amet"
        ,
        price: 50
      },
      {
        id:2,
        title: "Gift Decathlon",
        description: "Lorem ipsum dolor sit amet",
        price: 20
      },
      {
        id:3,
        title: "Gift Carrefour",
        description: "Lorem ipsum dolor sit amet",
        price: 15
      },
    ]

  }),
  methods:{
    getColor(price){
      if (price < 0){
        return "color: #f76c6c"
      } else if (price > 0){
        return "color: #2573d5"
      }

    }
  }
}
</script>
