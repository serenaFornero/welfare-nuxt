<template>
  <v-container fluid>
    <v-row>
      <avatar></avatar>
    </v-row>
    <card-credito class="my-3"></card-credito>
    <v-card
      class="rounded-lg d-flex flex-wrap" hover
    >
      <v-card-title>
       I miei ordini
      </v-card-title>
      <v-card-text class="mt-n5">
        <v-list>
          <v-list-item v-for="giftCard in giftCards" :key="giftCard.id">
            <v-icon>mdi-shopping</v-icon>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>{{ giftCard.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ giftCard.description }}</v-list-item-subtitle>
                <v-list-item-action><dialog-utilizza></dialog-utilizza></v-list-item-action>
              </v-list-item-content>
            </v-list-item>
            <p class="mt-3"> {{giftCard.price}}</p>
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
        price: "50,00"
      },
      {
        id:2,
        title: "Gift Decathlon",
        description: "Lorem ipsum dolor sit amet",
        price: "20,00"
      },
      {
        id:3,
        title: "Gift Carrefour",
        description: "Lorem ipsum dolor sit amet",
        price: "15,00"
      },
    ]

  })
}
</script>
