export const state = () => ({
    receipts: [
        {
            id: 0,
            fileName: "myPdf.pdf",
            description: "Ricevuta n1",
            date: "12-12-2020"
        },
        {
            id: 1,
            fileName: "myPdf.pdf",
            description: "Ricevuta n2",
            date: "10-10-2020"
        },
    ],


})

export const getters = {
    getReceipt(state) {
        return state.receipts
    }
}
export const mutations = {
    addReceipt(state, receipt) {
        state.receipts.push({
            fileName: receipt.name,
            description: receipt.description,
        });
        console.log("mutations: receipt aggiunta");
    },
}



