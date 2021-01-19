<template>
    <v-dialog
        persistent
        v-model="dialog"
        max-width="500px"
    >
        <v-card class="rounded-lg">
            <v-card-title class="headline primary--text">
                Gift Card {{ card.name }}
            </v-card-title>
            <v-card-text>
                Cliccando su <strong>Procedi</strong> l'acquisto del buono <strong>{{card.brand}}</strong>
                del valore di <strong> {{ card.value }}€ </strong> verrà confermato.
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    class="text-capitalize"
                    color="accent"
                    text
                    @click="dialog = false"
                >
                    Indietro
                </v-btn>
                <v-btn
                    class="text-capitalize white--text rounded-lg accent"
                    to="/trasferimento-effettuato"
                    @click="addOrder(card)"
                >
                    Procedi
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "DialogPurchaseGiftCard",
    data() {
        return {
            card: {
                name: null,
                brand: '',
                value: ''

            },
            dialog: false,
        }
    },
    methods: {
        open(giftCard) {
            this.card = giftCard
            this.dialog = true
            console.log()
        },
        close() {
            this.dialog = false
            this.card = {
                name: null,
            }
        },
        addOrder: function (){
            this.$store.commit('orders/addOrder', {...this.card})
        }
    }
}

</script>


