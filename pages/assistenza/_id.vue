<template>
    <v-container>
        <go-back/>
        <v-card class="rounded-lg mt-2">
            <v-toolbar
                class="primary"
            >
                <v-toolbar-title class="white--text">{{ getCategoryItem(getFaq[0].categoryId).name }}</v-toolbar-title>
            </v-toolbar>
            <template>
                <v-expansion-panels accordion focusable>
                    <v-expansion-panel
                        v-for="value in getFaq"
                        :key="value.id"
                    >
                        <v-expansion-panel-header>
                            {{ value.name }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{ value.description }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </template>
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
    computed: {
        categoriesSupport() {
            return this.$store.getters["faq/getCategory"]
        },
        getFaq() {
            return this.$store.getters["faq/getFaqById"](parseInt(this.$route.params.id))
        }
    },
    methods: {
        getCategoryItem(categoryId) {
            for (let i = 0; i < this.categoriesSupport.length; i++) {
                if (categoryId === this.categoriesSupport[i].id) {
                    return this.categoriesSupport[i]
                }
            }
        },
    },
}
</script>
