<template>
    <v-container fluid>
        <go-back/>
        <div v-for="item in ordersById" :key="item.id">
            <p class="headline primary--text">Gift Card {{ item.brand }}</p>
            <v-card
                class="rounded-lg d-flex flex-wrap flex-column justify-center"
                elevation="5"
            >
                <v-alert
                    dismissible
                    close-text="Close Alert"
                    v-model="alert"
                    border="left"
                    color="info"
                    colored-border
                    elevation="2"
                    class="mx-3 mt-5 subtitle-2 grey--text text--darken-1"
                    max-width="500"
                >
                    I voucher potranno essere attivati cliccando sul pulsante "attiva". I voucher, dopo essere stati
                    attivati,
                    dovranno essere utilizzati entro 30 minuti.
                </v-alert>
                <div class="text-right mx-2">
                    <v-btn
                        color="info"
                        icon
                        v-if="!alert"
                        @click="alert = true"
                    >
                        <v-icon>mdi-information</v-icon>
                    </v-btn>
                </div>
                <v-list class="text-center">
                    <v-list-item-group>
                        <v-list-item-avatar
                            rounded
                            size="80"
                            class="ml-8"
                        >
                            <v-img :src="item.src"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-subtitle class="my-2">Buono Regalo valido per l’acquisto di prodotti <br>
                            disponibili su <strong>{{ getGiftCardItem(item.categoryId).webSite }}</strong> del vaore di
                            <strong>{{ item.value }}€</strong>
                        </v-list-item-subtitle>
                        <v-list-item-action>
                            <DialogActivateGiftCard v-for="item in ordersById" :key="item.id"
                                                    :orders="item"></DialogActivateGiftCard>
                        </v-list-item-action>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import DialogActivateGiftCard from '@/components/DialogActivateGiftCard'
import GoBack from '@/components/GoBack'

export default {
    layout: 'default',
    components: {
        GoBack,
        DialogActivateGiftCard
    },

    data() {
        return {
            alert: false
        }
    },

    computed: {
        ordersById() {
            return this.$store.getters['orders/getOrdersById'](parseInt(this.$route.params.id))
        },
        categoriesGiftCards() {
            return this.$store.getters['giftCards/getCategory']
        }
    },

    methods: {
        getGiftCardItem(categoryId) {
            for (let i = 0; i < this.categoriesGiftCards.length; i++) {
                if (categoryId === this.categoriesGiftCards[i].id) {
                    return this.categoriesGiftCards[i]
                }
            }
        }
    }
}
</script>
