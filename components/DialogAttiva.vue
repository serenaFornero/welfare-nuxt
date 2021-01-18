<template>
  <div >
    <v-row justify="center">
      <v-btn
        color="#2573d5"
        class="text-capitalize rounded-lg white--text"
        @click="dialog3 = true"
      >
        Attiva
      </v-btn>
    </v-row>
      <v-dialog
        v-model="dialog3"
        max-width="500px"
      >
        <v-card class="rounded-lg">
          <v-card-text class="font-weight-bold text-center title pt-5">Codice: {{orders.code}} </v-card-text>
          <v-card-subtitle class=" text-center">Tempo rimasto:  {{ timerCount }} </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="text-capitalize"
              color="#2573d5"
              text
              @click="removeOrder"
          >
            Chiudi
          </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

  </div>
</template>

<script>
export default {
  props:{
    orders:{
      type: Object
    },
  },

  data () {
    return {
      timerCount: 30,
      dialog3: false,
      absolute: true,
      overlay: false,
    }
  },
  watch: {
    timerCount: {
      handler(value) {

        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000 );
        }

      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
  },
  computed: {
    orderList(){
      return this.$store.getters["orders/getOrderList"]
    }
  },
  methods:{
    removeOrder: function () {
      this.$store.commit("orders/removeOrder");
    },
  }
}
</script>
