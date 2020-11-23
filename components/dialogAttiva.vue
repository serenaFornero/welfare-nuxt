<template>
  <div>
    <v-row
      justify="center"
    >
      <v-btn
        color="#2573d5"
        class="text-capitalize"
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
          <v-card-title>
            <span>Gift Card</span>
          </v-card-title>
          <v-card-subtitle class="font-weight-bold text-center my-3">Codice: GJFE44K</v-card-subtitle>
          <v-card-actions>
            <v-btn
              outlined
              class="text-capitalize"
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
}
</script>
