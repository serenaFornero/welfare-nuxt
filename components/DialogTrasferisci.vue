<template>
  <v-dialog
    persistent
    v-model="dialog"
    max-width="500px"
  >
    <v-card class="rounded-lg" elevation="5" >
        <v-card-title class="justify-center" style="color: #232649">{{item.name}}</v-card-title>
        <v-card-subtitle class="text-center"> {{ item.address }} </v-card-subtitle>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="6"
        >
          <v-text-field
            v-model="creditAvailable"
            class="mx-3 rounded-lg my-3"
            label="Solo"
            placeholder="0,00"
            type="number"
            solo
          >

          </v-text-field>
        </v-col>
      </v-row>
      <v-card-actions class="mx-3 py-3">
        <v-btn
          class="text-capitalize"
          color="#2573d5"
          text
          @click="dialog = false"
        >
          Indietro
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="#2573d5"
          class="text-capitalize white--text rounded-lg"
          to="/trasferimentoEffettuato"
          @click="creditTransfer"
        >
          Procedi
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogTrasferisci",
  data() {
    return {
      item: {
        name: null
      },
      dialog: false,
      creditAvailable: "",
    }
  },
  computed:{
    credit(){
      return this.$store.getters['credit/getCredit']
    },
    cr(){
      return this.$store.getters['credit/getAvailab']
    },
  },
  methods: {
    open(service) {
      this.item = service
      this.dialog = true
      console.log()
    },
    close() {
      this.dialog = false
      this.item = {
        name: null,
      }
    },
    creditTransfer: function (){
      this.$store.commit('credit/decrementCredit', this.creditAvailable)
    },
  }

}


</script>


