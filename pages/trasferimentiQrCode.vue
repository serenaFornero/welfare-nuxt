<template>
  <v-container fluid>
    <go-back/>
  <v-card class="d-flex flex-column rounded-lg">
    <v-row justify="center" class="text-center">
      <v-card-title  style="color: #232649">
        Scannerizza il QR-Code per <br> procedere al pagamento
      </v-card-title>
    </v-row>
    <v-card color="grey" width="200" height="200" class="mx-auto my-10">
    </v-card>
  </v-card>
  </v-container>
</template>

<script>
import GoBack from "@/components/GoBack";
export default {
  components: {GoBack}
}
</script>
