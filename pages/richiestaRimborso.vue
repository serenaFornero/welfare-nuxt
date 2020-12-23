<template>
  <v-container fluid>
   <go-back/>
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
import GoBack from "@/components/GoBack";
export default {
  components: {GoBack, StepperRimborso},
  layouts: 'default',
  data() {
    return {}
  },
  computed:{},
  methods: {},
}

</script>
