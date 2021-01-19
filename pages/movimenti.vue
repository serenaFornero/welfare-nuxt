<template>
    <v-container fluid>
        <v-row v-for="values in users" :key="values.id">
            <avatar class="d-flex" :user="values"></avatar>
        </v-row>
        <CardCreditAvailable class="my-3"></CardCreditAvailable>
        <search-field></search-field>
        <v-card
            class="rounded-lg d-flex flex-wrap"
            elevation="5"
        >
            <v-card-title class="primary--text">
                Le mie transazioni
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-text class="mt-n5">
                <v-list>
                    <v-list-item
                        v-for="item in transactions"
                        :key="item.id"
                        class="mb-5"
                    >
                        <v-list-item-avatar>
                            <v-icon :color="getItem(item.idCategory).color">{{ getItem(item.idCategory).icon }}</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <p class="mt-3 font-weight-bold" :style="getColor(item.value)"> {{ item.value }} €</p>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import CardCreditAvailable from "@/components/CardCreditAvailable";
import Avatar from "@/components/Avatar";
import SearchField from "@/components/SearchField";

export default {
    layout: 'default',
    components: {
        SearchField,
        Avatar,
        CardCreditAvailable,
    },

    computed: {
        transactions() {
            return this.$store.getters["transactions/getTransactions"]
        },
        categoriesServices() {
            return this.$store.getters["categories/getCategory"]
        },
        categoriesGiftCard() {
            return this.$store.getters["giftCards/getCategory"]
        },
        concatServicesGiftCards() {
            return this.categoriesServices.concat(this.categoriesGiftCard)
        },
        users() {
            return this.$store.getters["users/getUser"]
        },
    },
    methods: {
        getColor(value) {
            if (value < 0) {
                return "color: #f4976c "
            } else if (value > 0) {
                return "color: #2573d5"
            }
        },
        getItem(idCategory) {
            for (let i = 0; i < this.concatServicesGiftCards.length; i++) {
                if (idCategory === this.concatServicesGiftCards[i].id) {
                    return this.concatServicesGiftCards[i]
                }
            }
        },
    }
}
</script>
