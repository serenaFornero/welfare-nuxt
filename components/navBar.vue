<template>
  <v-bottom-navigation
    :value="value"
    color="#374785"
    grow
    app
    height="90"
  >
    <v-btn
      class="mt-7"
      to="/negozio"
    >
        <span
          class="d-none d-sm-flex mt-2"
        >
        Negozio
      </span>
      <v-icon>mdi-shopping</v-icon>
    </v-btn>

    <v-btn
      class="mt-7"
      to="/credito"
    >
       <span
         class="d-none d-sm-flex mt-2"
       >
        Profilo
      </span>

      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn
      class="mt-7"
      to="/ordini"
    >
       <span
         class="d-none d-sm-flex mt-2"
       >
        Ordini
      </span>

      <v-icon>mdi-gift</v-icon>
    </v-btn>



    <v-btn
      class="mt-7"
      to="/portafoglio"
    >
      <span
        class="d-none d-sm-flex mt-2"
      >
        Portafoglio
      </span>
      <v-icon>mdi-wallet</v-icon>

    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({value: 1}),
}
</script>
