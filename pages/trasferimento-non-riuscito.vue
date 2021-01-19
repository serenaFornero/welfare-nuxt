<template>
    <v-container fluid>
        <go-back/>
        <v-row v-for="values in getUser" :key="values.id">
            <avatar class="d-flex" :user="values"></avatar>
        </v-row>
        <CardCreditAvailable class="my-3"></CardCreditAvailable>
        <v-card
            class="rounded-lg" elevation="5"
        >
            <v-row>
                <v-img src="feedback.png" class="mt-5 mb-3" height="80" width="100" contain></v-img>
            </v-row>
            <v-row justify="center">
                <v-card-title class="primary--text">
                    Trasferimento non riuscito!
                </v-card-title>
            </v-row>
            <v-card-subtitle class="text-center mt-3">
                Assicurati di:
                <v-list>
                    <v-list-item-subtitle>1. Avere la connessione a internet</v-list-item-subtitle>
                    <v-list-item-subtitle>2. Avere inserito il destinatario correttamente</v-list-item-subtitle>
                    <v-list-item-subtitle>3. Avere credito sufficiente</v-list-item-subtitle>
                </v-list>
            </v-card-subtitle>
            <v-row justify="center">
                <v-card-actions>
                    <v-btn
                        width="100"
                        class="text-capitalize mb-5 rounded-lg white--text error"
                    >
                        Ritenta
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
