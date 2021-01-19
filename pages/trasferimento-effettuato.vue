<template>
    <v-container fluid>
        <go-back/>
        <v-row v-for="values in getUser" :key="values.id">
            <avatar class="d-flex" :user="values"></avatar>
        </v-row>
        <CardCreditAvailable class="my-3"></CardCreditAvailable>
        <v-card
            class="rounded-lg" elevation="5">
            <v-row>
                <v-img src="good.png" class="mt-5 mb-3" height="80" width="100" contain></v-img>
            </v-row>
            <v-row justify="center">
                <v-card-title class="primary--text">
                    Trasferimento Effettuato!
                </v-card-title>
            </v-row>
            <v-card-subtitle class="text-center mt-3">
                Tieni traccia delle tue transazioni nella sezione <strong>movimenti.</strong>
            </v-card-subtitle>
            <v-row justify="center">
                <v-card-actions>
                    <v-btn
                        class="text-capitalize mb-5 rounded-lg white--text accent"
                        to="/trasferimento-non-riuscito"
                    >
                        Trasferisci di nuovo
                    </v-btn>
                </v-card-actions>
            </v-row>
        </v-card>
    </v-container>
</template>


<script>
import CardCreditAvailable from "@/components/CardCreditAvailable";
import Avatar from "@/components/Avatar";
import GoBack from "@/components/GoBack";

export default {
    layout: 'default',
    components: {
        GoBack,
        Avatar,
        CardCreditAvailable,
    },
    computed: {
        getUser() {
            return this.$store.getters["users/getUser"]
        },
    }
}
</script>
