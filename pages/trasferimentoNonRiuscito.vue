<template>
  <v-container fluid>
    <go-back/>
    <v-row v-for="values in users" :key="values.id">
      <avatar class="d-flex" :user="values"></avatar>
    </v-row>
    <card-credito class="my-3"></card-credito>
    <v-card
      class="rounded-lg" elevation="5"
    >
      <v-row>
        <v-img src="feedback.png" class="mt-5 mb-3" height="80" width="100" contain></v-img>
      </v-row>
      <v-row  justify="center">
        <v-card-title>
          Trasferimento non riuscito!
        </v-card-title>
      </v-row>
        <v-card-subtitle class="text-center mt-3">
          Assicurati di:
         <v-list>
           <v-list-item-subtitle>1. Avere la connessione a internet</v-list-item-subtitle>
           <v-list-item-subtitle>2. Avere inserito il destinatario correttamente</v-list-item-subtitle>
           <v-list-item-subtitle>3. Avere credito sufficiente</v-list-item-subtitle>
         </v-list>
        </v-card-subtitle>
      <v-row justify="center">
        <v-card-actions>
          <v-btn
            dark
            width="100"
            color="#f76c6c"
            class="text-capitalize mb-5 rounded-lg"
          >
           Ritenta
          </v-btn>
        </v-card-actions>
      </v-row>
    </v-card>
  </v-container>
</template>


<script>
import CardCredito from "@/components/CardCredito";
import Avatar from "@/components/Avatar";
import GoBack from "@/components/GoBack";
export default {
  layout: 'default',
  components: {
    GoBack,
    Avatar,
    CardCredito,
  },
  data () {
    return {

    }
  },
  computed:{
    users() {
      return this.$store.getters["users/getUser"]
    },
  }
}
</script>
