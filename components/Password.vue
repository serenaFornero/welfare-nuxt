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
    name: "Password",
    props: {
        value: {
            type: String
        },
        label: {
            default: () => 'Password'
        },

    },
    watch: {
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
            rules: {
                required: value => !!value || 'Il campo è obbligatorio',
            }
        }
    }
}

</script>






