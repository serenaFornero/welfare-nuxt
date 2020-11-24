<template>
  <div>
    <v-row
      justify="center"
    >
      <v-btn
        color="#2573d5"
        class="text-capitalize rounded-lg"
        dark
        @click="dialog3 = true"
      >
        Attiva
      </v-btn>
      <v-dialog
        v-model="dialog3"
        max-width="500px"
      >
        <v-card>
          <v-card-title style="color: #29304d">
            <span>Gift Card</span>
          </v-card-title>
          <v-card-text class="font-weight-bold text-center title">Codice: GJFE44K </v-card-text>
          <v-card-subtitle class=" text-center">Tempo rimasto:  {{ timerCount }} </v-card-subtitle>
          <v-card-actions>
            <v-btn
              outlined
              class="text-capitalize rounded-lg"
              color="#2573d5"
              @click="dialog3 = false"
            >
              Chiudi
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timerCount: 30.00,
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me 2',
        },
      ],
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
          }, 1000);
        }

      },
      immediate: true // This ensures the watcher is triggered upon creation
    }

  }
}
</script>
