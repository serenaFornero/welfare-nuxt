<template>
    <v-container fluid>
        <go-back/>
        <v-card class="rounded-lg" elevation="5">
            <v-card-title class="primary--text">
                Versamenti al fondo di <br> previdenza complementare
            </v-card-title>
            <v-alert
                dismissible
                close-text="Close Alert"
                v-model="alert"
                border="left"
                color="info"
                colored-border
                elevation="2"
                class="mx-3 subtitle-2 grey--text text--darken-1 mb-16"
                max-width="500"
            >
                I contributi volontari che il lavoratore decide di destinare al fondo di previdenza complementare,
                sono integralmente esclusi dal reddito e non si cumulano con altra contribuzione ai fini del
                raggiungimento
                del limite di deducibilità pari a 5.164,57 euro annui. Oltre questa soglia tutte le somme
                versate alla fondo di previdenza complementare sono tassabili e dovranno essere inserite nella
                dichiarazione dei
                redditi.


            </v-alert>
            <div class="text-right mt-n16 mx-2">
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
                <v-form ref="form" v-model="valid" @submit.prevent="addDeposit">
                    <v-text-field
                        v-model="pendingDeposit.name"
                        max-width="50"
                        label="Inserisci un nome"
                        placeholder="es. versamento fondo previdenza"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="pendingDeposit.credit"
                        max-width="50"
                        label="Inserisci importo da versare"
                        placeholder="0,00"
                        required
                        type="number"
                    ></v-text-field>
                    <v-dialog
                        ref="dialog"
                        v-model="pendingDeposit.date"
                        :return-value.sync="date"
                        persistent
                        width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                label="Inserisci la data odierna"
                                append-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            scrollable
                        >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                class="accent--text"
                                @click="modal = false"
                            >
                                Indietro
                            </v-btn>
                            <v-btn
                                class="accent white--text rounded-lg"
                                @click="$refs.dialog.save(date)"
                            >
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>
                    <div class="d-flex justify-center">
                        <v-btn class="mt-10 text-capitalize mb-3 rounded-lg white--text accent" type="submit">
                            Invia richiesta
                        </v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>

import GoBack from "@/components/GoBack";

export default {
    components: {GoBack},
    layout: 'default',

    data: () => ({
        valid: true,
        alert: false,
        date: new Date().toISOString().substr(0, 10),
        modal: false,
        pendingDeposit: {
            name: "",
            credit: "",
            date: "",
            show: true
        }
    }),
    methods: {
        addDeposit() {
            this.$store.commit("deposit/addDeposit", {...this.pendingDeposit})
        }
    },
}
</script>

