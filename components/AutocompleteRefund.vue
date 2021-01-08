<template>
  <v-autocomplete
    clearable
    item-value="id"
    :rules="rules"
    :label="label"
    :items="refund"
    return-object
    v-model="category">
    <template v-slot:selection="{item}">
      <div class="text-capitalize">{{ item.category }}</div>
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
            {{ item.category }}
          </v-list-item-title>
          <v-list-item-subtitle>
            Tipo di spesa: {{ item.type }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
name: "AutocompleteRefund",
  props: {
    value: {
      type: Object
    },
    label: {
      type: String,
      default: 'La categoria di spesa'
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
      category: this.value,
      dialog: false,
    }
  },
  watch: {
    value(val) {
      this.category = val
    },
    category(val) {
      this.$emit('input', val)
    }
  },
  computed: {
    relatives() {
      return this.$store.getters["relatives/getRelative"]
    },
    user(){
      return this.$store.getters["users/getUser"]
    },
    refund(){
      return this.$store.getters["refund/getRefundCategory"]
    },
    concat(){
      return this.relatives.concat(this.user)
    }
  },
}
</script>

