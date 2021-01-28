<template>
    <v-container fluid>
        <go-back/>
        <v-card class="rounded-lg" elevation="5">
            <v-card-title class="primary--text">
                Carica Ricevuta
            </v-card-title>
            <v-alert
                dismissible
                close-text="Close Alert"
                v-model="alert"
                border="left"
                colored-border
                color="info"
                elevation="2"
                class="mx-3 subtitle-2 grey--text text--darken-1 mb-12"
                max-width="500"
            >
                Per caricare una ricevuta:<br>
                1. Seleziona il file da allegare (sono consenti file pdf, jpg, png, bmp).<br>
                2. Clicca su Upload per caricare il file.<br>
                3. Ripeti l'operazione per ogni file da allegare.
                Le ricevute caricate potranno essere utilizzate per effettuare richieste di rimborso
                direttamente dalla seizione <strong>Richiedi rimborso</strong>.
            </v-alert>
            <div class="text-right mt-n13 mx-2">
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
                <v-form ref="form" v-model="valid">
                    <v-file-input v-model="file" label="File name" aria-required="true"></v-file-input>
                    <v-textarea
                        aria-required="true"
                        v-model="fileDescription"
                        prepend-icon="mdi-comment"
                        label="Note"
                        rows="2"
                    ></v-textarea>
                    <v-card-actions class="justify-center">
                        <v-btn
                            @click="addReceipt"
                            class="text-capitalize rounded-lg white--text accent"
                            large
                        >
                            Carica
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card-text>
        </v-card>
        <v-card class=" mt-5 rounded-lg" elevation="5">
            <v-card-title class="primary--text">
                Storico Ricevute
            </v-card-title>
            <v-card-text>
                <v-card-subtitle v-if="receipts.length === 0">
                    Al momento non ci sono ricevute.
                </v-card-subtitle>
                <v-list v-else>
                    <v-list-item two-line v-for="item in receipts" :key="item.id">
                        <v-icon class="mr-5 primary--text">mdi-receipt</v-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.fileName }}</v-list-item-title>
                            <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import GoBack from "@/components/GoBack";

export default {
    layout: 'default',
    components: {
        GoBack
    },
    data: () => ({
        valid: false,
        alert: false,
        file: null,
        fileName: null,
        fileDescription: null,
        receipt: {
            fileName: '',
            description: '',
            show: true
        },
    }),
    computed: {
        receipts() {
            return this.$store.getters["receipts/getReceipt"]
        }
    },
    methods: {
        addReceipt: function () {
            const file = {
                id: this.$store.getters["receipts/getReceipt"].length,
                name: this.file.name,
                description: this.fileDescription,
                date: new Date(this.file.lastModified).toISOString()
            }
            this.$store.commit('receipts/addReceipt', {...file})
        },
    },
}
</script>
