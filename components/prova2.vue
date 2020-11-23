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
      <div class="text-capitalize">{{ item.name + ' ' + item.surname }}</div>
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
            {{ item.name + ' ' + item.surname }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ item.relation }} - {{ item.birthDate }}
          </v-list-item-subtitle>
        </v-list-item-content>

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
      relatives: [
        {
          id: 1,
          name: 'Log-in',
          surname: 'Cante',
          birthDate: '10/02/1993',
          relation: 'Fratello'
        },
        {
          id: 2,
          name: 'Credito',
          surname: 'Fornero',
          birthDate: '19/11/1996',
          relation: 'Sorella'
        },
        {
          id: 3,
          name: 'trasferisci',
          surname: 'Rossi',
          birthDate: '01/01/1958',
          relation: 'Padre'
        },
        {
          id: 4,
          name: 'trasferisci',
          surname: 'Rossi',
          birthDate: '01/01/1958',
          relation: 'Padre'
        },
        {
          id: 5,
          name: 'trasferisci',
          surname: 'Rossi',
          birthDate: '01/01/1958',
          relation: 'Padre'
        },
        {
          id: 6,
          name: 'servizi',
          surname: 'Rossi',
          birthDate: '01/01/1958',
          relation: 'Padre'
        }
      ]
    }
  },
  watch: {
    value(val) {
      this.relative = val
    },
    relative(val) {
      this.$emit('input', val)
    }
  }
}
</script>
