<template>
    <v-col>
        <v-avatar size="56">
            <nuxt-link
                tag="img"
                :src="user.avatar"
                alt="user"
                to="/profilo">
            </nuxt-link>
        </v-avatar>
        <p class="headline mt-2 ml-2 primary--text">
             {{ getFullName (user.name, user.surname) }}
        </p>
    </v-col>
</template>

<script>
export default {
    name: 'Avatar',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        getFullName(name, surname){
            return name + ' ' + surname
        }
    }
}
</script>
