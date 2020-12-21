<template>
  <v-container fluid>
    <v-btn
      fab
      x-small
      class="mt-n10"
      to="/profilo"
      color="#29304d"
      outlined
      dark
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card
      class="rounded-lg flex-column justify-center" elevation="5"
    >
      <v-card-title style="color: #232649">
        Aggiungi familiare
      </v-card-title>
      <v-alert
        dismissible
        close-text="Close Alert"
        v-model="alert"
        border="left"
        color="info"
        colored-border
        elevation="2"
        class="mx-3 subtitle-2 grey--text text--darken-1"
        max-width="500"

      >
        In base all’art. 12 del Tuir sono ammessi i familiari anche non a carico fiscalmente e non necessariamente
        conviventi o parte del nucleo familiare. Si tratta in particolare del coniuge, dei figli legittimi, naturali o
        adottivi,
        dei genitori, fratelli o sorelle, dei suoceri, generi e nuore.
      </v-alert>
      <div class="text-right mt-n13 mx-2">
        <v-btn
          color="info"
          icon
          v-if="!alert"
          @click="alert = true"
        >
          <v-icon>mdi-information</v-icon>
        </v-btn>
      </div>
        <v-card-text>
         <relatives-form></relatives-form>
        </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import RelativesForm from "@/components/RelativesForm";
export default {
  components: {
    RelativesForm
  },

  data: () => ({
    alert: false,
  }),
  methods: {}
}
</script>
