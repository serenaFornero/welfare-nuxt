<template>
  <v-text-field
    :type="showPassword ? 'text' : 'password'"
    :label="label"
    v-model="password"
    :rules="rules"
    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="showPassword = !showPassword"/>

</template>
<script>

export default {
  props: {
    value: {
      type: String
    },
    label:{
      default: () => 'Password'
    },
    rules: {
      type: Array,
      default: () => [
        v => !!v || 'Il campo è obbligatorio'
      ]
    }
  },
  watch:{
    value(val) {
      this.password = val
    },
    password(val) {
      this.$emit('input', val)
    }
  },
  data() {
    return {
      showPassword: false,
      password: '',
    }
  }
}

</script>


