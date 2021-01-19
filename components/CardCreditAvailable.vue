<template>
    <v-card class="rounded-lg primary">
        <v-card-title class="white--text">
            Credito disponibile: {{ getCredit  }} €
        </v-card-title>
        <v-card-actions class="mx-3">
            <v-btn
                outlined
                class="mb-5 text-capitalize rounded-lg white--text"
                to="/movimenti"
                width="100"

            >
                Movimenti
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                outlined
                class="mb-5 text-capitalize rounded-lg white--text"
                to="/home"
                width="100"
            >
                Crediti
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'CardCreditAvailable',
    computed: {
        getCredit() {
            return this.$store.getters["credit/getCreditAvailable"]
        },
    }
}
</script>
