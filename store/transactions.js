export const state = () => ({
  transactions: [
    {
      id: 0,
      name: "Market Pinerolo" ,
      value: -20,
      idCategory: 0,
      date: "14-12-2020",
      userId: 0
    },
    {
      id: 2,
      name: "Gift Card Amazon" ,
      value: -15,
      idCategory: 8,
      date: "1-10-2020",
      userId: 0
    },
    {
      id: 3,
      name: "Visita medica" ,
      value: -50,
      idCategory: 1,
      date: "10-10-2020",
      userId: 0
    },
    {
      id: 4,
      name: "Gift Card Decathlon " ,
      value: -20,
      idCategory: 10,
      date: "4-11-2020",
      userId: 0
    },
    {
      id: 5,
      name: "Gift Card Netflix" ,
      value: -50,
      idCategory: 9,
      date: "6-10-2020",
      userId: 0
    }
  ],


})

export const getters = {
  getTransactions(state){
    return state.transactions
  },
  getRefund(state){
    return state.transactions.filter(el => el.value > 0)
  }
}


