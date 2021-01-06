<template>
  <v-dialog
    persistent
    v-model="dialog"
    max-width="500px"
  >
    <v-card class="rounded-lg">
      <v-card-title class="headline" style="color: #29304d">
        Gift Card {{card.name}}
      </v-card-title>
      <v-card-text>
        Cliccando su <strong>Procedi</strong> l'acquisto del buono del valore di <strong>
        {{ card.value }}€ </strong> verrà confermato.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
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
          @click="addOrder"
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
      card: {
        name: null
      },
      dialog: false,
      order:{
        value: ""
      }
    }
  },
  computed:{},
  methods: {
    open(giftCard) {
      this.card = giftCard
      this.dialog = true
    },
    close() {
      this.dialog = false
      this.card = {
        name: null,
      }
    },
    addOrder: function () {
      this.$store.commit('orders/addOrder', {...this.order})
      this.order = {
        value: ""
      }
    }

  }

}


</script>


