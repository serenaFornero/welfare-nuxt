<template>
    <v-container fluid>
        <v-row v-for="values in users" :key="values.id">
            <avatar class="d-flex" :user="values"></avatar>
        </v-row>
        <card-credito class="my-3"></card-credito>
        <v-card
            class="rounded-lg d-flex flex-wrap" elevation="5">
            <v-card-title style="color: #232649">
                I miei crediti
            </v-card-title>
            <v-card-text v-for="values in credit" :key="values.id">
                <p class="subtitle-1 mx-3">Totale accreditato nel {{ new Date().getFullYear() }}:</p>
                <p class="pb-3 ml-3 font-weight-black" style="color: #2573d5">{{ values.tot }} €</p>
                <v-divider></v-divider>
                <p class="subtitle-1 pt-3 mx-3">Credito residuo Gift Card:</p>
                <p class="pb-3 ml-3 font-weight-black " style="color: #2573d5">{{ values.giftCardCredit }} €</p>
                <v-divider></v-divider>
                <p class="subtitle-1 pt-3 mx-3">Scadenza credito disponibile:</p>
                <p class="pb-3 ml-3 font-weight-black " style="color:#F4976C">{{ values.expiration }}</p>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import Alert from '@/components/Alert'
import Avatar from '@/components/Avatar'
import CardCredito from '@/components/CardCredito'

export default {
    components: {
        Avatar,
        CardCredito,
        Alert
    },

    data() {
        return {}
    },
    computed: {
        credit() {
            return this.$store.getters['credit/getCredit']
        },
        users() {
            return this.$store.getters['users/getUser']
        }

    }
}
</script>
