<template>
    <v-container fluid>
        <form v-for="item in getUser" :key="item.id">
            <v-row justify="center">
                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                >
                    <v-text-field
                        max-width="50"
                        :value="item.name + item.surname"
                        label="Intestatario"

                    >
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
                    >
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

        }
    },
    computed: {
        getUser() {
            return this.$store.getters['users/getUser']
        }
    }
}
</script>
