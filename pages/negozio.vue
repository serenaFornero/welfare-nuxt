<template>
  <v-app>
    <template>
      <v-container fluid>
        <v-row justify="space-around">
          <v-card
            color="transparent"
            flat
          >
            <v-card-title>
              <p class="ml-3 mt-3">
                Shop
              </p>
            </v-card-title>
            <card-credito></card-credito>
            <v-text-field
              label="Search Company Directory"
              dark
              flat
              solo-inverted
              hide-details
              clearable
              clear-icon="mdi-close-circle-outline"
            ></v-text-field>
            <v-card
              class="rounded-xl"
              hover
            >
              <p class="title pt-3 ml-3">Servizi vicino a te</p>
              <v-list>
                <v-list-item v-for="transaction in transactions" :key="transaction.id" class="my-5">
                  <v-icon>mdi-shopping</v-icon>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>{{ transaction.shopName }}</v-list-item-title>
                      <v-list-item-subtitle>{{ transaction.date }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <p class="mt-3"> {{transaction.credit}}</p>
                </v-list-item>
              </v-list>
            </v-card>
          </v-card>
        </v-row>
      </v-container>
    </template>
  </v-app>
</template>


<script>
import CardCredito from "@/components/cardCredito";

export default {
  layout: 'default',
  components: {
    CardCredito,
  },
  data: () => ({
    transactions : [
      {
        id: 0,
        shopName: "Market Pinerolo",
        credit: "20,00",
        date: "12-12-2020"
      },
      {
        id: 1,
        shopName: "Rimborso trasporti",
        credit: "+100,00",
        date: "14-12-2020"
      },
      {
        id: 2,
        shopName: "Alimentari Pinerolo",
        credit: "30,00",
        date: "15-12-2020"
      },
      {
        id: 3,
        shopName: "Parrucchiere Pinerolo",
        credit: "30,00",
        date: "15-12-2020"
      },
      {
        id: 4,
        shopName: "Pasticceria Pinerolo",
        credit: "10,00",
        date: "15-12-2020"
      }

    ]
  }),
}
</script>
