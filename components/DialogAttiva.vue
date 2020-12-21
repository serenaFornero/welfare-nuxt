<template>
  <div>
    <v-row
      justify="center"
    >
      <v-btn
        color="#2573d5"
        class="text-capitalize rounded-lg white--text"
        @click="dialog3 = true"
      >
        Attiva
      </v-btn>

      <v-dialog
        v-model="dialog3"
        max-width="500px"
      >
        <v-card>
          <v-row justify="end" class="mr-2">
          <v-card-actions>
            <v-icon
              @click="dialog3 = false"
            >
              mdi-close
            </v-icon>
          </v-card-actions>
          </v-row>
          <v-card-text class="font-weight-bold text-center title">Codice: {{orders.code}} </v-card-text>
          <v-card-subtitle class=" text-center">Tempo rimasto:  {{ timerCount }} </v-card-subtitle>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  props:{
    orders:{
      type: Object
    },},

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
  }
}
</script>
