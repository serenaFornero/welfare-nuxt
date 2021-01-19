<template>
    <v-container fluid>
        <go-back/>
        <v-card class="rounded-lg flex-column justify-center" elevation="5">
            <div class="text-center">
                <v-row class="d-flex flex-column" v-for="values in getUser" :key="values.id">
                    <avatar :user="values"></avatar>
                </v-row>
                <v-btn
                    class="my-2 text-capitalize rounded-lg accent--text"
                    outlined
                >
                    Cambia immagine
                </v-btn>
            </div>
            <v-card-title class="primary--text">
                I miei dati
            </v-card-title>
            <PersonalDataForm></PersonalDataForm>
            <v-card-title class="primary--text">
                Coordinate Bancarie
            </v-card-title>
            <v-alert
                dismissible
                close-text="Close Alert"
                v-model="alert"
                border="left"
                colored-border
                color="info"
                elevation="2"
                class="mx-3 mb-10 subtitle-2 grey--text text--darken-1"
                max-width="500"
            >
                Per ususfruire del servizio rimborsi spese è necessario inserire il codice IBAN del tuo conto corrente
                bancario

            </v-alert>
            <div class="text-right mt-n12">
                <v-btn
                    color="info"
                    icon
                    v-if="!alert"
                    @click="alert = true"
                >
                    <v-icon>mdi-information</v-icon>
                </v-btn>
            </div>
            <bank-details-form></bank-details-form>
            <v-card-title class="primary--text">
                I miei familiari
            </v-card-title>
            <v-card-actions class="subtitle-2 mx-2 grey--text text--darken-1">
                Aggiungi nuovo familiare
                <v-spacer></v-spacer>
                <v-btn
                    to="/aggiungi-familiare"
                    class="white--text accent"
                    fab
                    x-small
                >
                    <v-icon
                        small
                    >mdi-plus
                    </v-icon>
                </v-btn>
            </v-card-actions>
            <v-card-text>
                <v-form>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="3">
                            <relatives-autocomplete v-model="relative"></relatives-autocomplete>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="3">
                            <v-text-field
                                readonly
                                v-model="birthDate"
                                label="Data di nascita"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="3">
                            <v-text-field
                                readonly
                                v-model="relation"
                                label="Legame di parentela"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>


<script>
import BankDetailsForm from "@/components/BankDetailsForm";
import Password from "@/components/Password";
import RelativesAutocomplete from "~/components/RelativesAutocomplete";
import avatar from "@/components/Avatar";
import GoBack from "@/components/GoBack";
import PersonalDataForm from "@/components/PersonalDataForm";


export default {
    layout: 'default',
    components: {
        BankDetailsForm,
        PersonalDataForm,
        RelativesAutocomplete,
        Password,
        avatar,
        GoBack
    },
    data: () => ({
        relative: null,
        birthDate: null,
        relation: null,
        alert: false,
    }),
    computed: {
        getUser() {
            return this.$store.getters["users/getUser"]
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
        }
    },
}
</script>
