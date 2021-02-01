<template>
    <v-autocomplete
        clearable
        item-value="id"
        :prepend-inner-icon="prependInnerIcon"
        :rules="rules"
        :label="label"
        :items="relatives"
        return-object
        v-model="relative">
        <template v-slot:selection="{item}">
            <div class="text-capitalize">{{ getFullName(item.name, item.surname) }}</div>
        </template>
        <template v-slot:item="{ attrs, item, on }">
            <v-list-item
                v-bind="attrs"
                active-class="primary elevation-4 white--text text-capitalize"
                class="ma-2 v-sheet"
                elevation="0"
                v-on="on"
            >
                <v-list-item-content>
                    <v-list-item-title>
                        {{ getFullName(item.name, item.surname) }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ getRelDetails(item.relation, item.birthDate) }}
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="290"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                            v-bind="attrs"
                            v-on="on"
                        >
                            mdi-close
                        </v-icon>
                    </template>
                    <v-card class="rounded-lg">
                        <v-card-title class="headline primary--text">
                            Elimina familiare
                        </v-card-title>
                        <v-card-text>
                            Sei sicuro di voler eliminare il familiare dalla lista?
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                class="text-capitalize accent--text"
                                text
                                @click="dialog = false"
                            >
                                Indietro
                            </v-btn>
                            <v-btn
                                class="text-capitalize white--text rounded-lg accent"
                                @click="removeRel"
                            >
                                Procedi
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-list-item>
        </template>
    </v-autocomplete>
</template>


<script>
export default {
    name: 'RelativesAutocomplete',
    props: {
        prependInnerIcon: {
            type: String,
            default: 'mdi-account-multiple'
        },
        value: {
            type: Object
        },
        label: {
            type: String,
            default: 'Seleziona Famliare'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        dense: {
            type: Boolean,
            default: false
        },
        rules: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            relative: this.value,
            dialog: false,
            dialogRemoveRel: null
        }
    },
    watch: {
        value(val) {
            this.relative = val
        },
        relative(val) {
            this.$emit('input', val)
        }
    },

    computed: {
        relatives() {
            return this.$store.getters["relatives/getRelative"]
        },
    },

    methods: {
        removeRel: function () {
            this.$store.commit("relatives/removeRel")

        },
        getFullName(name, surname) {
            return name + ' ' + surname
        },
        getRelDetails(relation, birthDate) {
            return relation + ' ' + birthDate
        }
    }
}
</script>
