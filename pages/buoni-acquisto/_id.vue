<template>
    <v-container fluid>
        <go-back/>
        <p class="headline primary--text">
            Buoni Acquisto
        </p>
        <v-card
            v-for="card in giftCards"
            :key="card.id"
            class="rounded-lg my-2 text-center"
            elevation="5"
        >
            <v-card-title class="primary--text">
                Gift Card {{ getImageFromCategory(card.categoryId).brand }}
            </v-card-title>
            <v-avatar rounded size="80">
                <v-img :src="getImageFromCategory(card.categoryId).src"></v-img>
            </v-avatar>
            <v-card-subtitle>
                {{ getImageFromCategory(card.categoryId).description }}
            </v-card-subtitle>
            <v-card-text class="font-weight-bold accent--text">
                {{ card.value }}€
            </v-card-text>
            <v-btn
                @click="$refs.DialogPurchaseGiftCard.open(card)"
                class="text-capitalize rounded-lg mb-3 white--text accent"
            >
                Acquista
            </v-btn>
        </v-card>
        <DialogPurchaseGiftCard
            ref="DialogPurchaseGiftCard">
        </DialogPurchaseGiftCard>
    </v-container>
</template>

<script>
import DialogPurchaseGiftCard from "@/components/DialogPurchaseGiftCard";
import GoBack from "@/components/GoBack";

export default {
    layout: 'default',
    components: {
        DialogPurchaseGiftCard,
        GoBack
    },
    props: {
        category: {
            type: Object
        }
    },
    data() {
        return {
            dialog: false,
        }
    },
    computed: {
        giftCards() {
            return this.$store.getters["giftCards/getCardsById"](parseInt(this.$route.params.id))
        },
    },
    methods: {
        getImageFromCategory(categoryId) {
            const cat = this.$store.getters['giftCards/getCategoryById'](categoryId)[0]
            return cat
        },
    },
}
</script>
