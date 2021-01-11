<template>
  <v-dialog
    persistent
    v-model="dialog"
    max-width="500px"
  >
    <v-card class="rounded-lg" elevation="5" >
      <div>
        <v-card-title class="justify-center" style="color: #232649">{{item.name}}</v-card-title>
        <v-card-subtitle class="text-center"> {{ item.address }} </v-card-subtitle>
      </div>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
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
          class="text-capitalize"
          color="#2573d5"
          text
          @click="dialog = false"
        >
          Indietro
        </v-btn>
        <v-btn
          color="#2573d5"
          class="text-capitalize white--text rounded-lg"
          to="/trasferimentoEffettuato"
        >
          Procedi
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogAcquista",
  data() {
    return {
      item: {
        name: null
      },
      dialog: false,
    }
  },
  computed:{},
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
  }

}


</script>


