export const state = () => ({
    deposits: [
        {
            id: 0,
            name: "Versamento previdenza",
            credit: 1000,
            date: "12-12-2020"
        },
        {
            id: 1,
            name: "Versamento previdenza",
            credit: 3000,
            date: "14-12-2020"
        }
    ],

    pendingDeposits: []
})

export const getters = {
    getDeposit(state) {
        return state.deposits
    },
    getPendingDeposit(state) {
        return state.pendingDeposits
    }
}

export const mutations = {
    addDeposit(state, pendingDeposit) {
        state.pendingDeposits.push({
            name: pendingDeposit.name,
            credit: pendingDeposit.credit,
            date: pendingDeposit.date,
        });
        console.log("mutations: deposit aggiunto");
    },
}
