<template>
    <v-autocomplete
        clearable
        item-value="id"
        :rules="rules"
        :label="label"
        :items="getBeneficiaries"
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
            </v-list-item>
        </template>
    </v-autocomplete>
</template>

<script>
export default {
    name: 'AutocompleteBeneficiaries',
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
            default: 'L\'effettivo beneficiario'
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
            dialog: false
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
        getRelatives() {
            return this.$store.getters['relatives/getRelative']
        },
        getUser() {
            return this.$store.getters['users/getUser']
        },
        getBeneficiaries() {
            return this.getRelatives.concat(this.getUser)
        }
    },
    methods: {
        getFullName(name, surname) {
            return name + ' ' + surname
        },
        getRelDetails(relation, birthDate) {
            return relation + ' ' + birthDate
        }

    }
}

</script>

