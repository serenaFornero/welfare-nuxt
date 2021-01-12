<template>
  <v-container fluid>
    <go-back/>
    <v-card class="rounded-lg" elevation="5" >
      <div>
        <v-card-title class="justify-center" style="color: #232649">shop name </v-card-title>
        <v-card-subtitle class="text-center"> shop address </v-card-subtitle>
      </div>
      <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          v-model="creditAvailable"
          class="mx-2 rounded-lg my-5"
          label="Solo"
          placeholder="Inserisci importo"
          type="number"
          solo
        ></v-text-field>
      </v-col>
      </v-row>
      <v-card-actions class="justify-center">
        <v-btn
          color="#2573d5"
          class="text-capitalize my-5 rounded-lg"
          dark
          large
          to="/trasferimentoEffettuato"
          @click="creditTransfer"
        >Invia</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>

import GoBack from "@/components/GoBack";
export default {
  layout: 'default',
  components: {
    GoBack

  },
  data () {
    return {
      creditAvailable: "",
    }

  },
  computed: {
    credit(){
      return this.$store.getters['credit/getCredit']
    },
    cr(){
      return this.$store.getters['credit/getAvailab']
    },
  },
  methods:{
    creditTransfer: function (){
      this.$store.commit('credit/decrementCredit', this.creditAvailable)
    },

  },
}
</script>
<!--
<template>
  <v-container fluid>
    <go-back/>
    <v-card class="rounded-lg" elevation="5" >
      <div v-for="item in services" :key="item.id">
        <v-btn
          @click="$refs.dialog.open(item)"
          color="#2573d5"
          class="text-capitalize rounded-lg mb-3 white--text"
        >
          Trasferisci
        </v-btn>
      </div>
      <dialog-trasferisci ref="dialog"></dialog-trasferisci>
    </v-card>
  </v-container>
</template>

<script>
import DialogTrasferisci from "@/components/DialogTrasferisci";
import GoBack from "@/components/GoBack";
export default {
  components: {DialogTrasferisci, GoBack},
  computed: {
    services(){
      return this.$store.getters["services/getServiceById"](parseInt(this.$route.params.id))
    }
  },

}
</script>-->


