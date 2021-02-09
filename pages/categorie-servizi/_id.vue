<template>
    <v-container fluid>
        <go-back/>
        <p class="headline primary--text">
            {{ getCategoryItem(services[0].categoryId).name }}
        </p>
        <search-field></search-field>
        <v-card class="rounded-lg" elevation="5">
            <v-list>
                <v-list-item four-line v-for="item in services" :key="item.id">
                    <v-list-item-avatar class="rounded-lg">
                        <v-img :src="item.src"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold primary--text">{{ item.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="font-weight-light">{{ item.address }}</v-list-item-subtitle>
                        <v-list-item-subtitle class="grey--text text--darken-1">{{ item.description }}
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="grey--text text--darken-1 mt-2">{{ item.rating }}/5
                        </v-list-item-subtitle>
                        <v-divider></v-divider>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn
                            fab
                            @click="$refs.dialog.open(item)"
                            x-small
                            class="white--text accent"
                        >
                            <v-icon> mdi-arrow-right-bold-circle</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-card>
        <DialogCreditTransfer ref="dialog"></DialogCreditTransfer>
    </v-container>
</template>


<script>
import SearchField from "@/components/SearchField";
import GoBack from "@/components/GoBack";
import DialogCreditTransfer from "@/components/DialogCreditTransfer";


export default {
    layout: 'default',
    components: {
        GoBack,
        SearchField,
        DialogCreditTransfer
    },
    computed: {
        categoriesServices() {
            return this.$store.getters["services/getCategory"]
        },
        services() {
            return this.$store.getters["services/getServiceById"](parseInt(this.$route.params.id))
        },
    },


    methods: {
        getCategoryItem(categoryId) {
            for (let i = 0; i < this.categoriesServices.length; i++) {
                if (categoryId === this.categoriesServices[i].id) {
                    return this.categoriesServices[i]
                }
            }
        },
    },
}


</script>
