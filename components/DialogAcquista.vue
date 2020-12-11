<template>
  <v-dialog
    persistent
    v-model="dialog"
    max-width="500px"
  >
    <v-card   class="rounded-lg">
      <v-card-title class="headline" style="color: #29304d">
        Gift Card {{card.name}}
        <v-spacer></v-spacer>
        <v-icon
          class="mt-n2 mr-n2"
          @click="close"
        >
          mdi-close
        </v-icon>
      <!--  <v-btn icon outlined color="black"  absolute top right small @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>-->
      </v-card-title>
      <v-card-text>
        Cliccando su <strong>Procedi</strong> l'acquisto del buono del valore di <strong>
        {{ card.value }}€ </strong> verrà confermato.
      </v-card-text>
      <v-card-actions>

        <v-spacer></v-spacer>
        <v-btn
          color="#2573d5"
          class="text-capitalize rounded-lg"
          dark
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


