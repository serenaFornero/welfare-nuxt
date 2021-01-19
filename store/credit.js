export const state = () => ({
    credit: [
        {
            userId: 0,
            creditAvailable: 120,
            tot: 860,
            giftCardCredit: 258.23,
            expiration: "30/12/2020"

        }
    ],
    creditAvailable: 120,
})

export const getters = {
    getCredit(state) {
        return state.credit
    },
    getCreditAvailable(state) {
        return state.creditAvailable
    },
}
export const mutations = {
    decrementCredit(state, creditAvailable) {
        state.creditAvailable -= creditAvailable
        console.log("mutations: trasferimento effettuato");
    },


}
