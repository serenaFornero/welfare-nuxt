<template>
  <v-bottom-navigation
    :value="value"
    color="#29304d"
    grow
    app
    shift
  >
    <v-btn
      height="100%"
      to="/categorieServizi"
    >
        <span
          class="d-none d-sm-flex mt-2"
        >
        Negozio
      </span>
      <v-icon>mdi-storefront</v-icon>
    </v-btn>
    <v-btn
      height="100%"
      to="/giftCards"
    >
        <span
          class="d-none d-sm-flex mt-2"
        >
        Gift Cards
      </span>
      <v-icon>mdi-gift</v-icon>
    </v-btn>
    <v-btn
      height="100%"
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
      height="100%"
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
