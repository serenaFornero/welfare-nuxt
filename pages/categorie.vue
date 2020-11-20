<template>
  <v-container fluid>
        <p class="headline">
         Categorie
        </p>
    <search-field></search-field>
    <v-card
      class="rounded-lg"
    >
      <v-row>
        <v-col class="d-flex flex-wrap justify-center">
          <div class="d-flex flex-column">
            <v-card
              class="my-5 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >

              <nuxt-link to="/categorieServizi"><v-img src="food.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Alimentari</p>
          </div>
          <div class="d-flex flex-column">
            <v-card
              class="my-5 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to=""><v-img src="heart-beat.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Salute</p>
          </div>
          <div class="d-flex flex-column">
            <v-card
              class="my-5 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to=""><v-img src="wine.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Ristorazione</p>
          </div>
          <div class="d-flex flex-column">
            <v-card
              class="my-5 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to=""><v-img src="wine.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Fitness e <br> benessere</p>
          </div>
          <div class="d-flex flex-column">
            <v-card
              class="my-5 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to=""><v-img src="hand.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Corsi</p>
          </div>
          <div class="d-flex flex-column">
            <v-card
              class="my-5 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to=""><v-img src="plane.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Viaggi e <br> vacanze</p>
          </div>
          <div class="d-flex flex-column">
            <v-card
              class="my-5 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to=""><v-img src="ticket.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Cultura e <br>intrattenimento</p>

          </div>
          <div class="d-flex flex-column">
            <v-card
              class="my-5 mx-5 pa-5"
              height="100"
              width="100"
              outlined
              rounded
              elevation="2"
              hover
            >
              <nuxt-link to=""><v-img src="online-shop.png"></v-img></nuxt-link>
            </v-card>
            <p class="text-center font-weight-bold">Shopping</p>
          </div>
        </v-col>
      </v-row>
        </v-card>
  </v-container>
</template>
<script>
import SearchField from "@/components/searchField";


export default {
  components: {
    SearchField
  },
  data: () => ({
    categories: [
      {
        id: 1,
        nome: "Alimentari"
      },
      {
        id: 2,
        nome: "Fitness e Benessere"
      },
      {
        id: 3,
        nome: "Salute"
      },
      {
        id: 4,
        nome: "Ristorazione",
      },
      {
        id: 5,
        nome: "Viaggi e Vacanze",
      },
      {
        id: 6,
        nome: "Shopping",
      },
      {
        id: 7,
        nome: "Cultura e intrattenimento",
      },
      {
        id: 8,
        nome: "Corsi",
      },




    ]
  }),
}

</script>

