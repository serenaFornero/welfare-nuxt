<template>
    <v-stepper v-model="e6">
        <v-stepper-header>
            <v-stepper-step
                :complete="e6 > 1"
                color="#2573d5"
                step="1"
            >
                Dettagli spesa
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                :complete="e6 > 2"
                color="#2573d5"
                step="2"

            >
                Caricamento documenti
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                step="3"
                color="#2573d5"
            >
                Conferma e invia
            </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
            <v-stepper-content step="1">
                <v-alert
                    dismissible
                    close-text="Close Alert"
                    v-model="alert"
                    border="left"
                    colored-border
                    color="info"
                    elevation="2"
                    class="mx-3 subtitle-2 grey--text text--darken-1"
                    max-width="500"

                >
                    1. Inserisci l'importo di cui desideri richiedere il rimborso (è possibile richiedere un rimborso
                    parziale
                    della spesa sostenuta).
                    <br> 2. Seleziona l'effettivo beneficiario. Se non è presente nell'elenco, vai in <strong>
                    Profilo </strong> > <strong>I miei familiari</strong> > <strong>Aggiungi nuovo familiare</strong>.

                </v-alert>
                <div class="text-right">
                    <v-btn
                        color="info"
                        icon
                        v-if="!alert"
                        @click="alert = true"
                    >
                        <v-icon>mdi-information</v-icon>
                    </v-btn>
                </div>
                <v-card
                    flat
                >
                    <v-form
                        v-model="valid"
                        ref="form"
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="3"
                            >
                                <v-text-field
                                    aria-required="true"
                                    :rules="rules"
                                    v-model="value"
                                    max-width="50"
                                    label="Inserisci l'importo da rimborsare"
                                    type="number"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="3"
                            >
                                <AutocompleteRefund v-model="category"></AutocompleteRefund>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="3"
                            >

                                <v-text-field
                                    aria-required="true"
                                    v-model="type"
                                    label="Tipo di spesa"
                                    max-width="50"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="3"
                            >
                                <AutocompleteBeneficiaries v-model="relative"></AutocompleteBeneficiaries>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
                <div class="d-flex justify-center my-3">
                    <v-btn
                        @click="e6 = 2"
                        color="#2573d5"
                        class="text-capitalize rounded-lg white--text"
                        :disabled="!valid"
                    >
                        Avanti
                    </v-btn>
                </div>
            </v-stepper-content>

            <v-stepper-content step="2">
                <v-alert
                    dismissible
                    close-text="Close Alert"
                    v-model="alert"
                    border="left"
                    color="info"
                    colored-border
                    elevation="2"
                    class="mx-3 subtitle-2 grey--text text--darken-1"
                    max-width="500"

                >
                    1. Seleziona il file da allegare (sono consenti file pdf, jpg, png, bmp).
                    Puoi sceglierlo tra i file presenti nel tuo telefono, comuter, tablet oppure tra i file caricati in
                    <strong>Ricevute</strong> presente nella sezione Portafoglio. <br>
                    2. Clicca su Upload per caricare il file.<br>
                    3. Ripeti l'operazione per ogni file da allegare.
                </v-alert>
                <div class="text-right">
                    <v-btn
                        color="info"
                        icon
                        v-if="!alert"
                        @click="alert = true"
                    >
                        <v-icon>mdi-information</v-icon>
                    </v-btn>
                </div>
                <v-card flat>
                    <v-form v-model="valid">
                        <v-card-text>
                            <v-file-input
                                aria-required="true"
                                :rules="rules"
                                v-model="file"
                                accept="image/*"
                                label="Scegli i file da allegare"
                                placeholder=""
                                max-width="50"
                            ></v-file-input>
                        </v-card-text>
                    </v-form>
                </v-card>
                <div class="d-flex justify-center my-3">
                    <v-btn
                        @click="e6 = 3"
                        color="#2573d5"
                        class="text-capitalize rounded-lg white--text"
                        :disabled="!valid"
                    >
                        Avanti
                    </v-btn>
                </div>
            </v-stepper-content>

            <v-stepper-content step="3">
                <v-alert
                    dismissible
                    close-text="Close Alert"
                    v-model="alert"
                    border="left"
                    color="info"
                    colored-border
                    elevation="2"
                    class="mx-3 subtitle-2 grey--text text--darken-1"
                    max-width="500"

                >
                    1. Controlla che tutti i dati siano corretti. <br>
                    2. Clicca su Invia richiesta per completare la richiesta di rimborso.
                </v-alert>
                <div class="text-right">
                    <v-btn
                        color="info"
                        icon
                        v-if="!alert"
                        @click="alert = true"
                    >
                        <v-icon>mdi-information</v-icon>
                    </v-btn>
                </div>

                <v-row>
                    <v-col cols="12"
                           sm="6"
                           md="3">
                        <v-text-field
                            v-model="value"
                            label="Importo da rimborsare"
                            max-width="50"
                            aria-readonly="true"
                            readonly
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12"
                           sm="6"
                           md="3">
                        <v-text-field
                            v-model="category"
                            label="Categoria di spesa"
                            max-width="50"
                            aria-readonly="true"
                            readonly
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12"
                           sm="6"
                           md="3">
                        <v-text-field
                            v-model="type"
                            label="Tipo di spesa"
                            max-width="50"
                            aria-readonly="true"
                            readonly
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12"
                           sm="6"
                           md="3">
                        <v-text-field
                            v-model="relative"
                            label="Effettivo beneficiario"
                            max-width="50"
                            aria-readonly="true"
                            readonly
                        ></v-text-field>

                    </v-col>
                    <v-col cols="12"
                           sm="6"
                           md="3">
                        <v-text-field
                            v-model="file"
                            label="File allegato"
                            max-width="50"
                            aria-readonly="true"
                            readonly
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center" class="my-3">
                    <v-btn
                        color="#2573d5"
                        class="text-capitalize rounded-lg white--text"
                        to="/richiesta-inviata"
                    >
                        Invia richiesta
                    </v-btn>
                </v-row>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
import AutocompleteBeneficiaries from "@/components/AutocompleteBeneficiaries";
import AutocompleteRefund from "@/components/AutocompleteRefund";

export default {
    name: "StepperRefundRequest",
    components: {
        AutocompleteRefund,
        AutocompleteBeneficiaries
    },
    layouts: 'default',
    data() {
        return {
            alert: false,
            valid: true,
            value: '',
            file: null,
            fileName: null,
            e6: 1,
            relative: null,
            birthDate: null,
            relation: null,
            category: null,
            type: null,
            rules: [v => !!v || 'Il campo è cobbligatorio'],

        }
    },
    watch: {
        relative: {
            immediate: false,
            deep: true,
            handler(value) {
                if (!value) {
                    return false
                }

                this.relation = value.relation
                this.birthDate = value.birthDate
            }
        },
        category: {
            immediate: false,
            deep: true,
            handler(value) {
                if (!value) {
                    return false
                }
                this.type = value.type
            }
        }

    },

    computed: {
        relatives() {
            return this.$store.getters["relatives/getRelative"]
        },
        refund() {
            return this.$store.getters["refund/getRefundCategory"]
        },
    },
    methods: {
    },
}

</script>


