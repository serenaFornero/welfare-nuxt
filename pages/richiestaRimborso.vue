<template>
  <v-container fluid>
    <v-btn
      fab
      x-small
      class="mt-n10"
      to="/portafoglio"
      color="#29304d"
      outlined
      dark
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card class="rounded-lg" elevation="5">
      <v-card-title style="color: #232649">
        Richiedi rimborso
      </v-card-title>
     <stepper-rimborso></stepper-rimborso>
    </v-card>
  </v-container>
</template>

<script>
import StepperRimborso from "@/components/StepperRimborso";
export default {
  components: {StepperRimborso},
  layouts: 'default',
  data() {
    return {}
  },
  computed:{},
  methods: {},
}

</script>
