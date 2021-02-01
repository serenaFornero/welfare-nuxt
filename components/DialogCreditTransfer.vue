<template>
    <v-dialog
        persistent
        v-model="dialog"
        max-width="500px"
    >
        <v-card class="rounded-lg" elevation="5">
            <v-card-title class="justify-center primary--text">{{ item.name }}</v-card-title>
            <v-card-subtitle class="text-center"> {{ item.address }}</v-card-subtitle>
            <form ref="form">
                <v-row justify="center">
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field
                            aria-required="true"
                            v-model="creditAvailable"
                            class="mx-3 rounded-lg my-3"
                            label="Solo"
                            placeholder="0,00"
                            type="number"
                            solo
                            :rules="[rules.required]"
                        >
                        </v-text-field>

                    </v-col>
                </v-row>
            </form>
            <v-card-actions class="mx-3 py-3">
                <v-btn
                    class="text-capitalize accent--text"
                    text
                    @click="dialog = false"
                >
                    Indietro
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn
                    class="text-capitalize white--text rounded-lg accent"
                    to="/trasferimento-effettuato"
                    @click="creditTransfer"

                >
                    Procedi
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "DialogCreditTransfer",
    data() {
        return {
            dialog: false,
            item: { name: null },
            rules: { required: value => !!value || 'Il campo è obbligatorio'},
            creditAvailable: '',
        }
    },

    methods: {
        open(service) {
            this.item = service
            this.dialog = true
        },
        close() {
            this.dialog = false
            this.item = {name: null}
        },
        creditTransfer() {
            this.$store.commit('credit/decrementCredit', this.creditAvailable)
        },
    }
}


</script>


