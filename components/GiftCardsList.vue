<template>
    <v-list>
        <v-list-item>
            <v-list-item-avatar tile class="rounded-lg">
                <v-img :src="category.src"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="font-weight-bold text-center primary--text">{{ category.brand }}
                </v-list-item-title>
                <v-list-item-subtitle
                    class="grey--text text--darken-1 text-center"
                >
                    Buono Regalo valido per l’acquisto <br> di prodotti disponibili su <br> {{ category.webSite }}
                </v-list-item-subtitle>
                <v-list-item-action class="justify-center">
                    <v-btn
                        class="text-capitalize rounded-lg white--text accent"
                        :to="'/giftCards/' + category.id"
                    >
                        Scopri
                    </v-btn>
                </v-list-item-action>
                <v-divider class="mt-3"></v-divider>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    name: "giftCardsList",
    props: {
        category: {
            type: Object
        }
    },
}
</script>
