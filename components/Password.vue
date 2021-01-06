<template>
  <form>
    <v-text-field
      v-model="password"
      :append-icon=" showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required]"
      :type=" showPassword ? 'text' : 'password'"
      label="Password"
      @click:append=" showPassword = ! showPassword"
    ></v-text-field>
  </form>
</template>
<script>

export default {
  name: "provaPassword",
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






