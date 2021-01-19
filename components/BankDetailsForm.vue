<template>
    <v-container fluid>
        <form v-for="item in getUser" :key="item.id">
            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                >
                    <v-text-field
                        max-width="50"
                        :value="item.name + item.surname"
                        readonly
                        label="Intestatario"
                        :hint="!isEditing ? 'Clicca l\'icona a sinistra per modificare' : 'Clicca l\'icona per salvare'"
                        persistent-hint
                    >
                        <template v-slot:prepend-inner>
                            <v-slide-x-reverse-transition
                                mode="out-in"
                            >
                                <v-icon
                                    :key="`icon-${isEditing}`"
                                    :color="isEditing ? 'success' : 'gray'"
                                    @click="isEditing = !isEditing"
                                    v-text="isEditing ? 'mdi-check-outline' : 'mdi-border-color'"
                                ></v-icon>
                            </v-slide-x-reverse-transition>
                        </template>
                    </v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                >
                    <v-text-field
                        :value="item.iban"
                        label="IBAN"
                        readonly
                        :hint="!isEditing ? 'Clicca l\'icona a sinistra per modificare' : 'Clicca l\'icona per salvare'"
                        persistent-hint
                    >
                        <template v-slot:prepend-inner>
                            <v-slide-x-reverse-transition
                                mode="out-in"
                            >
                                <v-icon
                                    :key="`icon-${isEditing}`"
                                    :color="isEditing ? 'success' : 'gray'"
                                    @click="isEditing = !isEditing"
                                    v-text="isEditing ? 'mdi-check-outline' : 'mdi-border-color'"
                                ></v-icon>
                            </v-slide-x-reverse-transition>
                        </template>
                    </v-text-field>
                </v-col>
            </v-row>
        </form>
    </v-container>
</template>

<script>

export default {
    name: 'BankDetailsForm',
    data() {
        return {
            isEditing: false
        }
    },
    computed: {
        getUser() {
            return this.$store.getters['users/getUser']
        }
    }
}
</script>
