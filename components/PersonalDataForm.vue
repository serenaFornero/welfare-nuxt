<template>
    <v-container fluid>
        <form v-for="user in getUsers" :key="user.id">
            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                >
                    <v-text-field
                        max-width="50"
                        :value="user.name + user.surname"
                        readonly
                        label="Nome e cognome"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"

                >
                    <v-text-field
                        :value="user.birthDate"
                        label="Data di nascita"
                        readonly
                    ></v-text-field>

                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"

                >
                    <v-text-field
                        :value="user.taxCode"
                        label="Codice Fiscale"
                        readonly
                    ></v-text-field>

                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"

                >
                    <v-text-field
                        :value="user.sex"
                        label="Sesso"
                        readonly
                    ></v-text-field>

                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                >
                    <v-text-field
                        max-width="50"
                        :value="user.email"
                        readonly
                        label="Email"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                >
                    <v-text-field
                        :value="user.phone"
                        label="Telefono"
                        readonly
                    ></v-text-field>
                </v-col>
            </v-row>
        </form>
    </v-container>
</template>

<script>

export default {
    name: "PersonalDataForm",
    computed: {
        getUsers() {
            return this.$store.getters["users/getUser"]
        }
    },

}
</script>
