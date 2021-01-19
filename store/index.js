export const state = () => ({
    authenticated: false
})

export const getters = {
    isAuthenticated: (state) => state.authenticated
}

export const mutations = {
    authenticate(state, payload) {
        state.authenticated = payload
    }
}

