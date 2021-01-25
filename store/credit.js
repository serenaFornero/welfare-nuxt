export const state = () => ({

    userId: 0,
    creditAvailable: 120,
    tot: 860,
    giftCardCredit: 258.23,
    expiration: "30/12/2020"


})

export const getters = {
    getTot(state) {
        return state.tot
    },
    getGiftCardCredit(state) {
        return state.giftCardCredit
    },
    getExpiration(state) {
        return state.expiration
    },
    getCreditAvailable(state) {
        return state.creditAvailable
    },
}
export const mutations = {
    decrementCredit(state, price) {
        state.creditAvailable = state.creditAvailable - price
        console.log("mutations: trasferimento effettuato");
    },
}
