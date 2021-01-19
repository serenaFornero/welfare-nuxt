<template>
    <v-container fluid>
        <v-row v-for="values in getUser" :key="values.id">
            <avatar class="d-flex" :user="values"></avatar>
        </v-row>
        <CardCreditAvailable class="my-3"></CardCreditAvailable>
        <v-card
            class="rounded-lg d-flex flex-wrap" elevation="5">
            <v-card-title class="primary--text">
                I miei crediti
            </v-card-title>
            <v-card-text v-for="values in getCredit" :key="values.id">
                <p class="subtitle-1 mx-3">Totale accreditato nel {{ new Date().getFullYear() }}:</p>
                <p class="pb-3 ml-3 font-weight-black accent--text">{{ values.tot }} €</p>
                <v-divider></v-divider>
                <p class="subtitle-1 pt-3 mx-3">Credito residuo Gift Card:</p>
                <p class="pb-3 ml-3 font-weight-black accent--text">{{ values.giftCardCredit }} €</p>
                <v-divider></v-divider>
                <p class="subtitle-1 pt-3 mx-3">Scadenza credito disponibile:</p>
                <p class="pb-3 ml-3 font-weight-black warning--text">{{ values.expiration }}</p>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import Avatar from '@/components/Avatar'
import CardCreditAvailable from '@/components/CardCreditAvailable'

export default {
    layout: 'default',
    components: {
        Avatar,
        CardCreditAvailable,
    },
    computed: {
        getCredit() {
            return this.$store.getters['credit/getCredit']
        },
        getUser() {
            return this.$store.getters['users/getUser']
        }
    }
}
</script>
