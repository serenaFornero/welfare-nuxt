<template>
    <v-bottom-navigation
        color="accent"
        grow
        app
        shift
    >
        <v-btn
            nuxt
            exact
            height="100%"
            to="/categorie-servizi"
        >
        <span
            class="d-none d-sm-flex mt-2"
        >
        Negozio
      </span>
            <v-icon>mdi-storefront</v-icon>
        </v-btn>
        <v-btn
            nuxt
            exact
            height="100%"
            to="/buoni-acquisto"
        >
        <span
            class="d-none d-sm-flex mt-2"
        >
        Gift Cards
      </span>
            <v-icon>mdi-gift</v-icon>
        </v-btn>
        <v-btn
            nuxt
            exact
            height="100%"
            to="/home"
        >
       <span
           class="d-none d-sm-flex mt-2"
       >
        Profilo
      </span>

            <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn
            nuxt
            exact
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
    name: 'NavBar'
}
</script>
