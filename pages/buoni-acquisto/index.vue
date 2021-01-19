<template>
    <v-container fluid>
        <v-row class="d-flex">
            <p class="headline ml-4 primary--text">
                Buoni Acquisto
            </p>
        </v-row>
        <search-field></search-field>
        <v-card
            class="rounded-lg"
            elevation="5"
        >
            <giftCardsList v-for="item in categoriesGiftCards" :key="item.id" :category="item"></giftCardsList>
        </v-card>
    </v-container>
</template>


<script>

import SearchField from "@/components/SearchField";
import giftCardsList from "@/components/GiftCardsList";

export default {
    layout: 'default',
    components: {
        giftCardsList,
        SearchField,

    },
    data() {
        return {}
    },
    methods: {},
    computed: {
        categoriesGiftCards() {
            return this.$store.getters["giftCards/getCategory"]
        },
    },


}
</script>
